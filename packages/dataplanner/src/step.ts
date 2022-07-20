import chalk from "chalk";
import type { GraphQLObjectType } from "graphql";
import { inspect } from "util";

import { isDev, noop } from "./dev.js";
import type { LayerPlan } from "./engine/LayerPlan.js";
import { currentLayerPlan } from "./engine/lib/withGlobalLayerPlan.js";
import { getDebug } from "./global.js";
import type {
  CrystalResultsList,
  CrystalResultStreamList,
  CrystalValuesList,
  ExecutionExtra,
  PlanOptimizeOptions,
  PromiseOrDirect,
} from "./interfaces.js";
import type { __ItemStep } from "./steps/index.js";

function reallyAssertFinalized(plan: BaseStep): void {
  if (!plan.isFinalized) {
    throw new Error(
      `Step ${plan} is not finalized; did you forget to call \`super.finalize()\` from its \`finalize()\` method?`,
    );
  }
}

// Optimise this away in production.
export const assertFinalized = !isDev ? noop : reallyAssertFinalized;

/**
 * The base abstract plan type; you should not extend this directly - instead
 * use an ExecutableStep (for use when planning output fields) or a
 * ModifierStep (for use when planning arguments/input fields).
 *
 * @remarks
 *
 * Though it might seem that ModifierStep should be used for all inputs
 * (arguments, input objects), this is not the case. When planning an output
 * field, all inputs to it (including arguments, parent plan, context, etc)
 * should be other executable plans. The only time that ModifierStep is used is
 * when writing specific plans as part of the argument or input field
 * definitions themself; even in these cases the inputs to these plan resolvers
 * will be ExecutablePlans.
 */
export abstract class BaseStep {
  // Explicitly we do not add $$export here because we want children to set it

  public readonly layerPlan: LayerPlan;
  public isArgumentsFinalized = false;
  public isFinalized = false;
  public debug = getDebug();

  // TODO: change hasSideEffects to getter/setter, forbid setting after a
  // particular phase.
  /**
   * Set this true for plans that implement mutations; this will prevent them
   * from being tree-shaken.
   */
  public hasSideEffects = false;

  constructor() {
    const layerPlan = currentLayerPlan();
    this.layerPlan = layerPlan;
  }

  public toString(): string {
    const meta = this.toStringMeta();
    return chalk.bold.blue(
      `${this.constructor.name.replace(/Step$/, "")}${
        meta != null && meta.length ? chalk.grey(`<${meta}>`) : ""
      }`,
    );
  }

  /**
   * This metadata will be merged into toString when referencing this plan.
   */
  public toStringMeta(): string | null {
    return null;
  }

  public finalize(): void {
    if (!this.isFinalized) {
      this.isFinalized = true;
    } else {
      throw new Error(
        `Step ${this} has already been finalized - do not call \`finalize()\` from user code!`,
      );
    }
  }
}

/**
 * Executable plans are the plans associated with leaves on the GraphQL tree,
 * they must be able to execute to return values.
 */
export class ExecutableStep<TData = any> extends BaseStep {
  // Explicitly we do not add $$export here because we want children to set it
  static $$export: any;

  /**
   * @internal
   */
  public _pathByDescendent: Map<ExecutableStep, ExecutableStep[] | null> =
    new Map();

  /**
   * Only assigned once operationPlan is 'ready'.
   *
   * @internal
   */
  public _recursiveDependencyIds = new Set<string>();

  /**
   * Setting this true is a performance optimisation, but it comes with strong
   * rules; we do not test you comply with these rules (as that would undo the
   * performance gains) but should you break them the behaviour is undefined
   * (and, basically, the schema may no longer be GraphQL compliant).
   *
   * Do not set this true unless the following hold:
   *
   * - The `execute` method must be a regular (not async) function
   * - The `execute` method must NEVER return a promise
   * - The values within the list returned from `execute` must NEVER include
   *   promises or CrystalError objects
   *
   * It's acceptable for the `execute` method to throw if it needs to.
   *
   * This optimisation applies to the majority of the built in plans and allows
   * the engine to execute without needing to resolve any promises which saves
   * precious event-loop ticks.
   */
  public isSyncAndSafe!: boolean;

