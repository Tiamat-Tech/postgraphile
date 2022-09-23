/* eslint-disable @typescript-eslint/ban-types */
import chalk from "chalk";

import type { GrafastError } from "../error.js";
import type { GrafastResultsList, GrafastValuesList } from "../interfaces.js";
import { ExecutableStep } from "../step.js";

const disallowedKeys = Object.keys(
  Object.getOwnPropertyDescriptors(Object.prototype),
);

// Do **NOT** allow variables that start with `__`!
export const isSafeIdentifier = (key: string) =>
  /^(?:[0-9a-z$]|_[a-z0-9$])[a-z0-9_$]*$/i.test(key) &&
  !disallowedKeys.includes(key);

const STARTS_WITH_NUMBER = /^[0-9]/;
export type ActualKeyByDesiredKey = { [desiredKey: string]: string };

export function makeMapper(actualKeyByDesiredKey: ActualKeyByDesiredKey) {
  const entries = Object.entries(actualKeyByDesiredKey);
  if (
    entries.every(
      ([key, val]) => isSafeIdentifier(key) && isSafeIdentifier(val),
    )
  ) {
    // We can do a fast custom conversion
    return new Function(
      "obj",
      `return (obj == null ? obj : { ${entries
        .map(
          ([key, val]) =>
            `${STARTS_WITH_NUMBER.test(key) ? JSON.stringify(key) : key}: obj${
              STARTS_WITH_NUMBER.test(val)
                ? `[${JSON.stringify(val)}]`
                : `.${val}`
            }`,
        )
        .join(", ")} })`,
    ) as any;
  }
  // Fallback to slow conversion
  return (obj: object | null | GrafastError): object | null | GrafastError => {
    if (obj == null) {
      return obj;
    }
    return Object.keys(actualKeyByDesiredKey).reduce((memo, desiredKey) => {
      memo[desiredKey] = obj[actualKeyByDesiredKey[desiredKey]];
      return memo;
    }, {} as object);
  };
}

/**
 * A plan that returns an object resulting from extracting the given
 * `actualKey` from the input and storing it as the `desiredKey` in the output.
 */
export class MapStep extends ExecutableStep {
  static $$export = {
    moduleName: "grafast",
    exportName: "MapStep ",
  };
  isSyncAndSafe = true;
  allowMultipleOptimizations = true;

  private mapper: (obj: object) => object;
  constructor(
    $plan: ExecutableStep,
    private actualKeyByDesiredKey: ActualKeyByDesiredKey,
  ) {
    super();
    this.addDependency($plan);
    this.mapper = makeMapper(actualKeyByDesiredKey);
  }

  toStringMeta(): string {
    return (
      chalk.bold.yellow(String(this.dependencies[0])) +
      ":" +
      JSON.stringify(this.actualKeyByDesiredKey)
    );
  }

  execute(values: GrafastValuesList<any[]>): GrafastResultsList<any> {
    return values[0].map(this.mapper);
  }

  executeSingle = (value: any[]): any => this.mapper(value[0]);

  deduplicate(peers: MapStep[]): MapStep[] {
    const myMap = JSON.stringify(this.actualKeyByDesiredKey);
    return peers.filter(
      (p) => JSON.stringify(p.actualKeyByDesiredKey) === myMap,
    );
  }
}

// TODO: people think of 'map' in turns of mapping over an array, or Maps,
// rather than a mathematical-style mapping of the keys of an object. We should
// rename this - objectMap or something?
/**
 * A plan that returns an object resulting from extracting the given
 * `actualKey` from the input and storing it as the `desiredKey` in the output.
 */
export function map(
  $plan: ExecutableStep,
  actualKeyByDesiredKey: { [desiredKey: string]: string },
): MapStep {
  return new MapStep($plan, actualKeyByDesiredKey);
}
