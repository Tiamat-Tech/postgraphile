import debugFactory from "debug";

import { crystalPrint, crystalPrintPathIdentity } from "./utils";

debugFactory.formatters.c = crystalPrint;
debugFactory.formatters.p = crystalPrintPathIdentity;

export { Aether } from "./aether";
export { ROOT_PATH } from "./constants";
export { defer, Deferred } from "./deferred";
export { crystalEnforce } from "./enforceCrystal";
export {
  InputListPlan,
  InputObjectPlan,
  InputPlan,
  InputStaticLeafPlan,
} from "./input";
export {
  ArgumentPlanResolver,
  BaseGraphQLArguments,
  BaseGraphQLContext,
  BaseGraphQLRootValue,
  BaseGraphQLVariables,
  CrystalResultsList,
  CrystalValuesList,
  ExecutablePlanResolver,
  GraphileCrystalFieldConfig,
  InputObjectFieldPlanResolver,
} from "./interfaces";
export {
  BasePlan,
  ExecutablePlan,
  isExecutablePlan,
  isModifierPlan,
  ModifierPlan,
} from "./plan";
export {
  __ListItemPlan,
  __TrackedObjectPlan,
  __ValuePlan,
  access,
  AccessPlan,
  aether,
  assertListCapablePlan,
  context,
  debugPlans,
  each,
  EachPlan,
  first,
  FirstPlan,
  list,
  ListCapablePlan,
  ListPlan,
  makeMapper,
  map,
  MapPlan,
  object,
  ObjectPlan,
  reverse,
  reverseArray,
  ReversePlan,
} from "./plans";
export {
  $$crystalWrapped,
  crystalWrapResolve,
  crystalWrapSubscribe,
} from "./resolvers";
export {
  arraysMatch,
  inputObjectFieldSpec,
  inputObjectSpec,
  objectFieldSpec,
  objectSpec,
} from "./utils";