  /**
   * The ids for plans this plan will need data from in order to execute. NOTE:
   * it's important we use the id and not the plan here otherwise when we swap
   * out plans during optimisation things will go awry.
   *
   * @internal
   */
  private readonly _dependencies: number[] = [];

  /**
   * The ids for plans that depend on this plan; useful when performing
   * "dependents first" tasks. Cannot be fully trusted unless "treeShakeSteps"
   * has been called, since some of these dependents may not exist in the
   * future.
   *
   * @internal
   */
  public readonly _dependents: number[] = [];

  /**
   * The ids for plans this plan will need data from in order to execute.
   */
  public readonly dependencies: ReadonlyArray<number> = this._dependencies;

  /**
   * @internal
   */
  public dependentPlans: Array<ExecutableStep> = [];

  /**
   * Every layer plan has exactly one parent step. This is the reverse relationship.
   *
   * @internal
   */
  public childLayerPlans: Array<LayerPlan<any>> = [];

  /**
   * We reserve the right to change our mind as to whether this is a string or
   * number.
   *
   * @internal
   */
  public readonly id: number;
  /**
   * The group ids this plan is associated with (e.g. if the field this plan
   * was spawned from came from multiple selection sets in the GraphQL
   * document, some may have been deferred/streamed/etc which may lead to
   * multiple groupIds).
   *
   * @internal
   */
  public readonly groupIds: number[] = [];

  /**
   * The deepest group that can be accessed by all `groupIds`; this dictates
   * when the plan will actually be executed (and also influences into which
   * bucket it is stored).
   *
   * This will be assigned whilst bucketIds are being allocated, just before
   * the OperationPlan becomes "ready".
   *
   * @internal
   */
  public primaryGroupId = -1;

  /**
   * This identifies the deepest pathIdentity that is a common ancestor to all
   * the places this plan is used. This value is then used to influence where
   * the result of executing the plan is stored.
   *
   * @internal
   *
   * @deprecated Please use bucketId instead
   */
  public commonAncestorPathIdentity = "";

  /**
   * This identifies the "bucket" into which this plan's results will be stored;
   * the this is determined as:
   *
   * - If this is an __ItemStep then a new bucket is assigned (this covers
   *   lists (whether streamed or not) and subscriptions)
   * - Otherwise, if this plan is deferred, then the deferred bucket id
   * - Otherwise, if no dependencies then the root bucket
   * - Otherwise, if all dependencies buckets overlap then the containing
   *   bucket (the largest bucket), and make this bucket dependent on the
   *   relevant plans in the other buckets
   * - Otherwise, a new bucket is created representing the union of the
   *   largest non-overlapping buckets
   *
   * This value is then used to influence:
   *
   * 1. how plans are deduplicated
   * 2. the order in which the plans are executed
   * 3. where the result of executing the plan is stored
   * 4. when the plan execution cache is allowed to be GC'd
   *
   * NOTE: `__ListTransformStep`'s effectively have a temporary bucket inside
   * them (built on the `__Item`) that's thrown away once the transform is
   * complete.
   *
   * A value of -1 indicates that a bucket has not yet been assigned (buckets
   * are assigned as the last step before the OperationPlan is 'ready'.
   *
   * @internal
   */
  public bucketId = -1;

  /**
   * True when `optimize` has been called at least once.
   */
  public isOptimized = false;
  /**
   * Set this true if your plan's optimize method can be called a second time;
   * note that in this situation it's likely that your dependencies will not be
   * what you expect them to be (e.g. a PgSelectSingleStep might become an
   * AccessStep).
   */
  public allowMultipleOptimizations = false;

  constructor() {
    super();
    this.id = this.layerPlan._addStep(this);
  }

  protected getStep(id: number): ExecutableStep {
    return this.layerPlan.getStep(id, this);
  }

  protected getDep(depId: number): ExecutableStep {
    return this.getStep(this.dependencies[depId]);
  }

  public toString(): string {
    const meta = this.toStringMeta();
    return chalk.bold.blue(
      `${this.constructor.name.replace(/Step$/, "")}${
        this.groupIds.length === 0
          ? chalk.grey(`{?}`)
          : this.groupIds.length === 1 && this.groupIds[0] === 0
          ? ""
          : chalk.grey(`{${this.groupIds.join(",")}}`)
      }${meta != null && meta.length ? chalk.grey(`<${meta}>`) : ""}[${inspect(
        this.id,
        {
          colors: true,
        },
      )}]`,
    );
  }

  protected addDependency(step: ExecutableStep): number {
    if (this.isFinalized) {
      throw new Error(
        "You cannot add a dependency after the step is finalized.",
      );
    }
    if (isDev) {
      if (!(step instanceof ExecutableStep)) {
        throw new Error(
          `Error occurred when adding dependency for '${this}', value passed was not a step, it was '${inspect(
            step,
          )}'`,
        );
      }
    }

    /*
    
    / *
     * We set our actual parentPathIdentity to be the shortest parentPathIdentity of all
     * of our dependencies; this effectively means that we only care about list
     * boundaries (since `__ItemStep` opts out of this) which allows us to
     * optimise more plans.
     * /
    if (step.parentPathIdentity.length > this.parentPathIdentity.length) {
      this.parentPathIdentity = step.parentPathIdentity;
      if (
        !this.createdWithParentPathIdentity.startsWith(this.parentPathIdentity)
      ) {
        throw new Error(
          `${this} was created in '${this.createdWithParentPathIdentity}' but we have a dependency on '${this.parentPathIdentity}' which is outside of this path.`,
        );
      }
    }
    */

    const existingIndex = this._dependencies.indexOf(step.id);
    if (existingIndex >= 0) {
      return existingIndex;
    }
    return this._dependencies.push(step.id) - 1;
  }

  /**
   * Given a list of "peer" steps, return a list of these `peers` that are
   * equivalent to this step.
   *
   * NOTE: equivalence goes both ways: `a.deduplicate([b]).includes(b)` if and
   * only if `b.deduplicate([a]).includes(a)`.
   */
  public deduplicate(_peers: ExecutableStep[]): ExecutableStep[] {
    return [];
  }

  /**
   * Our chance to optimise the plan (which could go as far as to inline the
   * plan into the parent plan).
   */
  public optimize(_options: PlanOptimizeOptions): ExecutableStep {
    return this;
  }

  public finalize() {
    if (typeof (this as any).isSyncAndSafe !== "boolean") {
      // Take a guess
      const isAsync = this.execute.constructor.name === "AsyncFunction";
      if (isAsync) {
        this.isSyncAndSafe = false;
      } else {
        console.warn(
          `${this} uses a regular (non-async) function for 'execute'; if it never returns a promise and the list it returns never includes a promise then setting \`${this}.isSyncAndSafe = true\` will improve performance. If this is not true, set \`${this}.isSyncAndSafe = false\` to dismiss this message.`,
        );
        this.isSyncAndSafe = false;
      }
    }
    if (
      this.isSyncAndSafe === true &&
      this.execute.constructor.name === "AsyncFunction"
    ) {
      throw new Error(
        `${this} claims to be synchronous, however the execute method is asynchronous`,
      );
    }
    super.finalize();
  }

  /**
   * This function will be called with a `values` list: an array of entries for
   * each incoming crystal object, where each entry in the array is a list of
   * the values retrieved from executing the plans in `this.dependencies` for
   * that crystal object.
   *
   * It must return a list with the same length as `values`, where each value
   * in the list relates to the result of executing this plan for the
   * corresponding entry in the `values` list.
   *
   * IMPORTANT: it is up to the execute function to cache/memoize results as
   * appropriate for performance, this can be done via the `meta` object.
   *
   * The `meta` object is an empty object stored to `crystalContext.metaByPlan`
   * that can be used to store anything this plan needs. We recommend that you
   * add attributes to meta for each purpose (e.g. use `meta.cache` for
   * memoizing results) so that you can expand your usage of meta in future.
   */
  execute(
    values: ReadonlyArray<CrystalValuesList<any>>,
    extra: ExecutionExtra,
  ): PromiseOrDirect<CrystalResultsList<TData>> {
    // ESLint/TS: ignore not used.
    values;
    extra;
    throw new Error(`${this} has not implemented an 'execute' method`);
  }
}

export function isExecutableStep<TData = any>(
  plan: unknown,
): plan is ExecutableStep<TData> {
  return (
    plan instanceof BaseStep &&
    "execute" in plan &&
    typeof (plan as any).execute === "function"
  );
}

export function assertExecutableStep<TData>(
  plan: BaseStep | null | undefined | void,
  pathIdentity: string,
): asserts plan is ExecutableStep<TData> {
  if (!isExecutableStep(plan)) {
    throw new Error(
      `The plan returned from '${pathIdentity}' should be an executable plan, but it does not implement the 'execute' method.`,
    );
  }
}

export type ObjectLikeStep<
  TData extends { [key: string]: ExecutableStep<any> } = {
    [key: string]: ExecutableStep<any>;
  },
> = ExecutableStep<{
  [key in keyof TData]: TData[key] extends ExecutableStep<infer U> ? U : never;
}> & {
  get<TKey extends keyof TData>(key: TKey): ExecutableStep<TData[TKey]>;
};

export function isObjectLikeStep<
  TData extends { [key: string]: ExecutableStep<any> } = {
    [key: string]: ExecutableStep<any>;
  },
>(plan: ExecutableStep): plan is ObjectLikeStep<TData> {
  return "get" in plan && typeof (plan as any).get === "function";
}

export type StreamableStep<TData> = ExecutableStep<ReadonlyArray<TData>> & {
  /**
   * If this plan supports streaming then it should implement this method. It's
   * basically the same as `execute` except it returns a list of result streams
   * rather than a list of results.
   */
  stream(
    values: CrystalValuesList<ReadonlyArray<any>>,
    extra: ExecutionExtra,
    streamOptions: {
      initialCount: number;
    },
  ): PromiseOrDirect<CrystalResultStreamList<TData>>;
};

export function isStreamableStep<TData>(
  plan: ExecutableStep<ReadonlyArray<TData>>,
): plan is StreamableStep<TData> {
  return typeof (plan as StreamableStep<TData>).stream === "function";
}

export type PolymorphicStep = ExecutableStep & {
  planForType(objectType: GraphQLObjectType): ExecutableStep;
};

/**
 * Modifier plans modify their parent plan (which may be another ModifierStep
 * or an ExecutableStep). First they gather all the requirements from their
 * children (if any) being applied to them, then they apply themselves to their
 * parent plan. This application is done through the `apply()` method.
 *
 * Modifier plans do not use dependencies.
 */
export abstract class ModifierStep<
  TParentStep extends BaseStep = BaseStep,
> extends BaseStep {
  // Explicitly we do not add $$export here because we want children to set it
  static $$export: any;

  public readonly id: string;
  constructor(protected readonly $parent: TParentStep) {
    super();
    this.id = this.layerPlan._addModifierStep(this);
  }

  /**
   * In this method, you should apply the changes to your `this.$parent` plan
   */
  abstract apply(): void;
}

export function isModifierStep<
  TParentStep extends ExecutableStep | ModifierStep<any>,
>(plan: BaseStep): plan is ModifierStep<TParentStep> {
  return "apply" in plan && typeof (plan as any).apply === "function";
}

export function assertModifierStep<
  TParentStep extends ExecutableStep | ModifierStep<any>,
>(
  plan: BaseStep,
  pathIdentity: string,
): asserts plan is ModifierStep<TParentStep> {
  if (!isModifierStep(plan)) {
    throw new Error(
      `The plan returned from '${pathIdentity}' should be a modifier plan, but it does not implement the 'apply' method.`,
    );
  }
}

export interface ListCapableStep<
  TOutputData,
  TItemStep extends ExecutableStep<TOutputData> = ExecutableStep<TOutputData>,
> extends ExecutableStep<ReadonlyArray<any>> {
  listItem(itemPlan: __ItemStep<this>): TItemStep;
}

export function isListCapableStep<
  TData,
  TItemStep extends ExecutableStep<TData>,
>(
  plan: ExecutableStep<ReadonlyArray<TData>>,
): plan is ListCapableStep<TData, TItemStep> {
  return "listItem" in plan && typeof (plan as any).listItem === "function";
}

export function assertListCapableStep<
  TData,
  TItemStep extends ExecutableStep<TData>,
>(
  plan: ExecutableStep<ReadonlyArray<TData>>,
  pathIdentity: string,
): asserts plan is ListCapableStep<TData, TItemStep> {
  if (!isListCapableStep(plan)) {
    throw new Error(
      `The plan returned from '${pathIdentity}' should be a list capable plan, but ${plan} does not implement the 'listItem' method.`,
    );
  }
}
