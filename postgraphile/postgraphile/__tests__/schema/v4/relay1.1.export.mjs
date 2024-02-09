import { PgDeleteSingleStep, PgExecutor, PgResource, PgSelectSingleStep, PgSelectStep, PgUnionAllStep, TYPES, assertPgClassSingleStep, domainOfCodec, enumCodec, listOfCodec, makeRegistry, pgClassExpression, pgDeleteSingle, pgInsertSingle, pgSelectFromRecord, pgSelectFromRecords, pgSelectSingleFromRecord, pgUpdateSingle, rangeOfCodec, recordCodec, sqlFromArgDigests } from "@dataplan/pg";
import { ConnectionStep, EdgeStep, ObjectStep, SafeError, __ValueStep, access, assertEdgeCapableStep, assertExecutableStep, assertPageInfoCapableStep, connection, constant, context, first, getEnumValueConfig, lambda, list, makeGrafastSchema, node, object, rootValue, specFromNodeId, stepAMayDependOnStepB } from "grafast";
import { sql } from "pg-sql2";
import { inspect } from "util";
function Query_queryPlan() {
  return rootValue();
}
const handler = {
  typeName: "Query",
  codec: {
    name: "raw",
    encode(value) {
      return typeof value === "string" ? value : null;
    },
    decode(value) {
      return typeof value === "string" ? value : null;
    }
  },
  match(specifier) {
    return specifier === "query";
  },
  getSpec() {
    return "irrelevant";
  },
  get() {
    return rootValue();
  },
  plan() {
    return constant`query`;
  }
};
function base64JSONDecode(value) {
  return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
}
function base64JSONEncode(value) {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64");
}
const nodeIdCodecs_base64JSON_base64JSON = {
  name: "base64JSON",
  encode: base64JSONEncode,
  decode: base64JSONDecode
};
function pipeStringDecode(value) {
  return typeof value === "string" ? value.split("|") : null;
}
function pipeStringEncode(value) {
  return Array.isArray(value) ? value.join("|") : null;
}
const nodeIdCodecs = Object.assign(Object.create(null), {
  raw: handler.codec,
  base64JSON: nodeIdCodecs_base64JSON_base64JSON,
  pipeString: {
    name: "pipeString",
    encode: pipeStringEncode,
    decode: pipeStringDecode
  }
});
const executor_mainPgExecutor = new PgExecutor({
  name: "main",
  context() {
    const ctx = context();
    return object({
      pgSettings: "pgSettings" != null ? ctx.get("pgSettings") : constant(null),
      withPgClient: ctx.get("withPgClient")
    });
  }
});
const registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord = recordCodec({
  name: "FuncOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: Object.assign(Object.create(null), {
    first_out: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "first_out"
      }
    },
    second_out: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "second_out"
      }
    }
  }),
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes2 = Object.assign(Object.create(null), {
  o1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: "o1"
    }
  },
  o2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "o2"
    }
  }
});
const registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord = recordCodec({
  name: "FuncOutOutSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes2,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes3 = Object.assign(Object.create(null), {
  column1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: undefined
    }
  },
  column2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: undefined
    }
  }
});
const registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord = recordCodec({
  name: "FuncOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes3,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes4 = Object.assign(Object.create(null), {
  first_out: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: "first_out"
    }
  },
  second_out: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "second_out"
    }
  }
});
const registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord = recordCodec({
  name: "MutationOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes4,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes5 = Object.assign(Object.create(null), {
  o1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: "o1"
    }
  },
  o2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "o2"
    }
  }
});
const registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord = recordCodec({
  name: "MutationOutOutSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes5,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes6 = Object.assign(Object.create(null), {
  column1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: undefined
    }
  },
  column2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: undefined
    }
  }
});
const registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord = recordCodec({
  name: "MutationOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes6,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes7 = Object.assign(Object.create(null), {
  column1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: ""
    }
  },
  o2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "o2"
    }
  },
  column3: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: ""
    }
  }
});
const registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord = recordCodec({
  name: "FuncOutUnnamedOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes7,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes8 = Object.assign(Object.create(null), {
  col1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 1,
      argName: "col1"
    }
  },
  col2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 2,
      argName: "col2"
    }
  }
});
const registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord = recordCodec({
  name: "FuncReturnsTableMultiColRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes8,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes9 = Object.assign(Object.create(null), {
  column1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: ""
    }
  },
  o2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "o2"
    }
  },
  column3: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: ""
    }
  }
});
const registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord = recordCodec({
  name: "MutationOutUnnamedOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes9,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes10 = Object.assign(Object.create(null), {
  col1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 1,
      argName: "col1"
    }
  },
  col2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 2,
      argName: "col2"
    }
  }
});
const registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord = recordCodec({
  name: "MutationReturnsTableMultiColRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes10,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes11 = Object.assign(Object.create(null), {
  id: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 0,
      argName: "id"
    }
  },
  total_duration: {
    notNull: false,
    codec: TYPES.interval,
    extensions: {
      argIndex: 1,
      argName: "total_duration"
    }
  }
});
const registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord = recordCodec({
  name: "SearchTestSummariesRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes11,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const myTableAttributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  json_data: {
    description: undefined,
    codec: TYPES.jsonb,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const myTableIdentifier = sql.identifier(...["c", "my_table"]);
const myTableCodecSpec = {
  name: "myTable",
  identifier: myTableIdentifier,
  attributes: myTableAttributes,
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "my_table"
    },
    tags: Object.create(null)
  },
  executor: executor_mainPgExecutor
};
const myTableCodec = recordCodec(myTableCodecSpec);
const personSecretAttributes = Object.assign(Object.create(null), {
  person_id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  sekrit: {
    description: "A secret held by the associated Person",
    codec: TYPES.text,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {
        name: "secret"
      }
    }
  }
});
const extensions2 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_secret"
  },
  tags: Object.assign(Object.create(null), {
    deprecated: "This is deprecated (comment on table c.person_secret)."
  })
};
const parts2 = ["c", "person_secret"];
const personSecretIdentifier = sql.identifier(...parts2);
const personSecretCodecSpec = {
  name: "personSecret",
  identifier: personSecretIdentifier,
  attributes: personSecretAttributes,
  description: "Tracks the person's secret",
  extensions: extensions2,
  executor: executor_mainPgExecutor
};
const personSecretCodec = recordCodec(personSecretCodecSpec);
const compoundKeyAttributes = Object.assign(Object.create(null), {
  person_id_2: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  person_id_1: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  extra: {
    description: undefined,
    codec: TYPES.boolean,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions3 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "compound_key"
  },
  tags: Object.create(null)
};
const parts3 = ["c", "compound_key"];
const compoundKeyIdentifier = sql.identifier(...parts3);
const compoundKeyCodecSpec = {
  name: "compoundKey",
  identifier: compoundKeyIdentifier,
  attributes: compoundKeyAttributes,
  description: undefined,
  extensions: extensions3,
  executor: executor_mainPgExecutor
};
const compoundKeyCodec = recordCodec(compoundKeyCodecSpec);
const nullTestRecordAttributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  nullable_text: {
    description: undefined,
    codec: TYPES.text,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nullable_int: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  non_null_text: {
    description: undefined,
    codec: TYPES.text,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions4 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "null_test_record"
  },
  tags: Object.create(null)
};
const parts4 = ["c", "null_test_record"];
const nullTestRecordIdentifier = sql.identifier(...parts4);
const nullTestRecordCodecSpec = {
  name: "nullTestRecord",
  identifier: nullTestRecordIdentifier,
  attributes: nullTestRecordAttributes,
  description: undefined,
  extensions: extensions4,
  executor: executor_mainPgExecutor
};
const nullTestRecordCodec = recordCodec(nullTestRecordCodecSpec);
const edgeCaseAttributes = Object.assign(Object.create(null), {
  not_null_has_default: {
    description: undefined,
    codec: TYPES.boolean,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  wont_cast_easy: {
    description: undefined,
    codec: TYPES.int2,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  row_id: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions5 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "edge_case"
  },
  tags: Object.create(null)
};
const parts5 = ["c", "edge_case"];
const edgeCaseIdentifier = sql.identifier(...parts5);
const edgeCaseCodecSpec = {
  name: "edgeCase",
  identifier: edgeCaseIdentifier,
  attributes: edgeCaseAttributes,
  description: undefined,
  extensions: extensions5,
  executor: executor_mainPgExecutor
};
const edgeCaseCodec = recordCodec(edgeCaseCodecSpec);
const leftArmAttributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  person_id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  length_in_metres: {
    description: undefined,
    codec: TYPES.float,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  mood: {
    description: undefined,
    codec: TYPES.text,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  }
});
const extensions6 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "left_arm"
  },
  tags: Object.create(null)
};
const parts6 = ["c", "left_arm"];
const leftArmIdentifier = sql.identifier(...parts6);
const leftArmCodecSpec = {
  name: "leftArm",
  identifier: leftArmIdentifier,
  attributes: leftArmAttributes,
  description: "Tracks metadata about the left arms of various people",
  extensions: extensions6,
  executor: executor_mainPgExecutor
};
const leftArmCodec = recordCodec(leftArmCodecSpec);
const extensions7 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "not_null_timestamp"
  },
  tags: Object.create(null)
};
const parts7 = ["c", "not_null_timestamp"];
const notNullTimestampIdentifier = sql.identifier(...parts7);
const notNullTimestampCodec = domainOfCodec(TYPES.timestamptz, "notNullTimestamp", notNullTimestampIdentifier, {
  description: undefined,
  extensions: extensions7,
  notNull: true
});
const issue756Attributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  ts: {
    description: undefined,
    codec: notNullTimestampCodec,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  }
});
const extensions8 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "issue756"
  },
  tags: Object.create(null)
};
const parts8 = ["c", "issue756"];
const issue756Identifier = sql.identifier(...parts8);
const issue756CodecSpec = {
  name: "issue756",
  identifier: issue756Identifier,
  attributes: issue756Attributes,
  description: undefined,
  extensions: extensions8,
  executor: executor_mainPgExecutor
};
const issue756Codec = recordCodec(issue756CodecSpec);
const extensions9 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "color"
  },
  tags: Object.create(null)
};
const parts9 = ["b", "color"];
const colorCodec = enumCodec({
  name: "color",
  identifier: sql.identifier(...parts9),
  values: ["red", "green", "blue"],
  description: undefined,
  extensions: extensions9
});
const enumLabels2 = ["FOO_BAR", "BAR_FOO", "BAZ_QUX", "0_BAR"];
const extensions10 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "enum_caps"
  },
  tags: Object.create(null)
};
const parts10 = ["b", "enum_caps"];
const sqlIdent2 = sql.identifier(...parts10);
const enumCapsCodec = enumCodec({
  name: "enumCaps",
  identifier: sqlIdent2,
  values: enumLabels2,
  description: undefined,
  extensions: extensions10
});
const enumLabels3 = ["", "one", "two"];
const extensions11 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "enum_with_empty_string"
  },
  tags: Object.create(null)
};
const parts11 = ["b", "enum_with_empty_string"];
const sqlIdent3 = sql.identifier(...parts11);
const enumWithEmptyStringCodec = enumCodec({
  name: "enumWithEmptyString",
  identifier: sqlIdent3,
  values: enumLabels3,
  description: undefined,
  extensions: extensions11
});
const compoundTypeAttributes = Object.assign(Object.create(null), {
  a: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  b: {
    description: undefined,
    codec: TYPES.text,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  c: {
    description: undefined,
    codec: colorCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  d: {
    description: undefined,
    codec: TYPES.uuid,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  e: {
    description: undefined,
    codec: enumCapsCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  f: {
    description: undefined,
    codec: enumWithEmptyStringCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  g: {
    description: undefined,
    codec: TYPES.interval,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  foo_bar: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions12 = {
  isTableLike: false,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "compound_type"
  },
  tags: Object.create(null)
};
const parts12 = ["c", "compound_type"];
const compoundTypeIdentifier = sql.identifier(...parts12);
const compoundTypeCodecSpec = {
  name: "compoundType",
  identifier: compoundTypeIdentifier,
  attributes: compoundTypeAttributes,
  description: "Awesome feature!",
  extensions: extensions12,
  executor: executor_mainPgExecutor
};
const compoundTypeCodec = recordCodec(compoundTypeCodecSpec);
const attributes12 = Object.assign(Object.create(null), {
  o1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 1,
      argName: "o1"
    }
  },
  o2: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 2,
      argName: "o2"
    }
  }
});
const registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord = recordCodec({
  name: "FuncOutOutCompoundTypeRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes12,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes13 = Object.assign(Object.create(null), {
  o1: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 1,
      argName: "o1"
    }
  },
  o2: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 2,
      argName: "o2"
    }
  }
});
const registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord = recordCodec({
  name: "MutationOutOutCompoundTypeRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes13,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const anEnumArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "_an_enum"
  },
  tags: Object.create(null)
};
const enumLabels4 = ["awaiting", "rejected", "published", "*", "**", "***", "foo*", "foo*_", "_foo*", "*bar", "*bar_", "_*bar_", "*baz*", "_*baz*_", "%", ">=", "~~", "$"];
const extensions13 = {
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "an_enum"
  },
  tags: Object.create(null)
};
const parts13 = ["a", "an_enum"];
const sqlIdent4 = sql.identifier(...parts13);
const anEnumCodec = enumCodec({
  name: "anEnum",
  identifier: sqlIdent4,
  values: enumLabels4,
  description: undefined,
  extensions: extensions13
});
const anEnumArrayCodec = listOfCodec(anEnumCodec, {
  extensions: anEnumArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "anEnumArray"
});
const comptypeArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "_comptype"
  },
  tags: Object.create(null)
};
const comptypeAttributes = Object.assign(Object.create(null), {
  schedule: {
    description: undefined,
    codec: TYPES.timestamptz,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  is_optimised: {
    description: undefined,
    codec: TYPES.boolean,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions14 = {
  isTableLike: false,
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "comptype"
  },
  tags: Object.create(null)
};
const parts14 = ["a", "comptype"];
const comptypeIdentifier = sql.identifier(...parts14);
const comptypeCodecSpec = {
  name: "comptype",
  identifier: comptypeIdentifier,
  attributes: comptypeAttributes,
  description: undefined,
  extensions: extensions14,
  executor: executor_mainPgExecutor
};
const comptypeCodec = recordCodec(comptypeCodecSpec);
const comptypeArrayCodec = listOfCodec(comptypeCodec, {
  extensions: comptypeArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "comptypeArray"
});
const postAttributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  headline: {
    description: undefined,
    codec: TYPES.text,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  body: {
    description: undefined,
    codec: TYPES.text,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  author_id: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  enums: {
    description: undefined,
    codec: anEnumArrayCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  comptypes: {
    description: undefined,
    codec: comptypeArrayCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions15 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "post"
  },
  tags: Object.create(null)
};
const parts15 = ["a", "post"];
const postIdentifier = sql.identifier(...parts15);
const postCodecSpec = {
  name: "post",
  identifier: postIdentifier,
  attributes: postAttributes,
  description: undefined,
  extensions: extensions15,
  executor: executor_mainPgExecutor
};
const postCodec = recordCodec(postCodecSpec);
const attributes14 = Object.assign(Object.create(null), {
  txt: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 2,
      argName: "txt"
    }
  },
  left_arm: {
    notNull: false,
    codec: leftArmCodec,
    extensions: {
      argIndex: 3,
      argName: "left_arm"
    }
  },
  post: {
    notNull: false,
    codec: postCodec,
    extensions: {
      argIndex: 4,
      argName: "post"
    }
  }
});
const registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord = recordCodec({
  name: "QueryOutputTwoRowsRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes14,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes15 = Object.assign(Object.create(null), {
  o1: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "o1"
    }
  },
  o2: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 2,
      argName: "o2"
    }
  }
});
const registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord = recordCodec({
  name: "PersonComputedOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes15,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes16 = Object.assign(Object.create(null), {
  ino: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 1,
      argName: "ino"
    }
  },
  o: {
    notNull: false,
    codec: TYPES.text,
    extensions: {
      argIndex: 2,
      argName: "o"
    }
  }
});
const registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord = recordCodec({
  name: "PersonComputedInoutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes16,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const textArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "_text"
  },
  tags: Object.create(null)
};
const textArrayCodec = listOfCodec(TYPES.text, {
  extensions: textArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "textArray"
});
const extensions16 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "email"
  },
  tags: Object.create(null)
};
const parts16 = ["b", "email"];
const emailIdentifier = sql.identifier(...parts16);
const emailCodec = domainOfCodec(TYPES.text, "email", emailIdentifier, {
  description: undefined,
  extensions: extensions16,
  notNull: false
});
const extensions17 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "not_null_url"
  },
  tags: Object.create(null)
};
const parts17 = ["b", "not_null_url"];
const notNullUrlIdentifier = sql.identifier(...parts17);
const notNullUrlCodec = domainOfCodec(TYPES.varchar, "notNullUrl", notNullUrlIdentifier, {
  description: undefined,
  extensions: extensions17,
  notNull: true
});
const wrappedUrlAttributes = Object.assign(Object.create(null), {
  url: {
    description: undefined,
    codec: notNullUrlCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions18 = {
  isTableLike: false,
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "wrapped_url"
  },
  tags: Object.create(null)
};
const parts18 = ["b", "wrapped_url"];
const wrappedUrlIdentifier = sql.identifier(...parts18);
const wrappedUrlCodecSpec = {
  name: "wrappedUrl",
  identifier: wrappedUrlIdentifier,
  attributes: wrappedUrlAttributes,
  description: undefined,
  extensions: extensions18,
  executor: executor_mainPgExecutor
};
const wrappedUrlCodec = recordCodec(wrappedUrlCodecSpec);
const personAttributes = Object.assign(Object.create(null), {
  id: {
    description: "The primary unique identifier for the person",
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  person_full_name: {
    description: "The person\u2019s name",
    codec: TYPES.varchar,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {
        name: "name"
      }
    }
  },
  aliases: {
    description: undefined,
    codec: textArrayCodec,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  about: {
    description: undefined,
    codec: TYPES.text,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  email: {
    description: undefined,
    codec: emailCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  site: {
    description: undefined,
    codec: wrappedUrlCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {
        deprecated: "Don\u2019t use me"
      }
    }
  },
  config: {
    description: undefined,
    codec: TYPES.hstore,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  last_login_from_ip: {
    description: undefined,
    codec: TYPES.inet,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  last_login_from_subnet: {
    description: undefined,
    codec: TYPES.cidr,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  user_mac: {
    description: undefined,
    codec: TYPES.macaddr,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  created_at: {
    description: undefined,
    codec: TYPES.timestamp,
    notNull: false,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  }
});
const extensions19 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person"
  },
  tags: Object.create(null)
};
const parts19 = ["c", "person"];
const personIdentifier = sql.identifier(...parts19);
const personCodecSpec = {
  name: "person",
  identifier: personIdentifier,
  attributes: personAttributes,
  description: "Person test comment",
  extensions: extensions19,
  executor: executor_mainPgExecutor
};
const personCodec = recordCodec(personCodecSpec);
const attributes17 = Object.assign(Object.create(null), {
  person: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 0,
      argName: "person"
    }
  },
  o: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 1,
      argName: "o"
    }
  }
});
const registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord = recordCodec({
  name: "PersonComputedFirstArgInoutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes17,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes18 = Object.assign(Object.create(null), {
  x: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: "x"
    }
  },
  y: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 3,
      argName: "y"
    }
  },
  z: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 4,
      argName: "z"
    }
  }
});
const registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord = recordCodec({
  name: "FuncOutComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes18,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes19 = Object.assign(Object.create(null), {
  x: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: "x"
    }
  },
  y: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 3,
      argName: "y"
    }
  },
  z: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 4,
      argName: "z"
    }
  }
});
const registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord = recordCodec({
  name: "FuncOutComplexSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes19,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes20 = Object.assign(Object.create(null), {
  x: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: "x"
    }
  },
  y: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 3,
      argName: "y"
    }
  },
  z: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 4,
      argName: "z"
    }
  }
});
const registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord = recordCodec({
  name: "MutationOutComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes20,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes21 = Object.assign(Object.create(null), {
  x: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 2,
      argName: "x"
    }
  },
  y: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 3,
      argName: "y"
    }
  },
  z: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 4,
      argName: "z"
    }
  }
});
const registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord = recordCodec({
  name: "MutationOutComplexSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes21,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const attributes22 = Object.assign(Object.create(null), {
  x: {
    notNull: false,
    codec: TYPES.int,
    extensions: {
      argIndex: 3,
      argName: "x"
    }
  },
  y: {
    notNull: false,
    codec: compoundTypeCodec,
    extensions: {
      argIndex: 4,
      argName: "y"
    }
  },
  z: {
    notNull: false,
    codec: personCodec,
    extensions: {
      argIndex: 5,
      argName: "z"
    }
  }
});
const registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord = recordCodec({
  name: "PersonComputedComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: attributes22,
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor: executor_mainPgExecutor,
  isAnonymous: true
});
const colorArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "_color"
  },
  tags: Object.create(null)
};
const colorArrayCodec = listOfCodec(colorCodec, {
  extensions: colorArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "colorArray"
});
const extensions20 = {
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "an_int"
  },
  tags: Object.create(null)
};
const parts20 = ["a", "an_int"];
const anIntIdentifier = sql.identifier(...parts20);
const anIntCodec = domainOfCodec(TYPES.int, "anInt", anIntIdentifier, {
  description: undefined,
  extensions: extensions20,
  notNull: false
});
const extensions21 = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "another_int"
  },
  tags: Object.create(null)
};
const parts21 = ["b", "another_int"];
const anotherIntIdentifier = sql.identifier(...parts21);
const anotherIntCodec = domainOfCodec(anIntCodec, "anotherInt", anotherIntIdentifier, {
  description: undefined,
  extensions: extensions21,
  notNull: false
});
const extensions22 = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "numrange"
  },
  tags: Object.create(null)
};
const parts22 = ["pg_catalog", "numrange"];
const sqlIdent5 = sql.identifier(...parts22);
const numrangeCodec = rangeOfCodec(TYPES.numeric, "numrange", sqlIdent5, {
  description: "range of numerics",
  extensions: extensions22
});
const extensions23 = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "daterange"
  },
  tags: Object.create(null)
};
const parts23 = ["pg_catalog", "daterange"];
const sqlIdent6 = sql.identifier(...parts23);
const daterangeCodec = rangeOfCodec(TYPES.date, "daterange", sqlIdent6, {
  description: "range of dates",
  extensions: extensions23
});
const extensions24 = {
  pg: {
    serviceName: "main",
    schemaName: "a",
    name: "an_int_range"
  },
  tags: Object.create(null)
};
const parts24 = ["a", "an_int_range"];
const sqlIdent7 = sql.identifier(...parts24);
const anIntRangeCodec = rangeOfCodec(anIntCodec, "anIntRange", sqlIdent7, {
  description: undefined,
  extensions: extensions24
});
const intervalArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "_interval"
  },
  tags: Object.create(null)
};
const intervalArrayCodec = listOfCodec(TYPES.interval, {
  extensions: intervalArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "intervalArray"
});
const nestedCompoundTypeAttributes = Object.assign(Object.create(null), {
  a: {
    description: undefined,
    codec: compoundTypeCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  b: {
    description: undefined,
    codec: compoundTypeCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  baz_buz: {
    description: undefined,
    codec: TYPES.int,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions25 = {
  isTableLike: false,
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "nested_compound_type"
  },
  tags: Object.create(null)
};
const parts25 = ["b", "nested_compound_type"];
const nestedCompoundTypeIdentifier = sql.identifier(...parts25);
const nestedCompoundTypeCodecSpec = {
  name: "nestedCompoundType",
  identifier: nestedCompoundTypeIdentifier,
  attributes: nestedCompoundTypeAttributes,
  description: undefined,
  extensions: extensions25,
  executor: executor_mainPgExecutor
};
const nestedCompoundTypeCodec = recordCodec(nestedCompoundTypeCodecSpec);
const extensions26 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "text_array_domain"
  },
  tags: Object.create(null)
};
const parts26 = ["c", "text_array_domain"];
const textArrayDomainIdentifier = sql.identifier(...parts26);
const textArrayDomainCodec = domainOfCodec(textArrayCodec, "textArrayDomain", textArrayDomainIdentifier, {
  description: undefined,
  extensions: extensions26,
  notNull: false
});
const extensions27 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "int8_array_domain"
  },
  tags: Object.create(null)
};
const int8ArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "_int8"
  },
  tags: Object.create(null)
};
const int8ArrayCodec = listOfCodec(TYPES.bigint, {
  extensions: int8ArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "int8Array"
});
const parts27 = ["c", "int8_array_domain"];
const int8ArrayDomainIdentifier = sql.identifier(...parts27);
const int8ArrayDomainCodec = domainOfCodec(int8ArrayCodec, "int8ArrayDomain", int8ArrayDomainIdentifier, {
  description: undefined,
  extensions: extensions27,
  notNull: false
});
const byteaArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "_bytea"
  },
  tags: Object.create(null)
};
const byteaArrayCodec = listOfCodec(TYPES.bytea, {
  extensions: byteaArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "byteaArray"
});
const typesAttributes_ltree_codec_ltree = {
  name: "ltree",
  sqlType: sql`ltree`,
  toPg(str) {
    return str;
  },
  fromPg(str) {
    return str;
  },
  executor: null,
  attributes: undefined
};
const typesAttributes_ltree_array_codec_ltree_ = listOfCodec(typesAttributes_ltree_codec_ltree);
const typesAttributes = Object.assign(Object.create(null), {
  id: {
    description: undefined,
    codec: TYPES.int,
    notNull: true,
    hasDefault: true,
    extensions: {
      tags: {}
    }
  },
  smallint: {
    description: undefined,
    codec: TYPES.int2,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  bigint: {
    description: undefined,
    codec: TYPES.bigint,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  numeric: {
    description: undefined,
    codec: TYPES.numeric,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  decimal: {
    description: undefined,
    codec: TYPES.numeric,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  boolean: {
    description: undefined,
    codec: TYPES.boolean,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  varchar: {
    description: undefined,
    codec: TYPES.varchar,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  enum: {
    description: undefined,
    codec: colorCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  enum_array: {
    description: undefined,
    codec: colorArrayCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  domain: {
    description: undefined,
    codec: anIntCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  domain2: {
    description: undefined,
    codec: anotherIntCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  text_array: {
    description: undefined,
    codec: textArrayCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  json: {
    description: undefined,
    codec: TYPES.json,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  jsonb: {
    description: undefined,
    codec: TYPES.jsonb,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nullable_range: {
    description: undefined,
    codec: numrangeCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  numrange: {
    description: undefined,
    codec: numrangeCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  daterange: {
    description: undefined,
    codec: daterangeCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  an_int_range: {
    description: undefined,
    codec: anIntRangeCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  timestamp: {
    description: undefined,
    codec: TYPES.timestamp,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  timestamptz: {
    description: undefined,
    codec: TYPES.timestamptz,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  date: {
    description: undefined,
    codec: TYPES.date,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  time: {
    description: undefined,
    codec: TYPES.time,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  timetz: {
    description: undefined,
    codec: TYPES.timetz,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  interval: {
    description: undefined,
    codec: TYPES.interval,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  interval_array: {
    description: undefined,
    codec: intervalArrayCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  money: {
    description: undefined,
    codec: TYPES.money,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  compound_type: {
    description: undefined,
    codec: compoundTypeCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nested_compound_type: {
    description: undefined,
    codec: nestedCompoundTypeCodec,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nullable_compound_type: {
    description: undefined,
    codec: compoundTypeCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nullable_nested_compound_type: {
    description: undefined,
    codec: nestedCompoundTypeCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  point: {
    description: undefined,
    codec: TYPES.point,
    notNull: true,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  nullablePoint: {
    description: undefined,
    codec: TYPES.point,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  inet: {
    description: undefined,
    codec: TYPES.inet,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  cidr: {
    description: undefined,
    codec: TYPES.cidr,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  macaddr: {
    description: undefined,
    codec: TYPES.macaddr,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regproc: {
    description: undefined,
    codec: TYPES.regproc,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regprocedure: {
    description: undefined,
    codec: TYPES.regprocedure,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regoper: {
    description: undefined,
    codec: TYPES.regoper,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regoperator: {
    description: undefined,
    codec: TYPES.regoperator,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regclass: {
    description: undefined,
    codec: TYPES.regclass,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regtype: {
    description: undefined,
    codec: TYPES.regtype,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regconfig: {
    description: undefined,
    codec: TYPES.regconfig,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  regdictionary: {
    description: undefined,
    codec: TYPES.regdictionary,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  text_array_domain: {
    description: undefined,
    codec: textArrayDomainCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  int8_array_domain: {
    description: undefined,
    codec: int8ArrayDomainCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  bytea: {
    description: undefined,
    codec: TYPES.bytea,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  bytea_array: {
    description: undefined,
    codec: byteaArrayCodec,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  ltree: {
    description: undefined,
    codec: typesAttributes_ltree_codec_ltree,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  },
  ltree_array: {
    description: undefined,
    codec: typesAttributes_ltree_array_codec_ltree_,
    notNull: false,
    hasDefault: false,
    extensions: {
      tags: {}
    }
  }
});
const extensions28 = {
  isTableLike: true,
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "types"
  },
  tags: Object.assign(Object.create(null), {
    foreignKey: ["(smallint) references a.post", "(id) references a.post"]
  })
};
const parts28 = ["b", "types"];
const typesIdentifier = sql.identifier(...parts28);
const typesCodecSpec = {
  name: "types",
  identifier: typesIdentifier,
  attributes: typesAttributes,
  description: undefined,
  extensions: extensions28,
  executor: executor_mainPgExecutor
};
const typesCodec = recordCodec(typesCodecSpec);
const typesArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "b",
    name: "_types"
  },
  tags: Object.create(null)
};
const int4ArrayCodecExtensions = {
  pg: {
    serviceName: "main",
    schemaName: "pg_catalog",
    name: "_int4"
  },
  tags: Object.create(null)
};
const int4ArrayCodec = listOfCodec(TYPES.int, {
  extensions: int4ArrayCodecExtensions,
  typeDelim: ",",
  description: undefined,
  name: "int4Array"
});
const extensions29 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "floatrange"
  },
  tags: Object.create(null)
};
const parts29 = ["c", "floatrange"];
const sqlIdent8 = sql.identifier(...parts29);
const floatrangeCodec = rangeOfCodec(TYPES.float, "floatrange", sqlIdent8, {
  description: undefined,
  extensions: extensions29
});
const extensions30 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "current_user_id"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts30 = ["c", "current_user_id"];
const sqlIdent9 = sql.identifier(...parts30);
const extensions31 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts31 = ["c", "func_out"];
const sqlIdent10 = sql.identifier(...parts31);
const fromCallback2 = (...args) => sql`${sqlIdent10}(${sqlFromArgDigests(args)})`;
const parameters2 = [];
const extensions32 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_setof"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts32 = ["c", "func_out_setof"];
const sqlIdent11 = sql.identifier(...parts32);
const fromCallback3 = (...args) => sql`${sqlIdent11}(${sqlFromArgDigests(args)})`;
const parameters3 = [];
const extensions33 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_unnamed"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts33 = ["c", "func_out_unnamed"];
const sqlIdent12 = sql.identifier(...parts33);
const fromCallback4 = (...args) => sql`${sqlIdent12}(${sqlFromArgDigests(args)})`;
const parameters4 = [];
const extensions34 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts34 = ["c", "mutation_out"];
const sqlIdent13 = sql.identifier(...parts34);
const fromCallback5 = (...args) => sql`${sqlIdent13}(${sqlFromArgDigests(args)})`;
const parameters5 = [];
const extensions35 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_setof"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts35 = ["c", "mutation_out_setof"];
const sqlIdent14 = sql.identifier(...parts35);
const fromCallback6 = (...args) => sql`${sqlIdent14}(${sqlFromArgDigests(args)})`;
const parameters6 = [];
const extensions36 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_unnamed"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts36 = ["c", "mutation_out_unnamed"];
const sqlIdent15 = sql.identifier(...parts36);
const fromCallback7 = (...args) => sql`${sqlIdent15}(${sqlFromArgDigests(args)})`;
const parameters7 = [];
const extensions37 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "no_args_mutation"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts37 = ["c", "no_args_mutation"];
const sqlIdent16 = sql.identifier(...parts37);
const fromCallback8 = (...args) => sql`${sqlIdent16}(${sqlFromArgDigests(args)})`;
const parameters8 = [];
const extensions38 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "no_args_query"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts38 = ["c", "no_args_query"];
const sqlIdent17 = sql.identifier(...parts38);
const fromCallback9 = (...args) => sql`${sqlIdent17}(${sqlFromArgDigests(args)})`;
const parameters9 = [];
const extensions39 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_in_out"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts39 = ["c", "func_in_out"];
const sqlIdent18 = sql.identifier(...parts39);
const fromCallback10 = (...args) => sql`${sqlIdent18}(${sqlFromArgDigests(args)})`;
const parameters10 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions40 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_returns_table_one_col"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "col1"
};
const parts40 = ["c", "func_returns_table_one_col"];
const sqlIdent19 = sql.identifier(...parts40);
const fromCallback11 = (...args) => sql`${sqlIdent19}(${sqlFromArgDigests(args)})`;
const parameters11 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions41 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_in_out"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "o"
};
const parts41 = ["c", "mutation_in_out"];
const sqlIdent20 = sql.identifier(...parts41);
const fromCallback12 = (...args) => sql`${sqlIdent20}(${sqlFromArgDigests(args)})`;
const parameters12 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions42 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_returns_table_one_col"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "col1"
};
const parts42 = ["c", "mutation_returns_table_one_col"];
const sqlIdent21 = sql.identifier(...parts42);
const fromCallback13 = (...args) => sql`${sqlIdent21}(${sqlFromArgDigests(args)})`;
const parameters13 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions43 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "json_identity"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts43 = ["c", "json_identity"];
const sqlIdent22 = sql.identifier(...parts43);
const fromCallback14 = (...args) => sql`${sqlIdent22}(${sqlFromArgDigests(args)})`;
const parameters14 = [{
  name: "json",
  required: true,
  notNull: false,
  codec: TYPES.json
}];
const extensions44 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "json_identity_mutation"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts44 = ["c", "json_identity_mutation"];
const sqlIdent23 = sql.identifier(...parts44);
const fromCallback15 = (...args) => sql`${sqlIdent23}(${sqlFromArgDigests(args)})`;
const parameters15 = [{
  name: "json",
  required: true,
  notNull: false,
  codec: TYPES.json
}];
const extensions45 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "jsonb_identity"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts45 = ["c", "jsonb_identity"];
const sqlIdent24 = sql.identifier(...parts45);
const fromCallback16 = (...args) => sql`${sqlIdent24}(${sqlFromArgDigests(args)})`;
const parameters16 = [{
  name: "json",
  required: true,
  notNull: false,
  codec: TYPES.jsonb
}];
const extensions46 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "jsonb_identity_mutation"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts46 = ["c", "jsonb_identity_mutation"];
const sqlIdent25 = sql.identifier(...parts46);
const fromCallback17 = (...args) => sql`${sqlIdent25}(${sqlFromArgDigests(args)})`;
const parameters17 = [{
  name: "json",
  required: true,
  notNull: false,
  codec: TYPES.jsonb
}];
const extensions47 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "jsonb_identity_mutation_plpgsql"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts47 = ["c", "jsonb_identity_mutation_plpgsql"];
const sqlIdent26 = sql.identifier(...parts47);
const fromCallback18 = (...args) => sql`${sqlIdent26}(${sqlFromArgDigests(args)})`;
const parameters18 = [{
  name: "_the_json",
  required: true,
  notNull: true,
  codec: TYPES.jsonb
}];
const extensions48 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "jsonb_identity_mutation_plpgsql_with_default"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts48 = ["c", "jsonb_identity_mutation_plpgsql_with_default"];
const sqlIdent27 = sql.identifier(...parts48);
const fromCallback19 = (...args) => sql`${sqlIdent27}(${sqlFromArgDigests(args)})`;
const parameters19 = [{
  name: "_the_json",
  required: false,
  notNull: true,
  codec: TYPES.jsonb
}];
const extensions49 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_in_inout"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "ino"
};
const parts49 = ["c", "func_in_inout"];
const sqlIdent28 = sql.identifier(...parts49);
const fromCallback20 = (...args) => sql`${sqlIdent28}(${sqlFromArgDigests(args)})`;
const parameters20 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "ino",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions50 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_out"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts50 = ["c", "func_out_out"];
const sqlIdent29 = sql.identifier(...parts50);
const fromCallback21 = (...args) => sql`${sqlIdent29}(${sqlFromArgDigests(args)})`;
const parameters21 = [];
const extensions51 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_out_setof"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts51 = ["c", "func_out_out_setof"];
const sqlIdent30 = sql.identifier(...parts51);
const fromCallback22 = (...args) => sql`${sqlIdent30}(${sqlFromArgDigests(args)})`;
const parameters22 = [];
const extensions52 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_out_unnamed"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts52 = ["c", "func_out_out_unnamed"];
const sqlIdent31 = sql.identifier(...parts52);
const fromCallback23 = (...args) => sql`${sqlIdent31}(${sqlFromArgDigests(args)})`;
const parameters23 = [];
const extensions53 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_in_inout"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  },
  singleOutputParameterName: "ino"
};
const parts53 = ["c", "mutation_in_inout"];
const sqlIdent32 = sql.identifier(...parts53);
const fromCallback24 = (...args) => sql`${sqlIdent32}(${sqlFromArgDigests(args)})`;
const parameters24 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "ino",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions54 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_out"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts54 = ["c", "mutation_out_out"];
const sqlIdent33 = sql.identifier(...parts54);
const fromCallback25 = (...args) => sql`${sqlIdent33}(${sqlFromArgDigests(args)})`;
const parameters25 = [];
const extensions55 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_out_setof"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts55 = ["c", "mutation_out_out_setof"];
const sqlIdent34 = sql.identifier(...parts55);
const fromCallback26 = (...args) => sql`${sqlIdent34}(${sqlFromArgDigests(args)})`;
const parameters26 = [];
const extensions56 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_out_unnamed"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts56 = ["c", "mutation_out_out_unnamed"];
const sqlIdent35 = sql.identifier(...parts56);
const fromCallback27 = (...args) => sql`${sqlIdent35}(${sqlFromArgDigests(args)})`;
const parameters27 = [];
const extensions57 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_unnamed_out_out_unnamed"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts57 = ["c", "func_out_unnamed_out_out_unnamed"];
const sqlIdent36 = sql.identifier(...parts57);
const fromCallback28 = (...args) => sql`${sqlIdent36}(${sqlFromArgDigests(args)})`;
const parameters28 = [];
const extensions58 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_returns_table_multi_col"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts58 = ["c", "func_returns_table_multi_col"];
const sqlIdent37 = sql.identifier(...parts58);
const fromCallback29 = (...args) => sql`${sqlIdent37}(${sqlFromArgDigests(args)})`;
const parameters29 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions59 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "int_set_mutation"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts59 = ["c", "int_set_mutation"];
const sqlIdent38 = sql.identifier(...parts59);
const fromCallback30 = (...args) => sql`${sqlIdent38}(${sqlFromArgDigests(args)})`;
const parameters30 = [{
  name: "x",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "y",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "z",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions60 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "int_set_query"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts60 = ["c", "int_set_query"];
const sqlIdent39 = sql.identifier(...parts60);
const fromCallback31 = (...args) => sql`${sqlIdent39}(${sqlFromArgDigests(args)})`;
const parameters31 = [{
  name: "x",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "y",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "z",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions61 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_unnamed_out_out_unnamed"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts61 = ["c", "mutation_out_unnamed_out_out_unnamed"];
const sqlIdent40 = sql.identifier(...parts61);
const fromCallback32 = (...args) => sql`${sqlIdent40}(${sqlFromArgDigests(args)})`;
const parameters32 = [];
const extensions62 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_returns_table_multi_col"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts62 = ["c", "mutation_returns_table_multi_col"];
const sqlIdent41 = sql.identifier(...parts62);
const fromCallback33 = (...args) => sql`${sqlIdent41}(${sqlFromArgDigests(args)})`;
const parameters33 = [{
  name: "i",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions63 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "search_test_summaries"
  },
  tags: {
    simpleCollections: "only",
    behavior: ["queryField -mutationField -typeField", "-filter -order", "+list -connection"]
  }
};
const parts63 = ["c", "search_test_summaries"];
const sqlIdent42 = sql.identifier(...parts63);
const fromCallback34 = (...args) => sql`${sqlIdent42}(${sqlFromArgDigests(args)})`;
const parameters34 = [];
const extensions64 = {
  description: undefined,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "my_table"
  },
  tags: {}
};
const uniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const extensions65 = {
  description: "Tracks the person's secret",
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_secret"
  },
  tags: {
    deprecated: "This is deprecated (comment on table c.person_secret)."
  }
};
const uniques2 = [{
  isPrimary: true,
  attributes: ["person_id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_person_secret_person_secret = {
  executor: executor_mainPgExecutor,
  name: "person_secret",
  identifier: "main.c.person_secret",
  from: personSecretCodec.sqlType,
  codec: personSecretCodec,
  uniques: uniques2,
  isVirtual: false,
  description: "Tracks the person's secret",
  extensions: extensions65
};
const extensions66 = {
  description: undefined,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "compound_key"
  },
  tags: {}
};
const uniques3 = [{
  isPrimary: true,
  attributes: ["person_id_1", "person_id_2"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_compound_key_compound_key = {
  executor: executor_mainPgExecutor,
  name: "compound_key",
  identifier: "main.c.compound_key",
  from: compoundKeyCodec.sqlType,
  codec: compoundKeyCodec,
  uniques: uniques3,
  isVirtual: false,
  description: undefined,
  extensions: extensions66
};
const extensions67 = {
  description: undefined,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "null_test_record"
  },
  tags: {}
};
const uniques4 = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const extensions68 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "edge_case_computed"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts64 = ["c", "edge_case_computed"];
const sqlIdent43 = sql.identifier(...parts64);
const fromCallback35 = (...args) => sql`${sqlIdent43}(${sqlFromArgDigests(args)})`;
const parameters35 = [{
  name: "edge_case",
  required: true,
  notNull: false,
  codec: edgeCaseCodec
}];
const parts65 = ["c", "return_table_without_grants"];
const sqlIdent44 = sql.identifier(...parts65);
const options_return_table_without_grants = {
  name: "return_table_without_grants",
  identifier: "main.c.return_table_without_grants()",
  from(...args) {
    return sql`${sqlIdent44}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "return_table_without_grants"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const extensions69 = {
  description: undefined,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "edge_case"
  },
  tags: {}
};
const uniques5 = [];
const extensions70 = {
  description: "Tracks metadata about the left arms of various people",
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "left_arm"
  },
  tags: {}
};
const uniques6 = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}, {
  isPrimary: false,
  attributes: ["person_id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_left_arm_left_arm = {
  executor: executor_mainPgExecutor,
  name: "left_arm",
  identifier: "main.c.left_arm",
  from: leftArmCodec.sqlType,
  codec: leftArmCodec,
  uniques: uniques6,
  isVirtual: false,
  description: "Tracks metadata about the left arms of various people",
  extensions: extensions70
};
const parts66 = ["c", "left_arm_identity"];
const sqlIdent45 = sql.identifier(...parts66);
const options_left_arm_identity = {
  name: "left_arm_identity",
  identifier: "main.c.left_arm_identity(c.left_arm)",
  from(...args) {
    return sql`${sqlIdent45}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "left_arm",
    required: true,
    notNull: false,
    codec: leftArmCodec,
    extensions: {
      variant: "base"
    }
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "left_arm_identity"
    },
    tags: {
      arg0variant: "base",
      resultFieldName: "leftArm",
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const extensions71 = {
  description: undefined,
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "issue756"
  },
  tags: {}
};
const uniques7 = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_issue756_issue756 = {
  executor: executor_mainPgExecutor,
  name: "issue756",
  identifier: "main.c.issue756",
  from: issue756Codec.sqlType,
  codec: issue756Codec,
  uniques: uniques7,
  isVirtual: false,
  description: undefined,
  extensions: extensions71
};
const parts67 = ["c", "issue756_mutation"];
const sqlIdent46 = sql.identifier(...parts67);
const options_issue756_mutation = {
  name: "issue756_mutation",
  identifier: "main.c.issue756_mutation()",
  from(...args) {
    return sql`${sqlIdent46}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: false,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "issue756_mutation"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts68 = ["c", "issue756_set_mutation"];
const sqlIdent47 = sql.identifier(...parts68);
const options_issue756_set_mutation = {
  name: "issue756_set_mutation",
  identifier: "main.c.issue756_set_mutation()",
  from(...args) {
    return sql`${sqlIdent47}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "issue756_set_mutation"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const extensions72 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "types_mutation"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts69 = ["c", "types_mutation"];
const sqlIdent48 = sql.identifier(...parts69);
const fromCallback36 = (...args) => sql`${sqlIdent48}(${sqlFromArgDigests(args)})`;
const parameters36 = [{
  name: "a",
  required: true,
  notNull: true,
  codec: TYPES.bigint
}, {
  name: "b",
  required: true,
  notNull: true,
  codec: TYPES.boolean
}, {
  name: "c",
  required: true,
  notNull: true,
  codec: TYPES.varchar
}, {
  name: "d",
  required: true,
  notNull: true,
  codec: int4ArrayCodec
}, {
  name: "e",
  required: true,
  notNull: true,
  codec: TYPES.json
}, {
  name: "f",
  required: true,
  notNull: true,
  codec: floatrangeCodec
}];
const extensions73 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "types_query"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts70 = ["c", "types_query"];
const sqlIdent49 = sql.identifier(...parts70);
const fromCallback37 = (...args) => sql`${sqlIdent49}(${sqlFromArgDigests(args)})`;
const parameters37 = [{
  name: "a",
  required: true,
  notNull: true,
  codec: TYPES.bigint
}, {
  name: "b",
  required: true,
  notNull: true,
  codec: TYPES.boolean
}, {
  name: "c",
  required: true,
  notNull: true,
  codec: TYPES.varchar
}, {
  name: "d",
  required: true,
  notNull: true,
  codec: int4ArrayCodec
}, {
  name: "e",
  required: true,
  notNull: true,
  codec: TYPES.json
}, {
  name: "f",
  required: true,
  notNull: true,
  codec: floatrangeCodec
}];
const extensions74 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "compound_type_computed_field"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts71 = ["c", "compound_type_computed_field"];
const sqlIdent50 = sql.identifier(...parts71);
const fromCallback38 = (...args) => sql`${sqlIdent50}(${sqlFromArgDigests(args)})`;
const parameters38 = [{
  name: "compound_type",
  required: true,
  notNull: false,
  codec: compoundTypeCodec
}];
const extensions75 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_out_compound_type"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts72 = ["c", "func_out_out_compound_type"];
const sqlIdent51 = sql.identifier(...parts72);
const fromCallback39 = (...args) => sql`${sqlIdent51}(${sqlFromArgDigests(args)})`;
const parameters39 = [{
  name: "i1",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions76 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_out_compound_type"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts73 = ["c", "mutation_out_out_compound_type"];
const sqlIdent52 = sql.identifier(...parts73);
const fromCallback40 = (...args) => sql`${sqlIdent52}(${sqlFromArgDigests(args)})`;
const parameters40 = [{
  name: "i1",
  required: true,
  notNull: false,
  codec: TYPES.int
}];
const extensions77 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "query_output_two_rows"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts74 = ["c", "query_output_two_rows"];
const sqlIdent53 = sql.identifier(...parts74);
const fromCallback41 = (...args) => sql`${sqlIdent53}(${sqlFromArgDigests(args)})`;
const parameters41 = [{
  name: "left_arm_id",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "post_id",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "txt",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const parts75 = ["c", "compound_type_set_query"];
const sqlIdent54 = sql.identifier(...parts75);
const options_compound_type_set_query = {
  name: "compound_type_set_query",
  identifier: "main.c.compound_type_set_query()",
  from(...args) {
    return sql`${sqlIdent54}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "compound_type_set_query"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const extensions78 = {
  description: "Awesome feature!",
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "compound_type"
  },
  tags: {
    behavior: ["-insert", "-update", "-delete"]
  }
};
const uniques8 = [];
const resourceConfig_compound_type = {
  executor: executor_mainPgExecutor,
  name: "compound_type",
  identifier: "main.c.compound_type",
  from: compoundTypeCodec.sqlType,
  codec: compoundTypeCodec,
  uniques: uniques8,
  isVirtual: true,
  description: "Awesome feature!",
  extensions: extensions78
};
const parts76 = ["c", "table_mutation"];
const sqlIdent55 = sql.identifier(...parts76);
const options_table_mutation = {
  name: "table_mutation",
  identifier: "main.c.table_mutation(int4)",
  from(...args) {
    return sql`${sqlIdent55}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "id",
    required: true,
    notNull: false,
    codec: TYPES.int
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "table_mutation"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const resourceConfig = {
  codec: postCodec,
  executor: executor_mainPgExecutor
};
const parts77 = ["c", "table_query"];
const sqlIdent56 = sql.identifier(...parts77);
const options_table_query = {
  name: "table_query",
  identifier: "main.c.table_query(int4)",
  from(...args) {
    return sql`${sqlIdent56}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "id",
    required: true,
    notNull: false,
    codec: TYPES.int
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "table_query"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const resourceConfig2 = {
  codec: postCodec,
  executor: executor_mainPgExecutor
};
const extensions79 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_out"
  },
  tags: {
    notNull: true,
    sortable: true,
    filterable: true,
    behavior: ["-queryField -mutationField typeField", "-filter -order", "filter filterBy", "orderBy order"]
  },
  singleOutputParameterName: "o1"
};
const parts78 = ["c", "person_computed_out"];
const sqlIdent57 = sql.identifier(...parts78);
const fromCallback42 = (...args) => sql`${sqlIdent57}(${sqlFromArgDigests(args)})`;
const parameters42 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}];
const extensions80 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_first_name"
  },
  tags: {
    sortable: true,
    behavior: ["-queryField -mutationField typeField", "-filter -order", "orderBy order"]
  }
};
const parts79 = ["c", "person_first_name"];
const sqlIdent58 = sql.identifier(...parts79);
const fromCallback43 = (...args) => sql`${sqlIdent58}(${sqlFromArgDigests(args)})`;
const parameters43 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}];
const extensions81 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_out_out"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts80 = ["c", "person_computed_out_out"];
const sqlIdent59 = sql.identifier(...parts80);
const fromCallback44 = (...args) => sql`${sqlIdent59}(${sqlFromArgDigests(args)})`;
const parameters44 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}];
const extensions82 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_inout"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  },
  singleOutputParameterName: "ino"
};
const parts81 = ["c", "person_computed_inout"];
const sqlIdent60 = sql.identifier(...parts81);
const fromCallback45 = (...args) => sql`${sqlIdent60}(${sqlFromArgDigests(args)})`;
const parameters45 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}, {
  name: "ino",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions83 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_inout_out"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts82 = ["c", "person_computed_inout_out"];
const sqlIdent61 = sql.identifier(...parts82);
const fromCallback46 = (...args) => sql`${sqlIdent61}(${sqlFromArgDigests(args)})`;
const parameters46 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}, {
  name: "ino",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions84 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_exists"
  },
  tags: {
    deprecated: "This is deprecated (comment on function c.person_exists).",
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts83 = ["c", "person_exists"];
const sqlIdent62 = sql.identifier(...parts83);
const fromCallback47 = (...args) => sql`${sqlIdent62}(${sqlFromArgDigests(args)})`;
const parameters47 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}, {
  name: "email",
  required: true,
  notNull: false,
  codec: emailCodec
}];
const extensions85 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_first_arg_inout_out"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts84 = ["c", "person_computed_first_arg_inout_out"];
const sqlIdent63 = sql.identifier(...parts84);
const fromCallback48 = (...args) => sql`${sqlIdent63}(${sqlFromArgDigests(args)})`;
const parameters48 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}];
const extensions86 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_complex"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts85 = ["c", "func_out_complex"];
const sqlIdent64 = sql.identifier(...parts85);
const fromCallback49 = (...args) => sql`${sqlIdent64}(${sqlFromArgDigests(args)})`;
const parameters49 = [{
  name: "a",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "b",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions87 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "func_out_complex_setof"
  },
  tags: {
    behavior: ["queryField -mutationField -typeField", "-filter -order"]
  }
};
const parts86 = ["c", "func_out_complex_setof"];
const sqlIdent65 = sql.identifier(...parts86);
const fromCallback50 = (...args) => sql`${sqlIdent65}(${sqlFromArgDigests(args)})`;
const parameters50 = [{
  name: "a",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "b",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions88 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_complex"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts87 = ["c", "mutation_out_complex"];
const sqlIdent66 = sql.identifier(...parts87);
const fromCallback51 = (...args) => sql`${sqlIdent66}(${sqlFromArgDigests(args)})`;
const parameters51 = [{
  name: "a",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "b",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions89 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "mutation_out_complex_setof"
  },
  tags: {
    behavior: ["-queryField mutationField -typeField", "-filter -order"]
  }
};
const parts88 = ["c", "mutation_out_complex_setof"];
const sqlIdent67 = sql.identifier(...parts88);
const fromCallback52 = (...args) => sql`${sqlIdent67}(${sqlFromArgDigests(args)})`;
const parameters52 = [{
  name: "a",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "b",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions90 = {
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person_computed_complex"
  },
  tags: {
    behavior: ["-queryField -mutationField typeField", "-filter -order"]
  }
};
const parts89 = ["c", "person_computed_complex"];
const sqlIdent68 = sql.identifier(...parts89);
const fromCallback53 = (...args) => sql`${sqlIdent68}(${sqlFromArgDigests(args)})`;
const parameters53 = [{
  name: "person",
  required: true,
  notNull: false,
  codec: personCodec
}, {
  name: "a",
  required: true,
  notNull: false,
  codec: TYPES.int
}, {
  name: "b",
  required: true,
  notNull: false,
  codec: TYPES.text
}];
const extensions91 = {
  description: "Person test comment",
  pg: {
    serviceName: "main",
    schemaName: "c",
    name: "person"
  },
  tags: {}
};
const uniques9 = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}, {
  isPrimary: false,
  attributes: ["email"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_person_person = {
  executor: executor_mainPgExecutor,
  name: "person",
  identifier: "main.c.person",
  from: personCodec.sqlType,
  codec: personCodec,
  uniques: uniques9,
  isVirtual: false,
  description: "Person test comment",
  extensions: extensions91
};
const parts90 = ["c", "person_first_post"];
const sqlIdent69 = sql.identifier(...parts90);
const options_person_first_post = {
  name: "person_first_post",
  identifier: "main.c.person_first_post(c.person)",
  from(...args) {
    return sql`${sqlIdent69}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "person",
    required: true,
    notNull: false,
    codec: personCodec
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_first_post"
    },
    tags: {
      behavior: ["-queryField -mutationField typeField", "-filter -order"]
    }
  },
  description: "The first post by the person."
};
const resourceConfig3 = {
  codec: postCodec,
  executor: executor_mainPgExecutor
};
const parts91 = ["c", "badly_behaved_function"];
const sqlIdent70 = sql.identifier(...parts91);
const options_badly_behaved_function = {
  name: "badly_behaved_function",
  identifier: "main.c.badly_behaved_function()",
  from(...args) {
    return sql`${sqlIdent70}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "badly_behaved_function"
    },
    tags: {
      deprecated: "This is deprecated (comment on function c.badly_behaved_function).",
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts92 = ["c", "func_out_table"];
const sqlIdent71 = sql.identifier(...parts92);
const options_func_out_table = {
  name: "func_out_table",
  identifier: "main.c.func_out_table(c.person)",
  from(...args) {
    return sql`${sqlIdent71}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "func_out_table"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts93 = ["c", "func_out_table_setof"];
const sqlIdent72 = sql.identifier(...parts93);
const options_func_out_table_setof = {
  name: "func_out_table_setof",
  identifier: "main.c.func_out_table_setof(c.person)",
  from(...args) {
    return sql`${sqlIdent72}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "func_out_table_setof"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts94 = ["c", "mutation_out_table"];
const sqlIdent73 = sql.identifier(...parts94);
const options_mutation_out_table = {
  name: "mutation_out_table",
  identifier: "main.c.mutation_out_table(c.person)",
  from(...args) {
    return sql`${sqlIdent73}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: false,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "mutation_out_table"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts95 = ["c", "mutation_out_table_setof"];
const sqlIdent74 = sql.identifier(...parts95);
const options_mutation_out_table_setof = {
  name: "mutation_out_table_setof",
  identifier: "main.c.mutation_out_table_setof(c.person)",
  from(...args) {
    return sql`${sqlIdent74}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "mutation_out_table_setof"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts96 = ["c", "table_set_mutation"];
const sqlIdent75 = sql.identifier(...parts96);
const options_table_set_mutation = {
  name: "table_set_mutation",
  identifier: "main.c.table_set_mutation()",
  from(...args) {
    return sql`${sqlIdent75}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: true,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "table_set_mutation"
    },
    tags: {
      behavior: ["-queryField mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts97 = ["c", "table_set_query"];
const sqlIdent76 = sql.identifier(...parts97);
const options_table_set_query = {
  name: "table_set_query",
  identifier: "main.c.table_set_query()",
  from(...args) {
    return sql`${sqlIdent76}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "table_set_query"
    },
    tags: {
      sortable: true,
      filterable: true,
      behavior: ["queryField -mutationField -typeField", "-filter -order", "filter filterBy", "orderBy order"]
    }
  },
  description: undefined
};
const parts98 = ["c", "table_set_query_plpgsql"];
const sqlIdent77 = sql.identifier(...parts98);
const options_table_set_query_plpgsql = {
  name: "table_set_query_plpgsql",
  identifier: "main.c.table_set_query_plpgsql()",
  from(...args) {
    return sql`${sqlIdent77}(${sqlFromArgDigests(args)})`;
  },
  parameters: [],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "table_set_query_plpgsql"
    },
    tags: {
      behavior: ["queryField -mutationField -typeField", "-filter -order"]
    }
  },
  description: undefined
};
const parts99 = ["c", "person_computed_first_arg_inout"];
const sqlIdent78 = sql.identifier(...parts99);
const options_person_computed_first_arg_inout = {
  name: "person_computed_first_arg_inout",
  identifier: "main.c.person_computed_first_arg_inout(c.person)",
  from(...args) {
    return sql`${sqlIdent78}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "person",
    required: true,
    notNull: false,
    codec: personCodec
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_computed_first_arg_inout"
    },
    tags: {
      behavior: ["-queryField -mutationField typeField", "-filter -order"]
    },
    singleOutputParameterName: "person"
  },
  description: undefined
};
const parts100 = ["c", "person_friends"];
const sqlIdent79 = sql.identifier(...parts100);
const options_person_friends = {
  name: "person_friends",
  identifier: "main.c.person_friends(c.person)",
  from(...args) {
    return sql`${sqlIdent79}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "person",
    required: true,
    notNull: false,
    codec: personCodec
  }],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_friends"
    },
    tags: {
      sortable: true,
      behavior: ["-queryField -mutationField typeField", "-filter -order", "orderBy order"]
    }
  },
  description: undefined
};
const parts101 = ["c", "person_type_function_connection"];
const sqlIdent80 = sql.identifier(...parts101);
const options_person_type_function_connection = {
  name: "person_type_function_connection",
  identifier: "main.c.person_type_function_connection(c.person)",
  from(...args) {
    return sql`${sqlIdent80}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "p",
    required: true,
    notNull: false,
    codec: personCodec
  }],
  returnsArray: false,
  returnsSetof: true,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_type_function_connection"
    },
    tags: {
      behavior: ["-queryField -mutationField typeField", "-filter -order"]
    }
  },
  description: undefined
};
const resourceConfig4 = {
  codec: typesCodec,
  executor: executor_mainPgExecutor
};
const parts102 = ["c", "person_type_function"];
const sqlIdent81 = sql.identifier(...parts102);
const options_person_type_function = {
  name: "person_type_function",
  identifier: "main.c.person_type_function(c.person,int4)",
  from(...args) {
    return sql`${sqlIdent81}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "p",
    required: true,
    notNull: false,
    codec: personCodec
  }, {
    name: "id",
    required: true,
    notNull: false,
    codec: TYPES.int
  }],
  returnsArray: false,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_type_function"
    },
    tags: {
      behavior: ["-queryField -mutationField typeField", "-filter -order"]
    }
  },
  description: undefined
};
const resourceConfig5 = {
  codec: typesCodec,
  executor: executor_mainPgExecutor
};
const parts103 = ["c", "person_type_function_list"];
const sqlIdent82 = sql.identifier(...parts103);
const options_person_type_function_list = {
  name: "person_type_function_list",
  identifier: "main.c.person_type_function_list(c.person)",
  from(...args) {
    return sql`${sqlIdent82}(${sqlFromArgDigests(args)})`;
  },
  parameters: [{
    name: "p",
    required: true,
    notNull: false,
    codec: personCodec
  }],
  returnsArray: true,
  returnsSetof: false,
  isMutation: false,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_type_function_list"
    },
    tags: {
      behavior: ["-queryField -mutationField typeField", "-filter -order"]
    }
  },
  description: undefined
};
const resourceConfig6 = {
  codec: typesCodec,
  executor: executor_mainPgExecutor
};
const registry = makeRegistry({
  pgCodecs: Object.assign(Object.create(null), {
    int4: TYPES.int,
    json: TYPES.json,
    jsonb: TYPES.jsonb,
    FuncOutOutRecord: registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord,
    text: TYPES.text,
    FuncOutOutSetofRecord: registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord,
    FuncOutOutUnnamedRecord: registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord,
    MutationOutOutRecord: registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord,
    MutationOutOutSetofRecord: registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord,
    MutationOutOutUnnamedRecord: registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord,
    FuncOutUnnamedOutOutUnnamedRecord: registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord,
    FuncReturnsTableMultiColRecord: registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord,
    MutationOutUnnamedOutOutUnnamedRecord: registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord,
    MutationReturnsTableMultiColRecord: registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord,
    SearchTestSummariesRecord: registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord,
    interval: TYPES.interval,
    myTable: myTableCodec,
    personSecret: personSecretCodec,
    compoundKey: compoundKeyCodec,
    bool: TYPES.boolean,
    nullTestRecord: nullTestRecordCodec,
    edgeCase: edgeCaseCodec,
    int2: TYPES.int2,
    leftArm: leftArmCodec,
    float8: TYPES.float,
    issue756: issue756Codec,
    notNullTimestamp: notNullTimestampCodec,
    timestamptz: TYPES.timestamptz,
    FuncOutOutCompoundTypeRecord: registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord,
    compoundType: compoundTypeCodec,
    color: colorCodec,
    uuid: TYPES.uuid,
    enumCaps: enumCapsCodec,
    enumWithEmptyString: enumWithEmptyStringCodec,
    MutationOutOutCompoundTypeRecord: registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord,
    QueryOutputTwoRowsRecord: registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord,
    post: postCodec,
    anEnumArray: anEnumArrayCodec,
    anEnum: anEnumCodec,
    comptypeArray: comptypeArrayCodec,
    comptype: comptypeCodec,
    PersonComputedOutOutRecord: registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord,
    PersonComputedInoutOutRecord: registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord,
    PersonComputedFirstArgInoutOutRecord: registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord,
    person: personCodec,
    varchar: TYPES.varchar,
    textArray: textArrayCodec,
    email: emailCodec,
    wrappedUrl: wrappedUrlCodec,
    notNullUrl: notNullUrlCodec,
    hstore: TYPES.hstore,
    inet: TYPES.inet,
    cidr: TYPES.cidr,
    macaddr: TYPES.macaddr,
    timestamp: TYPES.timestamp,
    FuncOutComplexRecord: registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord,
    FuncOutComplexSetofRecord: registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord,
    MutationOutComplexRecord: registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord,
    MutationOutComplexSetofRecord: registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord,
    PersonComputedComplexRecord: registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord,
    types: typesCodec,
    int8: TYPES.bigint,
    numeric: TYPES.numeric,
    colorArray: colorArrayCodec,
    anInt: anIntCodec,
    anotherInt: anotherIntCodec,
    numrange: numrangeCodec,
    daterange: daterangeCodec,
    date: TYPES.date,
    anIntRange: anIntRangeCodec,
    time: TYPES.time,
    timetz: TYPES.timetz,
    intervalArray: intervalArrayCodec,
    money: TYPES.money,
    nestedCompoundType: nestedCompoundTypeCodec,
    point: TYPES.point,
    regproc: TYPES.regproc,
    regprocedure: TYPES.regprocedure,
    regoper: TYPES.regoper,
    regoperator: TYPES.regoperator,
    regclass: TYPES.regclass,
    regtype: TYPES.regtype,
    regconfig: TYPES.regconfig,
    regdictionary: TYPES.regdictionary,
    textArrayDomain: textArrayDomainCodec,
    int8ArrayDomain: int8ArrayDomainCodec,
    bytea: TYPES.bytea,
    byteaArray: byteaArrayCodec,
    ltree: typesAttributes_ltree_codec_ltree,
    "ltree[]": typesAttributes_ltree_array_codec_ltree_,
    bpchar: TYPES.bpchar,
    typesArray: listOfCodec(typesCodec, {
      extensions: typesArrayCodecExtensions,
      typeDelim: ",",
      description: undefined,
      name: "typesArray"
    }),
    int4Array: int4ArrayCodec,
    floatrange: floatrangeCodec,
    int8Array: int8ArrayCodec
  }),
  pgResources: Object.assign(Object.create(null), {
    current_user_id: {
      executor: executor_mainPgExecutor,
      name: "current_user_id",
      identifier: "main.c.current_user_id()",
      from(...args) {
        return sql`${sqlIdent9}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions30,
      description: undefined
    },
    func_out: {
      executor: executor_mainPgExecutor,
      name: "func_out",
      identifier: "main.c.func_out(int4)",
      from: fromCallback2,
      parameters: parameters2,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions31,
      description: undefined
    },
    func_out_setof: {
      executor: executor_mainPgExecutor,
      name: "func_out_setof",
      identifier: "main.c.func_out_setof(int4)",
      from: fromCallback3,
      parameters: parameters3,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions32,
      description: undefined
    },
    func_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "func_out_unnamed",
      identifier: "main.c.func_out_unnamed(int4)",
      from: fromCallback4,
      parameters: parameters4,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions33,
      description: undefined
    },
    mutation_out: {
      executor: executor_mainPgExecutor,
      name: "mutation_out",
      identifier: "main.c.mutation_out(int4)",
      from: fromCallback5,
      parameters: parameters5,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions34,
      description: undefined
    },
    mutation_out_setof: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_setof",
      identifier: "main.c.mutation_out_setof(int4)",
      from: fromCallback6,
      parameters: parameters6,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions35,
      description: undefined
    },
    mutation_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_unnamed",
      identifier: "main.c.mutation_out_unnamed(int4)",
      from: fromCallback7,
      parameters: parameters7,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions36,
      description: undefined
    },
    no_args_mutation: {
      executor: executor_mainPgExecutor,
      name: "no_args_mutation",
      identifier: "main.c.no_args_mutation()",
      from: fromCallback8,
      parameters: parameters8,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions37,
      description: undefined
    },
    no_args_query: {
      executor: executor_mainPgExecutor,
      name: "no_args_query",
      identifier: "main.c.no_args_query()",
      from: fromCallback9,
      parameters: parameters9,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions38,
      description: undefined
    },
    func_in_out: {
      executor: executor_mainPgExecutor,
      name: "func_in_out",
      identifier: "main.c.func_in_out(int4,int4)",
      from: fromCallback10,
      parameters: parameters10,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions39,
      description: undefined
    },
    func_returns_table_one_col: {
      executor: executor_mainPgExecutor,
      name: "func_returns_table_one_col",
      identifier: "main.c.func_returns_table_one_col(int4,int4)",
      from: fromCallback11,
      parameters: parameters11,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions40,
      description: undefined
    },
    mutation_in_out: {
      executor: executor_mainPgExecutor,
      name: "mutation_in_out",
      identifier: "main.c.mutation_in_out(int4,int4)",
      from: fromCallback12,
      parameters: parameters12,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions41,
      description: undefined
    },
    mutation_returns_table_one_col: {
      executor: executor_mainPgExecutor,
      name: "mutation_returns_table_one_col",
      identifier: "main.c.mutation_returns_table_one_col(int4,int4)",
      from: fromCallback13,
      parameters: parameters13,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions42,
      description: undefined
    },
    json_identity: {
      executor: executor_mainPgExecutor,
      name: "json_identity",
      identifier: "main.c.json_identity(json)",
      from: fromCallback14,
      parameters: parameters14,
      isUnique: !false,
      codec: TYPES.json,
      uniques: [],
      isMutation: false,
      extensions: extensions43,
      description: undefined
    },
    json_identity_mutation: {
      executor: executor_mainPgExecutor,
      name: "json_identity_mutation",
      identifier: "main.c.json_identity_mutation(json)",
      from: fromCallback15,
      parameters: parameters15,
      isUnique: !false,
      codec: TYPES.json,
      uniques: [],
      isMutation: true,
      extensions: extensions44,
      description: undefined
    },
    jsonb_identity: {
      executor: executor_mainPgExecutor,
      name: "jsonb_identity",
      identifier: "main.c.jsonb_identity(jsonb)",
      from: fromCallback16,
      parameters: parameters16,
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: false,
      extensions: extensions45,
      description: undefined
    },
    jsonb_identity_mutation: {
      executor: executor_mainPgExecutor,
      name: "jsonb_identity_mutation",
      identifier: "main.c.jsonb_identity_mutation(jsonb)",
      from: fromCallback17,
      parameters: parameters17,
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      extensions: extensions46,
      description: undefined
    },
    jsonb_identity_mutation_plpgsql: {
      executor: executor_mainPgExecutor,
      name: "jsonb_identity_mutation_plpgsql",
      identifier: "main.c.jsonb_identity_mutation_plpgsql(jsonb)",
      from: fromCallback18,
      parameters: parameters18,
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      extensions: extensions47,
      description: undefined
    },
    jsonb_identity_mutation_plpgsql_with_default: {
      executor: executor_mainPgExecutor,
      name: "jsonb_identity_mutation_plpgsql_with_default",
      identifier: "main.c.jsonb_identity_mutation_plpgsql_with_default(jsonb)",
      from: fromCallback19,
      parameters: parameters19,
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      extensions: extensions48,
      description: undefined
    },
    func_in_inout: {
      executor: executor_mainPgExecutor,
      name: "func_in_inout",
      identifier: "main.c.func_in_inout(int4,int4)",
      from: fromCallback20,
      parameters: parameters20,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions49,
      description: undefined
    },
    func_out_out: {
      executor: executor_mainPgExecutor,
      name: "func_out_out",
      identifier: "main.c.func_out_out(int4,text)",
      from: fromCallback21,
      parameters: parameters21,
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions50,
      description: undefined
    },
    func_out_out_setof: {
      executor: executor_mainPgExecutor,
      name: "func_out_out_setof",
      identifier: "main.c.func_out_out_setof(int4,text)",
      from: fromCallback22,
      parameters: parameters22,
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions51,
      description: undefined
    },
    func_out_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "func_out_out_unnamed",
      identifier: "main.c.func_out_out_unnamed(int4,text)",
      from: fromCallback23,
      parameters: parameters23,
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions52,
      description: undefined
    },
    mutation_in_inout: {
      executor: executor_mainPgExecutor,
      name: "mutation_in_inout",
      identifier: "main.c.mutation_in_inout(int4,int4)",
      from: fromCallback24,
      parameters: parameters24,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions53,
      description: undefined
    },
    mutation_out_out: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_out",
      identifier: "main.c.mutation_out_out(int4,text)",
      from: fromCallback25,
      parameters: parameters25,
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions54,
      description: undefined
    },
    mutation_out_out_setof: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_out_setof",
      identifier: "main.c.mutation_out_out_setof(int4,text)",
      from: fromCallback26,
      parameters: parameters26,
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions55,
      description: undefined
    },
    mutation_out_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_out_unnamed",
      identifier: "main.c.mutation_out_out_unnamed(int4,text)",
      from: fromCallback27,
      parameters: parameters27,
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions56,
      description: undefined
    },
    func_out_unnamed_out_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "func_out_unnamed_out_out_unnamed",
      identifier: "main.c.func_out_unnamed_out_out_unnamed(int4,text,int4)",
      from: fromCallback28,
      parameters: parameters28,
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions57,
      description: undefined
    },
    func_returns_table_multi_col: {
      executor: executor_mainPgExecutor,
      name: "func_returns_table_multi_col",
      identifier: "main.c.func_returns_table_multi_col(int4,int4,text)",
      from: fromCallback29,
      parameters: parameters29,
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions58,
      description: undefined
    },
    int_set_mutation: {
      executor: executor_mainPgExecutor,
      name: "int_set_mutation",
      identifier: "main.c.int_set_mutation(int4,int4,int4)",
      from: fromCallback30,
      parameters: parameters30,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      extensions: extensions59,
      description: undefined
    },
    int_set_query: {
      executor: executor_mainPgExecutor,
      name: "int_set_query",
      identifier: "main.c.int_set_query(int4,int4,int4)",
      from: fromCallback31,
      parameters: parameters31,
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions60,
      description: undefined
    },
    mutation_out_unnamed_out_out_unnamed: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_unnamed_out_out_unnamed",
      identifier: "main.c.mutation_out_unnamed_out_out_unnamed(int4,text,int4)",
      from: fromCallback32,
      parameters: parameters32,
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions61,
      description: undefined
    },
    mutation_returns_table_multi_col: {
      executor: executor_mainPgExecutor,
      name: "mutation_returns_table_multi_col",
      identifier: "main.c.mutation_returns_table_multi_col(int4,int4,text)",
      from: fromCallback33,
      parameters: parameters33,
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions62,
      description: undefined
    },
    search_test_summaries: {
      executor: executor_mainPgExecutor,
      name: "search_test_summaries",
      identifier: "main.c.search_test_summaries(int4,interval)",
      from: fromCallback34,
      parameters: parameters34,
      isUnique: !true,
      codec: registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions63,
      description: undefined
    },
    my_table: {
      executor: executor_mainPgExecutor,
      name: "my_table",
      identifier: "main.c.my_table",
      from: myTableCodec.sqlType,
      codec: myTableCodec,
      uniques,
      isVirtual: false,
      description: undefined,
      extensions: extensions64
    },
    person_secret: registryConfig_pgResources_person_secret_person_secret,
    compound_key: registryConfig_pgResources_compound_key_compound_key,
    null_test_record: {
      executor: executor_mainPgExecutor,
      name: "null_test_record",
      identifier: "main.c.null_test_record",
      from: nullTestRecordCodec.sqlType,
      codec: nullTestRecordCodec,
      uniques: uniques4,
      isVirtual: false,
      description: undefined,
      extensions: extensions67
    },
    edge_case_computed: {
      executor: executor_mainPgExecutor,
      name: "edge_case_computed",
      identifier: "main.c.edge_case_computed(c.edge_case)",
      from: fromCallback35,
      parameters: parameters35,
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      extensions: extensions68,
      description: undefined
    },
    return_table_without_grants: PgResource.functionResourceOptions(registryConfig_pgResources_compound_key_compound_key, options_return_table_without_grants),
    edge_case: {
      executor: executor_mainPgExecutor,
      name: "edge_case",
      identifier: "main.c.edge_case",
      from: edgeCaseCodec.sqlType,
      codec: edgeCaseCodec,
      uniques: uniques5,
      isVirtual: false,
      description: undefined,
      extensions: extensions69
    },
    left_arm: registryConfig_pgResources_left_arm_left_arm,
    left_arm_identity: PgResource.functionResourceOptions(registryConfig_pgResources_left_arm_left_arm, options_left_arm_identity),
    issue756: registryConfig_pgResources_issue756_issue756,
    issue756_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_issue756_issue756, options_issue756_mutation),
    issue756_set_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_issue756_issue756, options_issue756_set_mutation),
    types_mutation: {
      executor: executor_mainPgExecutor,
      name: "types_mutation",
      identifier: "main.c.types_mutation(int8,bool,varchar,_int4,json,c.floatrange)",
      from: fromCallback36,
      parameters: parameters36,
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: true,
      extensions: extensions72,
      description: undefined
    },
    types_query: {
      executor: executor_mainPgExecutor,
      name: "types_query",
      identifier: "main.c.types_query(int8,bool,varchar,_int4,json,c.floatrange)",
      from: fromCallback37,
      parameters: parameters37,
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: false,
      extensions: extensions73,
      description: undefined
    },
    compound_type_computed_field: {
      executor: executor_mainPgExecutor,
      name: "compound_type_computed_field",
      identifier: "main.c.compound_type_computed_field(c.compound_type)",
      from: fromCallback38,
      parameters: parameters38,
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      extensions: extensions74,
      description: undefined
    },
    func_out_out_compound_type: {
      executor: executor_mainPgExecutor,
      name: "func_out_out_compound_type",
      identifier: "main.c.func_out_out_compound_type(int4,int4,c.compound_type)",
      from: fromCallback39,
      parameters: parameters39,
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions75,
      description: undefined
    },
    mutation_out_out_compound_type: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_out_compound_type",
      identifier: "main.c.mutation_out_out_compound_type(int4,int4,c.compound_type)",
      from: fromCallback40,
      parameters: parameters40,
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions76,
      description: undefined
    },
    query_output_two_rows: {
      executor: executor_mainPgExecutor,
      name: "query_output_two_rows",
      identifier: "main.c.query_output_two_rows(int4,int4,text,c.left_arm,a.post)",
      from: fromCallback41,
      parameters: parameters41,
      isUnique: !false,
      codec: registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions77,
      description: undefined
    },
    compound_type_set_query: PgResource.functionResourceOptions(resourceConfig_compound_type, options_compound_type_set_query),
    table_mutation: PgResource.functionResourceOptions(resourceConfig, options_table_mutation),
    table_query: PgResource.functionResourceOptions(resourceConfig2, options_table_query),
    person_computed_out: {
      executor: executor_mainPgExecutor,
      name: "person_computed_out",
      identifier: "main.c.person_computed_out(c.person,text)",
      from: fromCallback42,
      parameters: parameters42,
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      extensions: extensions79,
      description: undefined
    },
    person_first_name: {
      executor: executor_mainPgExecutor,
      name: "person_first_name",
      identifier: "main.c.person_first_name(c.person)",
      from: fromCallback43,
      parameters: parameters43,
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      extensions: extensions80,
      description: "The first name of the person."
    },
    person_computed_out_out: {
      executor: executor_mainPgExecutor,
      name: "person_computed_out_out",
      identifier: "main.c.person_computed_out_out(c.person,text,text)",
      from: fromCallback44,
      parameters: parameters44,
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions81,
      description: undefined
    },
    person_computed_inout: {
      executor: executor_mainPgExecutor,
      name: "person_computed_inout",
      identifier: "main.c.person_computed_inout(c.person,text)",
      from: fromCallback45,
      parameters: parameters45,
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      extensions: extensions82,
      description: undefined
    },
    person_computed_inout_out: {
      executor: executor_mainPgExecutor,
      name: "person_computed_inout_out",
      identifier: "main.c.person_computed_inout_out(c.person,text,text)",
      from: fromCallback46,
      parameters: parameters46,
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions83,
      description: undefined
    },
    person_exists: {
      executor: executor_mainPgExecutor,
      name: "person_exists",
      identifier: "main.c.person_exists(c.person,b.email)",
      from: fromCallback47,
      parameters: parameters47,
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: false,
      extensions: extensions84,
      description: undefined
    },
    person_computed_first_arg_inout_out: {
      executor: executor_mainPgExecutor,
      name: "person_computed_first_arg_inout_out",
      identifier: "main.c.person_computed_first_arg_inout_out(c.person,int4)",
      from: fromCallback48,
      parameters: parameters48,
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions85,
      description: undefined
    },
    func_out_complex: {
      executor: executor_mainPgExecutor,
      name: "func_out_complex",
      identifier: "main.c.func_out_complex(int4,text,int4,c.compound_type,c.person)",
      from: fromCallback49,
      parameters: parameters49,
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions86,
      description: undefined
    },
    func_out_complex_setof: {
      executor: executor_mainPgExecutor,
      name: "func_out_complex_setof",
      identifier: "main.c.func_out_complex_setof(int4,text,int4,c.compound_type,c.person)",
      from: fromCallback50,
      parameters: parameters50,
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions87,
      description: undefined
    },
    mutation_out_complex: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_complex",
      identifier: "main.c.mutation_out_complex(int4,text,int4,c.compound_type,c.person)",
      from: fromCallback51,
      parameters: parameters51,
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions88,
      description: undefined
    },
    mutation_out_complex_setof: {
      executor: executor_mainPgExecutor,
      name: "mutation_out_complex_setof",
      identifier: "main.c.mutation_out_complex_setof(int4,text,int4,c.compound_type,c.person)",
      from: fromCallback52,
      parameters: parameters52,
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord,
      uniques: [],
      isMutation: true,
      extensions: extensions89,
      description: undefined
    },
    person_computed_complex: {
      executor: executor_mainPgExecutor,
      name: "person_computed_complex",
      identifier: "main.c.person_computed_complex(c.person,int4,text,int4,c.compound_type,c.person)",
      from: fromCallback53,
      parameters: parameters53,
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord,
      uniques: [],
      isMutation: false,
      extensions: extensions90,
      description: undefined
    },
    person: registryConfig_pgResources_person_person,
    person_first_post: PgResource.functionResourceOptions(resourceConfig3, options_person_first_post),
    badly_behaved_function: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_badly_behaved_function),
    func_out_table: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_func_out_table),
    func_out_table_setof: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_func_out_table_setof),
    mutation_out_table: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_mutation_out_table),
    mutation_out_table_setof: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_mutation_out_table_setof),
    table_set_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_table_set_mutation),
    table_set_query: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_table_set_query),
    table_set_query_plpgsql: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_table_set_query_plpgsql),
    person_computed_first_arg_inout: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_person_computed_first_arg_inout),
    person_friends: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, options_person_friends),
    person_type_function_connection: PgResource.functionResourceOptions(resourceConfig4, options_person_type_function_connection),
    person_type_function: PgResource.functionResourceOptions(resourceConfig5, options_person_type_function),
    person_type_function_list: PgResource.functionResourceOptions(resourceConfig6, options_person_type_function_list)
  }),
  pgRelations: Object.assign(Object.create(null), {
    compoundKey: Object.assign(Object.create(null), {
      personByMyPersonId1: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_1"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      personByMyPersonId2: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_2"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    leftArm: Object.assign(Object.create(null), {
      personByMyPersonId: {
        localCodec: leftArmCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    person: Object.assign(Object.create(null), {
      personSecretByTheirPersonId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_person_secret_person_secret,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: true,
        description: "This `Person`'s `PersonSecret`.",
        extensions: {
          tags: {
            forwardDescription: "The `Person` this `PersonSecret` belongs to.",
            backwardDescription: "This `Person`'s `PersonSecret`.",
            behavior: []
          }
        }
      },
      leftArmByTheirPersonId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_left_arm_left_arm,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      compoundKeysByTheirPersonId1: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id_1"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      compoundKeysByTheirPersonId2: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id_2"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    personSecret: Object.assign(Object.create(null), {
      personByMyPersonId: {
        localCodec: personSecretCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: "The `Person` this `PersonSecret` belongs to.",
        extensions: {
          tags: {
            forwardDescription: "The `Person` this `PersonSecret` belongs to.",
            backwardDescription: "This `Person`'s `PersonSecret`.",
            behavior: []
          }
        }
      }
    })
  })
});
const pgResource_my_tablePgResource = registry.pgResources["my_table"];
const pgResource_person_secretPgResource = registry.pgResources["person_secret"];
const pgResource_compound_keyPgResource = registry.pgResources["compound_key"];
const pgResource_null_test_recordPgResource = registry.pgResources["null_test_record"];
const pgResource_left_armPgResource = registry.pgResources["left_arm"];
const pgResource_issue756PgResource = registry.pgResources["issue756"];
const pgResource_personPgResource = registry.pgResources["person"];
const nodeIdHandlerByTypeName = Object.assign(Object.create(null), {
  Query: handler,
  MyTable: {
    typeName: "MyTable",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("my_tables", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_my_tablePgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "my_tables";
    }
  },
  PersonSecret: {
    typeName: "PersonSecret",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: "This is deprecated (comment on table c.person_secret).",
    plan($record) {
      return list([constant("person_secrets", false), $record.get("person_id")]);
    },
    getSpec($list) {
      return {
        person_id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_person_secretPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "person_secrets";
    }
  },
  CompoundKey: {
    typeName: "CompoundKey",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("compound_keys", false), $record.get("person_id_1"), $record.get("person_id_2")]);
    },
    getSpec($list) {
      return {
        person_id_1: access($list, [1]),
        person_id_2: access($list, [2])
      };
    },
    get(spec) {
      return pgResource_compound_keyPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "compound_keys";
    }
  },
  NullTestRecord: {
    typeName: "NullTestRecord",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("null_test_records", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_null_test_recordPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "null_test_records";
    }
  },
  LeftArm: {
    typeName: "LeftArm",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("left_arms", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_left_armPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "left_arms";
    }
  },
  Issue756: {
    typeName: "Issue756",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("issue756S", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_issue756PgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "issue756S";
    }
  },
  Person: {
    typeName: "Person",
    codec: nodeIdCodecs_base64JSON_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("people", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: access($list, [1])
      };
    },
    get(spec) {
      return pgResource_personPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "people";
    }
  }
});
const argDetailsSimple = [];
const makeArgs = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_current_user_idPgResource = registry.pgResources["current_user_id"];
const argDetailsSimple2 = [];
const makeArgs2 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple2[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_outPgResource = registry.pgResources["func_out"];
const argDetailsSimple3 = [];
const makeArgs3 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple3[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_setofPgResource = registry.pgResources["func_out_setof"];
const getSelectPlanFromParentAndArgs = ($root, args, _info) => {
  const selectArgs = makeArgs3(args);
  return resource_func_out_setofPgResource.execute(selectArgs);
};
function Query_funcOutSetofPlan($parent, args, info) {
  const $select = getSelectPlanFromParentAndArgs($parent, args, info);
  return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
}
function Query_funcOutSetof_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcOutSetof_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcOutSetof_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcOutSetof_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcOutSetof_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple4 = [];
const makeArgs4 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple4[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_unnamedPgResource = registry.pgResources["func_out_unnamed"];
const argDetailsSimple5 = [];
const makeArgs5 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple5[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_no_args_queryPgResource = registry.pgResources["no_args_query"];
const argDetailsSimple6 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs6 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple6[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_in_outPgResource = registry.pgResources["func_in_out"];
const argDetailsSimple7 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs7 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple7[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_returns_table_one_colPgResource = registry.pgResources["func_returns_table_one_col"];
const getSelectPlanFromParentAndArgs2 = ($root, args, _info) => {
  const selectArgs = makeArgs7(args);
  return resource_func_returns_table_one_colPgResource.execute(selectArgs);
};
function Query_funcReturnsTableOneCol_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcReturnsTableOneCol_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcReturnsTableOneCol_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcReturnsTableOneCol_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcReturnsTableOneCol_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple8 = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}];
const makeArgs8 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple8[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_json_identityPgResource = registry.pgResources["json_identity"];
const argDetailsSimple9 = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs9 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple9[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_jsonb_identityPgResource = registry.pgResources["jsonb_identity"];
const argDetailsSimple10 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs10 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple10[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_in_inoutPgResource = registry.pgResources["func_in_inout"];
const argDetailsSimple11 = [];
const makeArgs11 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple11[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_outPgResource = registry.pgResources["func_out_out"];
const argDetailsSimple12 = [];
const makeArgs12 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple12[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_out_setofPgResource = registry.pgResources["func_out_out_setof"];
const getSelectPlanFromParentAndArgs3 = ($root, args, _info) => {
  const selectArgs = makeArgs12(args);
  return resource_func_out_out_setofPgResource.execute(selectArgs);
};
function Query_funcOutOutSetof_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcOutOutSetof_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcOutOutSetof_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcOutOutSetof_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcOutOutSetof_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple13 = [];
const makeArgs13 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple13[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_out_unnamedPgResource = registry.pgResources["func_out_out_unnamed"];
const argDetailsSimple14 = [];
const makeArgs14 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple14[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_unnamed_out_out_unnamedPgResource = registry.pgResources["func_out_unnamed_out_out_unnamed"];
const argDetailsSimple15 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs15 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple15[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_returns_table_multi_colPgResource = registry.pgResources["func_returns_table_multi_col"];
const getSelectPlanFromParentAndArgs4 = ($root, args, _info) => {
  const selectArgs = makeArgs15(args);
  return resource_func_returns_table_multi_colPgResource.execute(selectArgs);
};
function Query_funcReturnsTableMultiCol_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcReturnsTableMultiCol_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcReturnsTableMultiCol_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcReturnsTableMultiCol_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcReturnsTableMultiCol_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple16 = [{
  graphqlArgName: "x",
  postgresArgName: "x",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "y",
  postgresArgName: "y",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "z",
  postgresArgName: "z",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs16 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 3; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple16[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_int_set_queryPgResource = registry.pgResources["int_set_query"];
const getSelectPlanFromParentAndArgs5 = ($root, args, _info) => {
  const selectArgs = makeArgs16(args);
  return resource_int_set_queryPgResource.execute(selectArgs);
};
function Query_intSetQuery_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_intSetQuery_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_intSetQuery_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_intSetQuery_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_intSetQuery_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple17 = [];
const makeArgs17 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple17[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_search_test_summariesPgResource = registry.pgResources["search_test_summaries"];
function Query_searchTestSummariesList_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_searchTestSummariesList_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
const argDetailsSimple18 = [];
const makeArgs18 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple18[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_return_table_without_grantsPgResource = registry.pgResources["return_table_without_grants"];
const argDetailsSimple19 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.boolean,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.varchar,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "d",
  postgresArgName: "d",
  pgCodec: int4ArrayCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "e",
  postgresArgName: "e",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "f",
  postgresArgName: "f",
  pgCodec: floatrangeCodec,
  required: true,
  fetcher: null
}];
const makeArgs19 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 6; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple19[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_types_queryPgResource = registry.pgResources["types_query"];
const argDetailsSimple20 = [{
  graphqlArgName: "i1",
  postgresArgName: "i1",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs20 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple20[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_out_compound_typePgResource = registry.pgResources["func_out_out_compound_type"];
const argDetailsSimple21 = [{
  graphqlArgName: "leftArmId",
  postgresArgName: "left_arm_id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "postId",
  postgresArgName: "post_id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "txt",
  postgresArgName: "txt",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs21 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 3; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple21[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_query_output_two_rowsPgResource = registry.pgResources["query_output_two_rows"];
const argDetailsSimple22 = [];
const makeArgs22 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple22[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_compound_type_set_queryPgResource = registry.pgResources["compound_type_set_query"];
const getSelectPlanFromParentAndArgs6 = ($root, args, _info) => {
  const selectArgs = makeArgs22(args);
  return resource_compound_type_set_queryPgResource.execute(selectArgs);
};
function Query_compoundTypeSetQuery_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_compoundTypeSetQuery_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_compoundTypeSetQuery_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_compoundTypeSetQuery_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_compoundTypeSetQuery_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple23 = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs23 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple23[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_table_queryPgResource = registry.pgResources["table_query"];
const argDetailsSimple24 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs24 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple24[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_complexPgResource = registry.pgResources["func_out_complex"];
const argDetailsSimple25 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs25 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple25[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_complex_setofPgResource = registry.pgResources["func_out_complex_setof"];
const getSelectPlanFromParentAndArgs7 = ($root, args, _info) => {
  const selectArgs = makeArgs25(args);
  return resource_func_out_complex_setofPgResource.execute(selectArgs);
};
function Query_funcOutComplexSetof_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcOutComplexSetof_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcOutComplexSetof_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcOutComplexSetof_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcOutComplexSetof_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple26 = [];
const makeArgs26 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple26[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_badly_behaved_functionPgResource = registry.pgResources["badly_behaved_function"];
const getSelectPlanFromParentAndArgs8 = ($root, args, _info) => {
  const selectArgs = makeArgs26(args);
  return resource_badly_behaved_functionPgResource.execute(selectArgs);
};
function Query_badlyBehavedFunction_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_badlyBehavedFunction_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_badlyBehavedFunction_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_badlyBehavedFunction_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_badlyBehavedFunction_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple27 = [];
const makeArgs27 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple27[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_tablePgResource = registry.pgResources["func_out_table"];
const argDetailsSimple28 = [];
const makeArgs28 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple28[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_func_out_table_setofPgResource = registry.pgResources["func_out_table_setof"];
const getSelectPlanFromParentAndArgs9 = ($root, args, _info) => {
  const selectArgs = makeArgs28(args);
  return resource_func_out_table_setofPgResource.execute(selectArgs);
};
function Query_funcOutTableSetof_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_funcOutTableSetof_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_funcOutTableSetof_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_funcOutTableSetof_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_funcOutTableSetof_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple29 = [];
const makeArgs29 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple29[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_table_set_queryPgResource = registry.pgResources["table_set_query"];
const getSelectPlanFromParentAndArgs10 = ($root, args, _info) => {
  const selectArgs = makeArgs29(args);
  return resource_table_set_queryPgResource.execute(selectArgs);
};
function Query_tableSetQuery_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_tableSetQuery_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_tableSetQuery_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_tableSetQuery_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_tableSetQuery_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const applyOrderToPlan = ($select, $value, TableOrderByType) => {
  const val = $value.eval();
  if (val == null) {
    return;
  }
  if (!Array.isArray(val)) {
    throw new Error("Invalid!");
  }
  val.forEach(order => {
    const config = getEnumValueConfig(TableOrderByType, order);
    const plan = config?.extensions?.grafast?.applyPlan;
    if (typeof plan !== "function") {
      console.error(`Internal server error: invalid orderBy configuration: expected function, but received ${inspect(plan)}`);
      throw new SafeError("Internal server error: invalid orderBy configuration");
    }
    plan($select);
  });
};
const argDetailsSimple30 = [];
const makeArgs30 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple30[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_table_set_query_plpgsqlPgResource = registry.pgResources["table_set_query_plpgsql"];
const getSelectPlanFromParentAndArgs11 = ($root, args, _info) => {
  const selectArgs = makeArgs30(args);
  return resource_table_set_query_plpgsqlPgResource.execute(selectArgs);
};
function Query_tableSetQueryPlpgsql_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_tableSetQueryPlpgsql_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_tableSetQueryPlpgsql_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_tableSetQueryPlpgsql_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_tableSetQueryPlpgsql_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function specForHandler(handler) {
  function spec(nodeId) {
    // We only want to return the specifier if it matches
    // this handler; otherwise return null.
    try {
      const specifier = handler.codec.decode(nodeId);
      if (handler.match(specifier)) {
        return specifier;
      }
    } catch {
      // Ignore errors
    }
    return null;
  }
  spec.displayName = `specifier_${handler.typeName}_${handler.codec.name}`;
  spec.isSyncAndSafe = true; // Optimization
  return spec;
}
const fetcher = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.MyTable);
const fetcher2 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.PersonSecret);
const fetcher3 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.CompoundKey);
const fetcher4 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.NullTestRecord);
const fetcher5 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.LeftArm);
const fetcher6 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.Issue756);
const fetcher7 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.Person);
function Query_allMyTables_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allMyTables_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allMyTables_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allMyTables_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allMyTables_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allPersonSecrets_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allPersonSecrets_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allPersonSecrets_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allPersonSecrets_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allPersonSecrets_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allCompoundKeys_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allCompoundKeys_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allCompoundKeys_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allCompoundKeys_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allCompoundKeys_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allNullTestRecords_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allNullTestRecords_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allNullTestRecords_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allNullTestRecords_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allNullTestRecords_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const resource_edge_casePgResource = registry.pgResources["edge_case"];
function Query_allEdgeCases_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allEdgeCases_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allEdgeCases_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allEdgeCases_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allEdgeCases_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allLeftArms_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allLeftArms_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allLeftArms_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allLeftArms_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allLeftArms_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allIssue756S_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allIssue756S_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allIssue756S_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allIssue756S_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allIssue756S_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Query_allPeople_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Query_allPeople_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Query_allPeople_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Query_allPeople_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Query_allPeople_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function hasRecord($row) {
  return "record" in $row && typeof $row.record === "function";
}
const argDetailsSimple31 = [];
const makeArgs31 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple31[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_outPgResource = registry.pgResources["person_computed_out"];
const argDetailsSimple32 = [];
const makeArgs32 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple32[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_first_namePgResource = registry.pgResources["person_first_name"];
const argDetailsSimple33 = [];
const makeArgs33 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple33[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_out_outPgResource = registry.pgResources["person_computed_out_out"];
const argDetailsSimple34 = [{
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs34 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple34[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_inoutPgResource = registry.pgResources["person_computed_inout"];
const argDetailsSimple35 = [{
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs35 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple35[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_inout_outPgResource = registry.pgResources["person_computed_inout_out"];
const argDetailsSimple36 = [{
  graphqlArgName: "email",
  postgresArgName: "email",
  pgCodec: emailCodec,
  required: true,
  fetcher: null
}];
const makeArgs36 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple36[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_existsPgResource = registry.pgResources["person_exists"];
const argDetailsSimple37 = [];
const makeArgs37 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple37[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_first_arg_inout_outPgResource = registry.pgResources["person_computed_first_arg_inout_out"];
const argDetailsSimple38 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs38 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple38[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_complexPgResource = registry.pgResources["person_computed_complex"];
const argDetailsSimple39 = [];
const makeArgs39 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple39[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_first_postPgResource = registry.pgResources["person_first_post"];
const argDetailsSimple40 = [];
const makeArgs40 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple40[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_computed_first_arg_inoutPgResource = registry.pgResources["person_computed_first_arg_inout"];
const argDetailsSimple41 = [];
const makeArgs41 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple41[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_friendsPgResource = registry.pgResources["person_friends"];
const getSelectPlanFromParentAndArgs12 = ($in, args, _info) => {
  if (!hasRecord($in)) {
    throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
  }
  const extraSelectArgs = makeArgs41(args);
  /**
   * An optimisation - if all our dependencies are
   * compatible with the expression's class plan then we
   * can inline ourselves into that, otherwise we must
   * issue the query separately.
   */
  const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
  const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
  const selectArgs = [{
    step: $row.record()
  }, ...extraSelectArgs];
  if (resource_person_friendsPgResource.isUnique && !resource_person_friendsPgResource.codec.attributes && typeof resource_person_friendsPgResource.from === "function") {
    // This is a scalar computed attribute, let's inline the expression
    const placeholders = selectArgs.map((arg, i) => {
      if (i === 0) {
        return $row.getClassStep().alias;
      } else if ("pgCodec" in arg && arg.pgCodec) {
        return $row.placeholder(arg.step, arg.pgCodec);
      } else {
        return $row.placeholder(arg.step);
      }
    });
    return pgClassExpression($row, resource_person_friendsPgResource.codec)`${resource_person_friendsPgResource.from(...placeholders.map(placeholder => ({
      placeholder
    })))}`;
  }
  // PERF: or here, if scalar add select to `$row`?
  return resource_person_friendsPgResource.execute(selectArgs);
};
function Person_friends_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Person_friends_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Person_friends_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Person_friends_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Person_friends_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple42 = [];
const makeArgs42 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple42[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_type_function_connectionPgResource = registry.pgResources["person_type_function_connection"];
const getSelectPlanFromParentAndArgs13 = ($in, args, _info) => {
  if (!hasRecord($in)) {
    throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
  }
  const extraSelectArgs = makeArgs42(args);
  /**
   * An optimisation - if all our dependencies are
   * compatible with the expression's class plan then we
   * can inline ourselves into that, otherwise we must
   * issue the query separately.
   */
  const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
  const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
  const selectArgs = [{
    step: $row.record()
  }, ...extraSelectArgs];
  if (resource_person_type_function_connectionPgResource.isUnique && !resource_person_type_function_connectionPgResource.codec.attributes && typeof resource_person_type_function_connectionPgResource.from === "function") {
    // This is a scalar computed attribute, let's inline the expression
    const placeholders = selectArgs.map((arg, i) => {
      if (i === 0) {
        return $row.getClassStep().alias;
      } else if ("pgCodec" in arg && arg.pgCodec) {
        return $row.placeholder(arg.step, arg.pgCodec);
      } else {
        return $row.placeholder(arg.step);
      }
    });
    return pgClassExpression($row, resource_person_type_function_connectionPgResource.codec)`${resource_person_type_function_connectionPgResource.from(...placeholders.map(placeholder => ({
      placeholder
    })))}`;
  }
  // PERF: or here, if scalar add select to `$row`?
  return resource_person_type_function_connectionPgResource.execute(selectArgs);
};
function Person_typeFunctionConnection_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Person_typeFunctionConnection_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Person_typeFunctionConnection_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Person_typeFunctionConnection_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Person_typeFunctionConnection_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const argDetailsSimple43 = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs43 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple43[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_type_functionPgResource = registry.pgResources["person_type_function"];
const argDetailsSimple44 = [];
const makeArgs44 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple44[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_person_type_function_listPgResource = registry.pgResources["person_type_function_list"];
const resource_frmcdc_wrappedUrlPgResource = registry.pgResources["frmcdc_wrappedUrl"];
function Person_compoundKeysByPersonId1_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Person_compoundKeysByPersonId1_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Person_compoundKeysByPersonId1_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Person_compoundKeysByPersonId1_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Person_compoundKeysByPersonId1_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
function Person_compoundKeysByPersonId2_first_applyPlan(_, $connection, arg) {
  $connection.setFirst(arg.getRaw());
}
function Person_compoundKeysByPersonId2_last_applyPlan(_, $connection, val) {
  $connection.setLast(val.getRaw());
}
function Person_compoundKeysByPersonId2_offset_applyPlan(_, $connection, val) {
  $connection.setOffset(val.getRaw());
}
function Person_compoundKeysByPersonId2_before_applyPlan(_, $connection, val) {
  $connection.setBefore(val.getRaw());
}
function Person_compoundKeysByPersonId2_after_applyPlan(_, $connection, val) {
  $connection.setAfter(val.getRaw());
}
const resource_frmcdc_compoundTypePgResource = registry.pgResources["frmcdc_compoundType"];
const argDetailsSimple45 = [];
const makeArgs45 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple45[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_compound_type_computed_fieldPgResource = registry.pgResources["compound_type_computed_field"];
function Interval_secondsPlan($r) {
  return access($r, ["seconds"]);
}
function Interval_minutesPlan($r) {
  return access($r, ["minutes"]);
}
function Interval_hoursPlan($r) {
  return access($r, ["hours"]);
}
function Interval_daysPlan($r) {
  return access($r, ["days"]);
}
function Interval_monthsPlan($r) {
  return access($r, ["months"]);
}
function Interval_yearsPlan($r) {
  return access($r, ["years"]);
}
const resource_frmcdc_comptypePgResource = registry.pgResources["frmcdc_comptype"];
function PeopleConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function PeopleConnection_edgesPlan($connection) {
  return $connection.edges();
}
function PeopleConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function PageInfo_hasNextPagePlan($pageInfo) {
  return $pageInfo.hasNextPage();
}
function PageInfo_hasPreviousPagePlan($pageInfo) {
  return $pageInfo.hasPreviousPage();
}
function TypesConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function TypesConnection_edgesPlan($connection) {
  return $connection.edges();
}
function TypesConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
const resource_frmcdc_nestedCompoundTypePgResource = registry.pgResources["frmcdc_nestedCompoundType"];
function CompoundKeysConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function CompoundKeysConnection_edgesPlan($connection) {
  return $connection.edges();
}
function CompoundKeysConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function FuncOutSetofConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function FuncOutSetofConnection_edgesPlan($connection) {
  return $connection.edges();
}
function FuncOutSetofConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function FuncReturnsTableOneColConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function FuncReturnsTableOneColConnection_edgesPlan($connection) {
  return $connection.edges();
}
function FuncReturnsTableOneColConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function FuncOutOutSetofConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function FuncOutOutSetofConnection_edgesPlan($connection) {
  return $connection.edges();
}
function FuncOutOutSetofConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function FuncReturnsTableMultiColConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function FuncReturnsTableMultiColConnection_edgesPlan($connection) {
  return $connection.edges();
}
function FuncReturnsTableMultiColConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function IntSetQueryConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function IntSetQueryConnection_edgesPlan($connection) {
  return $connection.edges();
}
function IntSetQueryConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
const resource_frmcdc_postPgResource = registry.pgResources["frmcdc_post"];
function CompoundTypesConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function CompoundTypesConnection_edgesPlan($connection) {
  return $connection.edges();
}
function CompoundTypesConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function FuncOutComplexSetofConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function FuncOutComplexSetofConnection_edgesPlan($connection) {
  return $connection.edges();
}
function FuncOutComplexSetofConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function MyTablesConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function MyTablesConnection_edgesPlan($connection) {
  return $connection.edges();
}
function MyTablesConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function PersonSecretsConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function PersonSecretsConnection_edgesPlan($connection) {
  return $connection.edges();
}
function PersonSecretsConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function NullTestRecordsConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function NullTestRecordsConnection_edgesPlan($connection) {
  return $connection.edges();
}
function NullTestRecordsConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function EdgeCasesConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function EdgeCasesConnection_edgesPlan($connection) {
  return $connection.edges();
}
function EdgeCasesConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
const argDetailsSimple46 = [];
const makeArgs46 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple46[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_edge_case_computedPgResource = registry.pgResources["edge_case_computed"];
function LeftArmsConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function LeftArmsConnection_edgesPlan($connection) {
  return $connection.edges();
}
function LeftArmsConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
function Issue756SConnection_nodesPlan($connection) {
  return $connection.nodes();
}
function Issue756SConnection_edgesPlan($connection) {
  return $connection.edges();
}
function Issue756SConnection_pageInfoPlan($connection) {
  // TYPES: why is this a TypeScript issue without the 'any'?
  return $connection.pageInfo();
}
const argDetailsSimple47 = [];
const makeArgs47 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple47[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_outPgResource = registry.pgResources["mutation_out"];
function Mutation_mutationOut_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple48 = [];
const makeArgs48 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple48[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_setofPgResource = registry.pgResources["mutation_out_setof"];
function Mutation_mutationOutSetof_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple49 = [];
const makeArgs49 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple49[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_unnamedPgResource = registry.pgResources["mutation_out_unnamed"];
function Mutation_mutationOutUnnamed_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple50 = [];
const makeArgs50 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple50[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_no_args_mutationPgResource = registry.pgResources["no_args_mutation"];
function Mutation_noArgsMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple51 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs51 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple51[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_in_outPgResource = registry.pgResources["mutation_in_out"];
function Mutation_mutationInOut_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple52 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs52 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple52[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_returns_table_one_colPgResource = registry.pgResources["mutation_returns_table_one_col"];
function Mutation_mutationReturnsTableOneCol_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple53 = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}];
const makeArgs53 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple53[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_json_identity_mutationPgResource = registry.pgResources["json_identity_mutation"];
function Mutation_jsonIdentityMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple54 = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs54 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple54[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_jsonb_identity_mutationPgResource = registry.pgResources["jsonb_identity_mutation"];
function Mutation_jsonbIdentityMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple55 = [{
  graphqlArgName: "_theJson",
  postgresArgName: "_the_json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs55 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple55[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_jsonb_identity_mutation_plpgsqlPgResource = registry.pgResources["jsonb_identity_mutation_plpgsql"];
function Mutation_jsonbIdentityMutationPlpgsql_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple56 = [{
  graphqlArgName: "_theJson",
  postgresArgName: "_the_json",
  pgCodec: TYPES.jsonb,
  required: false,
  fetcher: null
}];
const makeArgs56 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple56[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_jsonb_identity_mutation_plpgsql_with_defaultPgResource = registry.pgResources["jsonb_identity_mutation_plpgsql_with_default"];
function Mutation_jsonbIdentityMutationPlpgsqlWithDefault_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple57 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs57 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple57[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_in_inoutPgResource = registry.pgResources["mutation_in_inout"];
function Mutation_mutationInInout_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple58 = [];
const makeArgs58 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple58[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_outPgResource = registry.pgResources["mutation_out_out"];
function Mutation_mutationOutOut_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple59 = [];
const makeArgs59 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple59[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_out_setofPgResource = registry.pgResources["mutation_out_out_setof"];
function Mutation_mutationOutOutSetof_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple60 = [];
const makeArgs60 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple60[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_out_unnamedPgResource = registry.pgResources["mutation_out_out_unnamed"];
function Mutation_mutationOutOutUnnamed_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple61 = [{
  graphqlArgName: "x",
  postgresArgName: "x",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "y",
  postgresArgName: "y",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "z",
  postgresArgName: "z",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs61 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 3; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple61[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_int_set_mutationPgResource = registry.pgResources["int_set_mutation"];
function Mutation_intSetMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple62 = [];
const makeArgs62 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple62[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_unnamed_out_out_unnamedPgResource = registry.pgResources["mutation_out_unnamed_out_out_unnamed"];
function Mutation_mutationOutUnnamedOutOutUnnamed_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple63 = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs63 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple63[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_returns_table_multi_colPgResource = registry.pgResources["mutation_returns_table_multi_col"];
function Mutation_mutationReturnsTableMultiCol_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple64 = [{
  graphqlArgName: "leftArm",
  postgresArgName: "left_arm",
  pgCodec: leftArmCodec,
  required: true,
  fetcher: null
}];
const makeArgs64 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple64[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_left_arm_identityPgResource = registry.pgResources["left_arm_identity"];
function Mutation_leftArmIdentity_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple65 = [];
const makeArgs65 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple65[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_issue756_mutationPgResource = registry.pgResources["issue756_mutation"];
function Mutation_issue756Mutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple66 = [];
const makeArgs66 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple66[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_issue756_set_mutationPgResource = registry.pgResources["issue756_set_mutation"];
function Mutation_issue756SetMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple67 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.boolean,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.varchar,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "d",
  postgresArgName: "d",
  pgCodec: int4ArrayCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "e",
  postgresArgName: "e",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "f",
  postgresArgName: "f",
  pgCodec: floatrangeCodec,
  required: true,
  fetcher: null
}];
const makeArgs67 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 6; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple67[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_types_mutationPgResource = registry.pgResources["types_mutation"];
function Mutation_typesMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple68 = [{
  graphqlArgName: "i1",
  postgresArgName: "i1",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs68 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple68[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_out_compound_typePgResource = registry.pgResources["mutation_out_out_compound_type"];
function Mutation_mutationOutOutCompoundType_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple69 = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs69 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 1; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple69[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_table_mutationPgResource = registry.pgResources["table_mutation"];
function Mutation_tableMutation_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple70 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs70 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple70[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_complexPgResource = registry.pgResources["mutation_out_complex"];
function Mutation_mutationOutComplex_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple71 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs71 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 2; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple71[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_complex_setofPgResource = registry.pgResources["mutation_out_complex_setof"];
function Mutation_mutationOutComplexSetof_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple72 = [];
const makeArgs72 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple72[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_tablePgResource = registry.pgResources["mutation_out_table"];
function Mutation_mutationOutTable_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple73 = [];
const makeArgs73 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple73[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_mutation_out_table_setofPgResource = registry.pgResources["mutation_out_table_setof"];
function Mutation_mutationOutTableSetof_input_applyPlan(_, $object) {
  return $object;
}
const argDetailsSimple74 = [];
const makeArgs74 = (args, path = []) => {
  const selectArgs = [];
  let skipped = false;
  for (let i = 0; i < 0; i++) {
    const {
      graphqlArgName,
      postgresArgName,
      pgCodec,
      required,
      fetcher
    } = argDetailsSimple74[i];
    const $raw = args.getRaw([...path, graphqlArgName]);
    let step;
    if ($raw.evalIs(undefined)) {
      if (!required && i >= 0 - 1) {
        skipped = true;
        continue;
      } else {
        step = constant(null);
      }
    } else if (fetcher) {
      step = fetcher(args.get([...path, graphqlArgName])).record();
    } else {
      step = args.get([...path, graphqlArgName]);
    }
    if (skipped) {
      const name = postgresArgName;
      if (!name) {
        throw new Error("GraphileInternalError<6f9e0fbc-6c73-4811-a7cf-c2bc2b3c0946>: This should not be possible since we asserted that allArgsAreNamed");
      }
      selectArgs.push({
        step,
        pgCodec,
        name
      });
    } else {
      selectArgs.push({
        step,
        pgCodec
      });
    }
  }
  return selectArgs;
};
const resource_table_set_mutationPgResource = registry.pgResources["table_set_mutation"];
function Mutation_tableSetMutation_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createMyTable_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createPersonSecret_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createCompoundKey_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createNullTestRecord_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createEdgeCase_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createLeftArm_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createIssue756_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_createPerson_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.MyTable, $nodeId);
};
function Mutation_updateMyTable_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateMyTableByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs2 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.PersonSecret, $nodeId);
};
function Mutation_updatePersonSecret_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updatePersonSecretByPersonId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs3 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.CompoundKey, $nodeId);
};
function Mutation_updateCompoundKey_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateCompoundKeyByPersonId1AndPersonId2_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs4 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.NullTestRecord, $nodeId);
};
function Mutation_updateNullTestRecord_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateNullTestRecordByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs5 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.LeftArm, $nodeId);
};
function Mutation_updateLeftArm_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateLeftArmByRowId_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateLeftArmByPersonId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs6 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.Issue756, $nodeId);
};
function Mutation_updateIssue756_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updateIssue756ByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs7 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.Person, $nodeId);
};
function Mutation_updatePerson_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updatePersonByRowId_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_updatePersonByEmail_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs8 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.MyTable, $nodeId);
};
function Mutation_deleteMyTable_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteMyTableByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs9 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.PersonSecret, $nodeId);
};
function Mutation_deletePersonSecret_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deletePersonSecretByPersonId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs10 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.CompoundKey, $nodeId);
};
function Mutation_deleteCompoundKey_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteCompoundKeyByPersonId1AndPersonId2_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs11 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.NullTestRecord, $nodeId);
};
function Mutation_deleteNullTestRecord_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteNullTestRecordByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs12 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.LeftArm, $nodeId);
};
function Mutation_deleteLeftArm_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteLeftArmByRowId_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteLeftArmByPersonId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs13 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.Issue756, $nodeId);
};
function Mutation_deleteIssue756_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deleteIssue756ByRowId_input_applyPlan(_, $object) {
  return $object;
}
const specFromArgs14 = args => {
  const $nodeId = args.get(["input", "id"]);
  return specFromNodeId(nodeIdHandlerByTypeName.Person, $nodeId);
};
function Mutation_deletePerson_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deletePersonByRowId_input_applyPlan(_, $object) {
  return $object;
}
function Mutation_deletePersonByEmail_input_applyPlan(_, $object) {
  return $object;
}
function MutationOutPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutPayload_queryPlan() {
  return rootValue();
}
function MutationOutInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutSetofPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutSetofPayload_queryPlan() {
  return rootValue();
}
function MutationOutSetofInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutUnnamedPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutUnnamedPayload_queryPlan() {
  return rootValue();
}
function MutationOutUnnamedInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function NoArgsMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function NoArgsMutationPayload_queryPlan() {
  return rootValue();
}
function NoArgsMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationInOutPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationInOutPayload_queryPlan() {
  return rootValue();
}
function MutationInOutInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationReturnsTableOneColPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationReturnsTableOneColPayload_queryPlan() {
  return rootValue();
}
function MutationReturnsTableOneColInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function JsonIdentityMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function JsonIdentityMutationPayload_queryPlan() {
  return rootValue();
}
function JsonIdentityMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function JsonbIdentityMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function JsonbIdentityMutationPayload_queryPlan() {
  return rootValue();
}
function JsonbIdentityMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function JsonbIdentityMutationPlpgsqlPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function JsonbIdentityMutationPlpgsqlPayload_queryPlan() {
  return rootValue();
}
function JsonbIdentityMutationPlpgsqlInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function JsonbIdentityMutationPlpgsqlWithDefaultPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function JsonbIdentityMutationPlpgsqlWithDefaultPayload_queryPlan() {
  return rootValue();
}
function JsonbIdentityMutationPlpgsqlWithDefaultInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationInInoutPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationInInoutPayload_queryPlan() {
  return rootValue();
}
function MutationInInoutInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutOutPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutOutPayload_queryPlan() {
  return rootValue();
}
function MutationOutOutInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutOutSetofPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutOutSetofPayload_queryPlan() {
  return rootValue();
}
function MutationOutOutSetofInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutOutUnnamedPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutOutUnnamedPayload_queryPlan() {
  return rootValue();
}
function MutationOutOutUnnamedInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function IntSetMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function IntSetMutationPayload_queryPlan() {
  return rootValue();
}
function IntSetMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutUnnamedOutOutUnnamedPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutUnnamedOutOutUnnamedPayload_queryPlan() {
  return rootValue();
}
function MutationOutUnnamedOutOutUnnamedInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationReturnsTableMultiColPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationReturnsTableMultiColPayload_queryPlan() {
  return rootValue();
}
function MutationReturnsTableMultiColInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function LeftArmIdentityPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function LeftArmIdentityPayload_queryPlan() {
  return rootValue();
}
function LeftArmIdentityInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function Issue756MutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function Issue756MutationPayload_queryPlan() {
  return rootValue();
}
function Issue756MutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function Issue756SetMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function Issue756SetMutationPayload_queryPlan() {
  return rootValue();
}
function Issue756SetMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function TypesMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function TypesMutationPayload_queryPlan() {
  return rootValue();
}
function TypesMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutOutCompoundTypePayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutOutCompoundTypePayload_queryPlan() {
  return rootValue();
}
function MutationOutOutCompoundTypeInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function TableMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function TableMutationPayload_queryPlan() {
  return rootValue();
}
function TableMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutComplexPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutComplexPayload_queryPlan() {
  return rootValue();
}
function MutationOutComplexInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutComplexSetofPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutComplexSetofPayload_queryPlan() {
  return rootValue();
}
function MutationOutComplexSetofInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutTablePayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutTablePayload_queryPlan() {
  return rootValue();
}
function MutationOutTableInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function MutationOutTableSetofPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function MutationOutTableSetofPayload_queryPlan() {
  return rootValue();
}
function MutationOutTableSetofInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function TableSetMutationPayload_clientMutationIdPlan($object) {
  return $object.getStepForKey("clientMutationId", true) ?? constant(undefined);
}
function TableSetMutationPayload_queryPlan() {
  return rootValue();
}
function TableSetMutationInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateMyTablePayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateMyTablePayload_myTablePlan($object) {
  return $object.get("result");
}
function CreateMyTablePayload_queryPlan() {
  return rootValue();
}
function CreateMyTableInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateMyTableInput_myTable_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreatePersonSecretPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreatePersonSecretPayload_personSecretPlan($object) {
  return $object.get("result");
}
function CreatePersonSecretPayload_queryPlan() {
  return rootValue();
}
function CreatePersonSecretInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreatePersonSecretInput_personSecret_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreateCompoundKeyPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateCompoundKeyPayload_compoundKeyPlan($object) {
  return $object.get("result");
}
function CreateCompoundKeyPayload_queryPlan() {
  return rootValue();
}
function CreateCompoundKeyInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateCompoundKeyInput_compoundKey_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreateNullTestRecordPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateNullTestRecordPayload_nullTestRecordPlan($object) {
  return $object.get("result");
}
function CreateNullTestRecordPayload_queryPlan() {
  return rootValue();
}
function CreateNullTestRecordInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateNullTestRecordInput_nullTestRecord_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreateEdgeCasePayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateEdgeCasePayload_edgeCasePlan($object) {
  return $object.get("result");
}
function CreateEdgeCasePayload_queryPlan() {
  return rootValue();
}
function CreateEdgeCaseInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateEdgeCaseInput_edgeCase_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreateLeftArmPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateLeftArmPayload_leftArmPlan($object) {
  return $object.get("result");
}
function CreateLeftArmPayload_queryPlan() {
  return rootValue();
}
function CreateLeftArmInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateLeftArmInput_leftArm_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreateIssue756Payload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreateIssue756Payload_issue756Plan($object) {
  return $object.get("result");
}
function CreateIssue756Payload_queryPlan() {
  return rootValue();
}
function CreateIssue756Input_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreateIssue756Input_issue756_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function CreatePersonPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function CreatePersonPayload_personPlan($object) {
  return $object.get("result");
}
function CreatePersonPayload_queryPlan() {
  return rootValue();
}
function CreatePersonInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function CreatePersonInput_person_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateMyTablePayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdateMyTablePayload_myTablePlan($object) {
  return $object.get("result");
}
function UpdateMyTablePayload_queryPlan() {
  return rootValue();
}
function UpdateMyTableInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateMyTableInput_myTablePatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateMyTableByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateMyTableByRowIdInput_myTablePatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdatePersonSecretPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdatePersonSecretPayload_personSecretPlan($object) {
  return $object.get("result");
}
function UpdatePersonSecretPayload_queryPlan() {
  return rootValue();
}
function UpdatePersonSecretInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdatePersonSecretInput_personSecretPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdatePersonSecretByPersonIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdatePersonSecretByPersonIdInput_personSecretPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateCompoundKeyPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdateCompoundKeyPayload_compoundKeyPlan($object) {
  return $object.get("result");
}
function UpdateCompoundKeyPayload_queryPlan() {
  return rootValue();
}
function UpdateCompoundKeyInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateCompoundKeyInput_compoundKeyPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateCompoundKeyByPersonId1AndPersonId2Input_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateCompoundKeyByPersonId1AndPersonId2Input_compoundKeyPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateNullTestRecordPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdateNullTestRecordPayload_nullTestRecordPlan($object) {
  return $object.get("result");
}
function UpdateNullTestRecordPayload_queryPlan() {
  return rootValue();
}
function UpdateNullTestRecordInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateNullTestRecordInput_nullTestRecordPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateNullTestRecordByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateNullTestRecordByRowIdInput_nullTestRecordPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateLeftArmPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdateLeftArmPayload_leftArmPlan($object) {
  return $object.get("result");
}
function UpdateLeftArmPayload_queryPlan() {
  return rootValue();
}
function UpdateLeftArmInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateLeftArmInput_leftArmPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateLeftArmByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateLeftArmByRowIdInput_leftArmPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateLeftArmByPersonIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateLeftArmByPersonIdInput_leftArmPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateIssue756Payload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdateIssue756Payload_issue756Plan($object) {
  return $object.get("result");
}
function UpdateIssue756Payload_queryPlan() {
  return rootValue();
}
function UpdateIssue756Input_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateIssue756Input_issue756Patch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdateIssue756ByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdateIssue756ByRowIdInput_issue756Patch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdatePersonPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function UpdatePersonPayload_personPlan($object) {
  return $object.get("result");
}
function UpdatePersonPayload_queryPlan() {
  return rootValue();
}
function UpdatePersonInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdatePersonInput_personPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdatePersonByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdatePersonByRowIdInput_personPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function UpdatePersonByEmailInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function UpdatePersonByEmailInput_personPatch_applyPlan($object) {
  const $record = $object.getStepForKey("result");
  return $record.setPlan();
}
function DeleteMyTablePayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeleteMyTablePayload_myTablePlan($object) {
  return $object.get("result");
}
function DeleteMyTablePayload_queryPlan() {
  return rootValue();
}
function DeleteMyTableInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteMyTableByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeletePersonSecretPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeletePersonSecretPayload_personSecretPlan($object) {
  return $object.get("result");
}
function DeletePersonSecretPayload_queryPlan() {
  return rootValue();
}
function DeletePersonSecretInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeletePersonSecretByPersonIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteCompoundKeyPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeleteCompoundKeyPayload_compoundKeyPlan($object) {
  return $object.get("result");
}
function DeleteCompoundKeyPayload_queryPlan() {
  return rootValue();
}
function DeleteCompoundKeyInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteCompoundKeyByPersonId1AndPersonId2Input_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteNullTestRecordPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeleteNullTestRecordPayload_nullTestRecordPlan($object) {
  return $object.get("result");
}
function DeleteNullTestRecordPayload_queryPlan() {
  return rootValue();
}
function DeleteNullTestRecordInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteNullTestRecordByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteLeftArmPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeleteLeftArmPayload_leftArmPlan($object) {
  return $object.get("result");
}
function DeleteLeftArmPayload_queryPlan() {
  return rootValue();
}
function DeleteLeftArmInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteLeftArmByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteLeftArmByPersonIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteIssue756Payload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeleteIssue756Payload_issue756Plan($object) {
  return $object.get("result");
}
function DeleteIssue756Payload_queryPlan() {
  return rootValue();
}
function DeleteIssue756Input_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeleteIssue756ByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeletePersonPayload_clientMutationIdPlan($mutation) {
  return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
}
function DeletePersonPayload_personPlan($object) {
  return $object.get("result");
}
function DeletePersonPayload_queryPlan() {
  return rootValue();
}
function DeletePersonInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeletePersonByRowIdInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
function DeletePersonByEmailInput_clientMutationId_applyPlan($input, val) {
  $input.set("clientMutationId", val.get());
}
export const typeDefs = /* GraphQL */`"""The root query type which gives access points into the data universe."""
type Query implements Node {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """
  The root query type must be a \`Node\` to work well with Relay 1 mutations. This just resolves to \`query\`.
  """
  id: ID!

  """Fetches an object given its globally unique \`ID\`."""
  node(
    """The globally unique \`ID\`."""
    id: ID!
  ): Node

  """Get a single \`MyTable\`."""
  myTableByRowId(rowId: Int!): MyTable

  """Get a single \`PersonSecret\`."""
  personSecretByPersonId(personId: Int!): PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Get a single \`CompoundKey\`."""
  compoundKeyByPersonId1AndPersonId2(personId1: Int!, personId2: Int!): CompoundKey

  """Get a single \`NullTestRecord\`."""
  nullTestRecordByRowId(rowId: Int!): NullTestRecord

  """Get a single \`LeftArm\`."""
  leftArmByRowId(rowId: Int!): LeftArm

  """Get a single \`LeftArm\`."""
  leftArmByPersonId(personId: Int!): LeftArm

  """Get a single \`Issue756\`."""
  issue756ByRowId(rowId: Int!): Issue756

  """Get a single \`Person\`."""
  personByRowId(rowId: Int!): Person

  """Get a single \`Person\`."""
  personByEmail(email: Email!): Person
  currentUserId: Int
  funcOut: Int

  """Reads and enables pagination through a set of \`Int4\`."""
  funcOutSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutSetofConnection
  funcOutUnnamed: Int
  noArgsQuery: Int
  funcInOut(i: Int): Int

  """Reads and enables pagination through a set of \`Int4\`."""
  funcReturnsTableOneCol(
    i: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncReturnsTableOneColConnection
  jsonIdentity(json: JSON): JSON
  jsonbIdentity(json: JSON): JSON
  funcInInout(i: Int, ino: Int): Int
  funcOutOut: FuncOutOutRecord

  """Reads and enables pagination through a set of \`FuncOutOutSetofRecord\`."""
  funcOutOutSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutOutSetofConnection
  funcOutOutUnnamed: FuncOutOutUnnamedRecord
  funcOutUnnamedOutOutUnnamed: FuncOutUnnamedOutOutUnnamedRecord

  """
  Reads and enables pagination through a set of \`FuncReturnsTableMultiColRecord\`.
  """
  funcReturnsTableMultiCol(
    i: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncReturnsTableMultiColConnection

  """Reads and enables pagination through a set of \`Int4\`."""
  intSetQuery(
    x: Int
    y: Int
    z: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): IntSetQueryConnection
  searchTestSummariesList(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Skip the first \`n\` values."""
    offset: Int
  ): [SearchTestSummariesRecord!]
  returnTableWithoutGrants: CompoundKey
  typesQuery(a: BigInt!, b: Boolean!, c: String!, d: [Int]!, e: JSON!, f: FloatRangeInput!): Boolean
  funcOutOutCompoundType(i1: Int): FuncOutOutCompoundTypeRecord
  queryOutputTwoRows(leftArmId: Int, postId: Int, txt: String): QueryOutputTwoRowsRecord

  """Reads and enables pagination through a set of \`CompoundType\`."""
  compoundTypeSetQuery(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): CompoundTypesConnection
  tableQuery(id: Int): Post
  funcOutComplex(a: Int, b: String): FuncOutComplexRecord

  """
  Reads and enables pagination through a set of \`FuncOutComplexSetofRecord\`.
  """
  funcOutComplexSetof(
    a: Int
    b: String

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutComplexSetofConnection

  """Reads and enables pagination through a set of \`Person\`."""
  badlyBehavedFunction(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection @deprecated(reason: "This is deprecated (comment on function c.badly_behaved_function).")
  funcOutTable: Person

  """Reads and enables pagination through a set of \`Person\`."""
  funcOutTableSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection

  """Reads and enables pagination through a set of \`Person\`."""
  tableSetQuery(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonCondition
  ): PeopleConnection

  """Reads and enables pagination through a set of \`Person\`."""
  tableSetQueryPlpgsql(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection

  """Reads a single \`MyTable\` using its globally unique \`ID\`."""
  myTable(
    """The globally unique \`ID\` to be used in selecting a single \`MyTable\`."""
    id: ID!
  ): MyTable

  """Reads a single \`PersonSecret\` using its globally unique \`ID\`."""
  personSecret(
    """
    The globally unique \`ID\` to be used in selecting a single \`PersonSecret\`.
    """
    id: ID!
  ): PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Reads a single \`CompoundKey\` using its globally unique \`ID\`."""
  compoundKey(
    """
    The globally unique \`ID\` to be used in selecting a single \`CompoundKey\`.
    """
    id: ID!
  ): CompoundKey

  """Reads a single \`NullTestRecord\` using its globally unique \`ID\`."""
  nullTestRecord(
    """
    The globally unique \`ID\` to be used in selecting a single \`NullTestRecord\`.
    """
    id: ID!
  ): NullTestRecord

  """Reads a single \`LeftArm\` using its globally unique \`ID\`."""
  leftArm(
    """The globally unique \`ID\` to be used in selecting a single \`LeftArm\`."""
    id: ID!
  ): LeftArm

  """Reads a single \`Issue756\` using its globally unique \`ID\`."""
  issue756(
    """The globally unique \`ID\` to be used in selecting a single \`Issue756\`."""
    id: ID!
  ): Issue756

  """Reads a single \`Person\` using its globally unique \`ID\`."""
  person(
    """The globally unique \`ID\` to be used in selecting a single \`Person\`."""
    id: ID!
  ): Person

  """Reads and enables pagination through a set of \`MyTable\`."""
  allMyTables(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: MyTableCondition
  ): MyTablesConnection

  """Reads and enables pagination through a set of \`PersonSecret\`."""
  allPersonSecrets(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonSecretCondition
  ): PersonSecretsConnection @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  allCompoundKeys(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition
  ): CompoundKeysConnection

  """Reads and enables pagination through a set of \`NullTestRecord\`."""
  allNullTestRecords(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: NullTestRecordCondition
  ): NullTestRecordsConnection

  """Reads and enables pagination through a set of \`EdgeCase\`."""
  allEdgeCases(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`EdgeCase\`."""
    orderBy: [EdgeCasesOrderBy!] = [NATURAL]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: EdgeCaseCondition
  ): EdgeCasesConnection

  """Reads and enables pagination through a set of \`LeftArm\`."""
  allLeftArms(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: LeftArmCondition
  ): LeftArmsConnection

  """Reads and enables pagination through a set of \`Issue756\`."""
  allIssue756S(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: Issue756Condition
  ): Issue756SConnection

  """Reads and enables pagination through a set of \`Person\`."""
  allPeople(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonCondition
  ): PeopleConnection
}

"""An object with a globally unique \`ID\`."""
interface Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
}

type MyTable implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  rowId: Int!
  jsonData: JSON
}

"""
A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

"""Tracks the person's secret"""
type PersonSecret implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  personId: Int!

  """A secret held by the associated Person"""
  secret: String

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""Person test comment"""
type Person implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  computedOut: String!

  """The first name of the person."""
  firstName: String
  computedOutOut: PersonComputedOutOutRecord
  computedInout(ino: String): String
  computedInoutOut(ino: String): PersonComputedInoutOutRecord
  exists(email: Email): Boolean @deprecated(reason: "This is deprecated (comment on function c.person_exists).")
  computedFirstArgInoutOut: PersonComputedFirstArgInoutOutRecord
  computedComplex(a: Int, b: String): PersonComputedComplexRecord

  """The first post by the person."""
  firstPost: Post
  computedFirstArgInout: Person

  """Reads and enables pagination through a set of \`Person\`."""
  friends(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]
  ): PeopleConnection!

  """Reads and enables pagination through a set of \`Type\`."""
  typeFunctionConnection(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): TypesConnection!
  typeFunction(id: Int): Type
  typeFunctionList: [Type]

  """The primary unique identifier for the person"""
  rowId: Int!

  """The person’s name"""
  name: String!
  aliases: [String]!
  about: String
  email: Email!
  site: WrappedUrl @deprecated(reason: "Don’t use me")
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime

  """This \`Person\`'s \`PersonSecret\`."""
  personSecretByPersonId: PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Reads a single \`LeftArm\` that is related to this \`Person\`."""
  leftArmByPersonId: LeftArm

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  compoundKeysByPersonId1(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition
  ): CompoundKeysConnection!

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  compoundKeysByPersonId2(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition
  ): CompoundKeysConnection!
}

type PersonComputedOutOutRecord {
  o1: String
  o2: String
}

type PersonComputedInoutOutRecord {
  ino: String
  o: String
}

scalar Email

type PersonComputedFirstArgInoutOutRecord {
  person: Person
  o: Int
}

type PersonComputedComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""Awesome feature!"""
type CompoundType {
  computedField: Int
  a: Int
  b: String
  c: Color
  d: UUID
  e: EnumCaps
  f: EnumWithEmptyString
  g: Interval
  fooBar: Int
}

enum Color {
  RED
  GREEN
  BLUE
}

"""
A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).
"""
scalar UUID

enum EnumCaps {
  FOO_BAR
  BAR_FOO
  BAZ_QUX
  _0_BAR
}

enum EnumWithEmptyString {
  _EMPTY_
  ONE
  TWO
}

"""
An interval of time that has passed where the smallest distinct unit is a second.
"""
type Interval {
  """
  A quantity of seconds. This is the only non-integer field, as all the other
  fields will dump their overflow into a smaller unit of time. Intervals don’t
  have a smaller unit than seconds.
  """
  seconds: Float

  """A quantity of minutes."""
  minutes: Int

  """A quantity of hours."""
  hours: Int

  """A quantity of days."""
  days: Int

  """A quantity of months."""
  months: Int

  """A quantity of years."""
  years: Int
}

type Post {
  rowId: Int!
  headline: String!
  body: String
  authorId: Int
  enums: [AnEnum]
  comptypes: [Comptype]
}

enum AnEnum {
  AWAITING
  REJECTED
  PUBLISHED
  ASTERISK
  ASTERISK_ASTERISK
  ASTERISK_ASTERISK_ASTERISK
  FOO_ASTERISK
  FOO_ASTERISK_
  _FOO_ASTERISK
  ASTERISK_BAR
  ASTERISK_BAR_
  _ASTERISK_BAR_
  ASTERISK_BAZ_ASTERISK
  _ASTERISK_BAZ_ASTERISK_
  PERCENT
  GREATER_THAN_OR_EQUAL
  LIKE
  DOLLAR
}

type Comptype {
  schedule: Datetime
  isOptimised: Boolean
}

"""
A point in time as described by the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
to unexpected results.
"""
scalar Datetime

"""A connection to a list of \`Person\` values."""
type PeopleConnection {
  """A list of \`Person\` objects."""
  nodes: [Person!]!

  """
  A list of edges which contains the \`Person\` and cursor to aid in pagination.
  """
  edges: [PeopleEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Person\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Person\` edge in the connection."""
type PeopleEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Person\` at the end of the edge."""
  node: Person!
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: Cursor

  """When paginating forwards, the cursor to continue."""
  endCursor: Cursor
}

"""Methods to use when ordering \`Person\`."""
enum PeopleOrderBy {
  NATURAL
  COMPUTED_OUT_ASC
  COMPUTED_OUT_DESC
  FIRST_NAME_ASC
  FIRST_NAME_DESC
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  ABOUT_ASC
  ABOUT_DESC
  EMAIL_ASC
  EMAIL_DESC
  SITE_ASC
  SITE_DESC
  CONFIG_ASC
  CONFIG_DESC
  LAST_LOGIN_FROM_IP_ASC
  LAST_LOGIN_FROM_IP_DESC
  LAST_LOGIN_FROM_SUBNET_ASC
  LAST_LOGIN_FROM_SUBNET_DESC
  USER_MAC_ASC
  USER_MAC_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
}

"""A connection to a list of \`Type\` values."""
type TypesConnection {
  """A list of \`Type\` objects."""
  nodes: [Type!]!

  """
  A list of edges which contains the \`Type\` and cursor to aid in pagination.
  """
  edges: [TypesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Type\` you could get from the connection."""
  totalCount: Int!
}

type Type {
  rowId: Int!
  smallint: Int!
  bigint: BigInt!
  numeric: BigFloat!
  decimal: BigFloat!
  boolean: Boolean!
  varchar: String!
  enum: Color!
  enumArray: [Color]!
  domain: AnInt!
  domain2: AnotherInt!
  textArray: [String]!
  json: JSON!
  jsonb: JSON!
  nullableRange: BigFloatRange
  numrange: BigFloatRange!
  daterange: DateRange!
  anIntRange: AnIntRange!
  timestamp: Datetime!
  timestamptz: Datetime!
  date: Date!
  time: Time!
  timetz: Time!
  interval: Interval!
  intervalArray: [Interval]!
  money: Float!
  compoundType: CompoundType!
  nestedCompoundType: NestedCompoundType!
  nullableCompoundType: CompoundType
  nullableNestedCompoundType: NestedCompoundType
  point: Point!
  nullablePoint: Point
  inet: InternetAddress
  cidr: String
  macaddr: String
  regproc: RegProc
  regprocedure: RegProcedure
  regoper: RegOper
  regoperator: RegOperator
  regclass: RegClass
  regtype: RegType
  regconfig: RegConfig
  regdictionary: RegDictionary
  textArrayDomain: [String]
  int8ArrayDomain: [BigInt]
  bytea: Base64EncodedBinary
  byteaArray: [Base64EncodedBinary]
  ltree: LTree
  ltreeArray: [LTree]
}

"""
A signed eight-byte integer. The upper big integer values are greater than the
max value for a JavaScript number. Therefore all big integers will be output as
strings and not numbers.
"""
scalar BigInt

"""
A floating point number that requires more precision than IEEE 754 binary 64
"""
scalar BigFloat

scalar AnInt

scalar AnotherInt

"""A range of \`BigFloat\`."""
type BigFloatRange {
  """The starting bound of our range."""
  start: BigFloatRangeBound

  """The ending bound of our range."""
  end: BigFloatRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type BigFloatRangeBound {
  """The value at one end of our range."""
  value: BigFloat!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A range of \`Date\`."""
type DateRange {
  """The starting bound of our range."""
  start: DateRangeBound

  """The ending bound of our range."""
  end: DateRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type DateRangeBound {
  """The value at one end of our range."""
  value: Date!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A calendar date in YYYY-MM-DD format."""
scalar Date

"""A range of \`AnInt\`."""
type AnIntRange {
  """The starting bound of our range."""
  start: AnIntRangeBound

  """The ending bound of our range."""
  end: AnIntRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type AnIntRangeBound {
  """The value at one end of our range."""
  value: AnInt!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""
The exact time of day, does not include the date. May or may not have a timezone offset.
"""
scalar Time

type NestedCompoundType {
  a: CompoundType
  b: CompoundType
  bazBuz: Int
}

"""A cartesian point."""
type Point {
  x: Float!
  y: Float!
}

"""An IPv4 or IPv6 host address, and optionally its subnet."""
scalar InternetAddress

"""A builtin object identifier type for a function name"""
scalar RegProc

"""A builtin object identifier type for a function with argument types"""
scalar RegProcedure

"""A builtin object identifier type for an operator"""
scalar RegOper

"""A builtin object identifier type for an operator with argument types"""
scalar RegOperator

"""A builtin object identifier type for a relation name"""
scalar RegClass

"""A builtin object identifier type for a data type name"""
scalar RegType

"""A builtin object identifier type for a text search configuration"""
scalar RegConfig

"""A builtin object identifier type for a text search dictionary"""
scalar RegDictionary

"""Binary data encoded using Base64"""
scalar Base64EncodedBinary

"""
Represents an \`ltree\` hierarchical label tree as outlined in https://www.postgresql.org/docs/current/ltree.html
"""
scalar LTree

"""A \`Type\` edge in the connection."""
type TypesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Type\` at the end of the edge."""
  node: Type!
}

type WrappedUrl {
  url: NotNullUrl!
}

scalar NotNullUrl

"""
A set of key/value pairs, keys are strings, values may be a string or null. Exposed as a JSON object.
"""
scalar KeyValueHash

"""Tracks metadata about the left arms of various people"""
type LeftArm implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  rowId: Int!
  personId: Int!
  lengthInMetres: Float
  mood: String!

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""A connection to a list of \`CompoundKey\` values."""
type CompoundKeysConnection {
  """A list of \`CompoundKey\` objects."""
  nodes: [CompoundKey!]!

  """
  A list of edges which contains the \`CompoundKey\` and cursor to aid in pagination.
  """
  edges: [CompoundKeysEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`CompoundKey\` you could get from the connection."""
  totalCount: Int!
}

type CompoundKey implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  personId2: Int!
  personId1: Int!
  extra: Boolean

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""A \`CompoundKey\` edge in the connection."""
type CompoundKeysEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`CompoundKey\` at the end of the edge."""
  node: CompoundKey!
}

"""Methods to use when ordering \`CompoundKey\`."""
enum CompoundKeysOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PERSON_ID_2_ASC
  PERSON_ID_2_DESC
  PERSON_ID_1_ASC
  PERSON_ID_1_DESC
  EXTRA_ASC
  EXTRA_DESC
}

"""
A condition to be used against \`CompoundKey\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input CompoundKeyCondition {
  """Checks for equality with the object’s \`personId2\` field."""
  personId2: Int

  """Checks for equality with the object’s \`personId1\` field."""
  personId1: Int

  """Checks for equality with the object’s \`extra\` field."""
  extra: Boolean
}

type NullTestRecord implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  rowId: Int!
  nullableText: String
  nullableInt: Int
  nonNullText: String!
}

type Issue756 implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  id: ID!
  rowId: Int!
  ts: NotNullTimestamp!
}

scalar NotNullTimestamp

"""A connection to a list of \`Int\` values."""
type FuncOutSetofConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [FuncOutSetofEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type FuncOutSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

"""A connection to a list of \`Int\` values."""
type FuncReturnsTableOneColConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [FuncReturnsTableOneColEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type FuncReturnsTableOneColEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

type FuncOutOutRecord {
  firstOut: Int
  secondOut: String
}

"""A connection to a list of \`FuncOutOutSetofRecord\` values."""
type FuncOutOutSetofConnection {
  """A list of \`FuncOutOutSetofRecord\` objects."""
  nodes: [FuncOutOutSetofRecord!]!

  """
  A list of edges which contains the \`FuncOutOutSetofRecord\` and cursor to aid in pagination.
  """
  edges: [FuncOutOutSetofEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncOutOutSetofRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncOutOutSetofRecord {
  o1: Int
  o2: String
}

"""A \`FuncOutOutSetofRecord\` edge in the connection."""
type FuncOutOutSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncOutOutSetofRecord\` at the end of the edge."""
  node: FuncOutOutSetofRecord!
}

type FuncOutOutUnnamedRecord {
  arg1: Int
  arg2: String
}

type FuncOutUnnamedOutOutUnnamedRecord {
  arg1: Int
  o2: String
  arg3: Int
}

"""A connection to a list of \`FuncReturnsTableMultiColRecord\` values."""
type FuncReturnsTableMultiColConnection {
  """A list of \`FuncReturnsTableMultiColRecord\` objects."""
  nodes: [FuncReturnsTableMultiColRecord!]!

  """
  A list of edges which contains the \`FuncReturnsTableMultiColRecord\` and cursor to aid in pagination.
  """
  edges: [FuncReturnsTableMultiColEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncReturnsTableMultiColRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncReturnsTableMultiColRecord {
  col1: Int
  col2: String
}

"""A \`FuncReturnsTableMultiColRecord\` edge in the connection."""
type FuncReturnsTableMultiColEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncReturnsTableMultiColRecord\` at the end of the edge."""
  node: FuncReturnsTableMultiColRecord!
}

"""A connection to a list of \`Int\` values."""
type IntSetQueryConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [IntSetQueryEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type IntSetQueryEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

type SearchTestSummariesRecord {
  id: Int
  totalDuration: Interval
}

"""A range of \`Float\`."""
input FloatRangeInput {
  """The starting bound of our range."""
  start: FloatRangeBoundInput

  """The ending bound of our range."""
  end: FloatRangeBoundInput
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
input FloatRangeBoundInput {
  """The value at one end of our range."""
  value: Float!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

type FuncOutOutCompoundTypeRecord {
  o1: Int
  o2: CompoundType
}

type QueryOutputTwoRowsRecord {
  txt: String
  leftArm: LeftArm
  post: Post
}

"""A connection to a list of \`CompoundType\` values."""
type CompoundTypesConnection {
  """A list of \`CompoundType\` objects."""
  nodes: [CompoundType!]!

  """
  A list of edges which contains the \`CompoundType\` and cursor to aid in pagination.
  """
  edges: [CompoundTypesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`CompoundType\` you could get from the connection."""
  totalCount: Int!
}

"""A \`CompoundType\` edge in the connection."""
type CompoundTypesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`CompoundType\` at the end of the edge."""
  node: CompoundType!
}

type FuncOutComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""A connection to a list of \`FuncOutComplexSetofRecord\` values."""
type FuncOutComplexSetofConnection {
  """A list of \`FuncOutComplexSetofRecord\` objects."""
  nodes: [FuncOutComplexSetofRecord!]!

  """
  A list of edges which contains the \`FuncOutComplexSetofRecord\` and cursor to aid in pagination.
  """
  edges: [FuncOutComplexSetofEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncOutComplexSetofRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncOutComplexSetofRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""A \`FuncOutComplexSetofRecord\` edge in the connection."""
type FuncOutComplexSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncOutComplexSetofRecord\` at the end of the edge."""
  node: FuncOutComplexSetofRecord!
}

"""
A condition to be used against \`Person\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input PersonCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`aliases\` field."""
  aliases: [String]

  """Checks for equality with the object’s \`about\` field."""
  about: String

  """Checks for equality with the object’s \`email\` field."""
  email: Email

  """Checks for equality with the object’s \`site\` field."""
  site: WrappedUrlInput

  """Checks for equality with the object’s \`config\` field."""
  config: KeyValueHash

  """Checks for equality with the object’s \`lastLoginFromIp\` field."""
  lastLoginFromIp: InternetAddress

  """Checks for equality with the object’s \`lastLoginFromSubnet\` field."""
  lastLoginFromSubnet: String

  """Checks for equality with the object’s \`userMac\` field."""
  userMac: String

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`computedOut\` field."""
  computedOut: String
}

"""An input for mutations affecting \`WrappedUrl\`"""
input WrappedUrlInput {
  url: NotNullUrl!
}

"""A connection to a list of \`MyTable\` values."""
type MyTablesConnection {
  """A list of \`MyTable\` objects."""
  nodes: [MyTable!]!

  """
  A list of edges which contains the \`MyTable\` and cursor to aid in pagination.
  """
  edges: [MyTablesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`MyTable\` you could get from the connection."""
  totalCount: Int!
}

"""A \`MyTable\` edge in the connection."""
type MyTablesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`MyTable\` at the end of the edge."""
  node: MyTable!
}

"""Methods to use when ordering \`MyTable\`."""
enum MyTablesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  JSON_DATA_ASC
  JSON_DATA_DESC
}

"""
A condition to be used against \`MyTable\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input MyTableCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int

  """Checks for equality with the object’s \`jsonData\` field."""
  jsonData: JSON
}

"""A connection to a list of \`PersonSecret\` values."""
type PersonSecretsConnection {
  """A list of \`PersonSecret\` objects."""
  nodes: [PersonSecret!]!

  """
  A list of edges which contains the \`PersonSecret\` and cursor to aid in pagination.
  """
  edges: [PersonSecretsEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`PersonSecret\` you could get from the connection."""
  totalCount: Int!
}

"""A \`PersonSecret\` edge in the connection."""
type PersonSecretsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`PersonSecret\` at the end of the edge."""
  node: PersonSecret!
}

"""Methods to use when ordering \`PersonSecret\`."""
enum PersonSecretsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  SECRET_ASC
  SECRET_DESC
}

"""
A condition to be used against \`PersonSecret\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input PersonSecretCondition {
  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`secret\` field."""
  secret: String
}

"""A connection to a list of \`NullTestRecord\` values."""
type NullTestRecordsConnection {
  """A list of \`NullTestRecord\` objects."""
  nodes: [NullTestRecord!]!

  """
  A list of edges which contains the \`NullTestRecord\` and cursor to aid in pagination.
  """
  edges: [NullTestRecordsEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`NullTestRecord\` you could get from the connection."""
  totalCount: Int!
}

"""A \`NullTestRecord\` edge in the connection."""
type NullTestRecordsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`NullTestRecord\` at the end of the edge."""
  node: NullTestRecord!
}

"""Methods to use when ordering \`NullTestRecord\`."""
enum NullTestRecordsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NULLABLE_TEXT_ASC
  NULLABLE_TEXT_DESC
  NULLABLE_INT_ASC
  NULLABLE_INT_DESC
  NON_NULL_TEXT_ASC
  NON_NULL_TEXT_DESC
}

"""
A condition to be used against \`NullTestRecord\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input NullTestRecordCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int

  """Checks for equality with the object’s \`nullableText\` field."""
  nullableText: String

  """Checks for equality with the object’s \`nullableInt\` field."""
  nullableInt: Int

  """Checks for equality with the object’s \`nonNullText\` field."""
  nonNullText: String
}

"""A connection to a list of \`EdgeCase\` values."""
type EdgeCasesConnection {
  """A list of \`EdgeCase\` objects."""
  nodes: [EdgeCase!]!

  """
  A list of edges which contains the \`EdgeCase\` and cursor to aid in pagination.
  """
  edges: [EdgeCasesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`EdgeCase\` you could get from the connection."""
  totalCount: Int!
}

type EdgeCase {
  computed: String
  notNullHasDefault: Boolean!
  wontCastEasy: Int
  rowId: Int
}

"""A \`EdgeCase\` edge in the connection."""
type EdgeCasesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`EdgeCase\` at the end of the edge."""
  node: EdgeCase!
}

"""Methods to use when ordering \`EdgeCase\`."""
enum EdgeCasesOrderBy {
  NATURAL
  NOT_NULL_HAS_DEFAULT_ASC
  NOT_NULL_HAS_DEFAULT_DESC
  WONT_CAST_EASY_ASC
  WONT_CAST_EASY_DESC
  ROW_ID_ASC
  ROW_ID_DESC
}

"""
A condition to be used against \`EdgeCase\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input EdgeCaseCondition {
  """Checks for equality with the object’s \`notNullHasDefault\` field."""
  notNullHasDefault: Boolean

  """Checks for equality with the object’s \`wontCastEasy\` field."""
  wontCastEasy: Int

  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int
}

"""A connection to a list of \`LeftArm\` values."""
type LeftArmsConnection {
  """A list of \`LeftArm\` objects."""
  nodes: [LeftArm!]!

  """
  A list of edges which contains the \`LeftArm\` and cursor to aid in pagination.
  """
  edges: [LeftArmsEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`LeftArm\` you could get from the connection."""
  totalCount: Int!
}

"""A \`LeftArm\` edge in the connection."""
type LeftArmsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`LeftArm\` at the end of the edge."""
  node: LeftArm!
}

"""Methods to use when ordering \`LeftArm\`."""
enum LeftArmsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  LENGTH_IN_METRES_ASC
  LENGTH_IN_METRES_DESC
  MOOD_ASC
  MOOD_DESC
}

"""
A condition to be used against \`LeftArm\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input LeftArmCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int

  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`lengthInMetres\` field."""
  lengthInMetres: Float

  """Checks for equality with the object’s \`mood\` field."""
  mood: String
}

"""A connection to a list of \`Issue756\` values."""
type Issue756SConnection {
  """A list of \`Issue756\` objects."""
  nodes: [Issue756!]!

  """
  A list of edges which contains the \`Issue756\` and cursor to aid in pagination.
  """
  edges: [Issue756SEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Issue756\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Issue756\` edge in the connection."""
type Issue756SEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Issue756\` at the end of the edge."""
  node: Issue756!
}

"""Methods to use when ordering \`Issue756\`."""
enum Issue756SOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  TS_ASC
  TS_DESC
}

"""
A condition to be used against \`Issue756\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input Issue756Condition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int

  """Checks for equality with the object’s \`ts\` field."""
  ts: NotNullTimestamp
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  mutationOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutInput!
  ): MutationOutPayload
  mutationOutSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutSetofInput!
  ): MutationOutSetofPayload
  mutationOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutUnnamedInput!
  ): MutationOutUnnamedPayload
  noArgsMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: NoArgsMutationInput!
  ): NoArgsMutationPayload
  mutationInOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationInOutInput!
  ): MutationInOutPayload
  mutationReturnsTableOneCol(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationReturnsTableOneColInput!
  ): MutationReturnsTableOneColPayload
  jsonIdentityMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonIdentityMutationInput!
  ): JsonIdentityMutationPayload
  jsonbIdentityMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationInput!
  ): JsonbIdentityMutationPayload
  jsonbIdentityMutationPlpgsql(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationPlpgsqlInput!
  ): JsonbIdentityMutationPlpgsqlPayload
  jsonbIdentityMutationPlpgsqlWithDefault(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationPlpgsqlWithDefaultInput!
  ): JsonbIdentityMutationPlpgsqlWithDefaultPayload
  mutationInInout(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationInInoutInput!
  ): MutationInInoutPayload
  mutationOutOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutInput!
  ): MutationOutOutPayload
  mutationOutOutSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutSetofInput!
  ): MutationOutOutSetofPayload
  mutationOutOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutUnnamedInput!
  ): MutationOutOutUnnamedPayload
  intSetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: IntSetMutationInput!
  ): IntSetMutationPayload
  mutationOutUnnamedOutOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutUnnamedOutOutUnnamedInput!
  ): MutationOutUnnamedOutOutUnnamedPayload
  mutationReturnsTableMultiCol(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationReturnsTableMultiColInput!
  ): MutationReturnsTableMultiColPayload
  leftArmIdentity(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: LeftArmIdentityInput!
  ): LeftArmIdentityPayload
  issue756Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Issue756MutationInput!
  ): Issue756MutationPayload
  issue756SetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Issue756SetMutationInput!
  ): Issue756SetMutationPayload
  typesMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TypesMutationInput!
  ): TypesMutationPayload
  mutationOutOutCompoundType(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutCompoundTypeInput!
  ): MutationOutOutCompoundTypePayload
  tableMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TableMutationInput!
  ): TableMutationPayload
  mutationOutComplex(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutComplexInput!
  ): MutationOutComplexPayload
  mutationOutComplexSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutComplexSetofInput!
  ): MutationOutComplexSetofPayload
  mutationOutTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutTableInput!
  ): MutationOutTablePayload
  mutationOutTableSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutTableSetofInput!
  ): MutationOutTableSetofPayload
  tableSetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TableSetMutationInput!
  ): TableSetMutationPayload

  """Creates a single \`MyTable\`."""
  createMyTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateMyTableInput!
  ): CreateMyTablePayload

  """Creates a single \`PersonSecret\`."""
  createPersonSecret(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePersonSecretInput!
  ): CreatePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Creates a single \`CompoundKey\`."""
  createCompoundKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateCompoundKeyInput!
  ): CreateCompoundKeyPayload

  """Creates a single \`NullTestRecord\`."""
  createNullTestRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateNullTestRecordInput!
  ): CreateNullTestRecordPayload

  """Creates a single \`EdgeCase\`."""
  createEdgeCase(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateEdgeCaseInput!
  ): CreateEdgeCasePayload

  """Creates a single \`LeftArm\`."""
  createLeftArm(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateLeftArmInput!
  ): CreateLeftArmPayload

  """Creates a single \`Issue756\`."""
  createIssue756(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateIssue756Input!
  ): CreateIssue756Payload

  """Creates a single \`Person\`."""
  createPerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePersonInput!
  ): CreatePersonPayload

  """Updates a single \`MyTable\` using its globally unique id and a patch."""
  updateMyTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateMyTableInput!
  ): UpdateMyTablePayload

  """Updates a single \`MyTable\` using a unique key and a patch."""
  updateMyTableByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateMyTableByRowIdInput!
  ): UpdateMyTablePayload

  """
  Updates a single \`PersonSecret\` using its globally unique id and a patch.
  """
  updatePersonSecret(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonSecretInput!
  ): UpdatePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Updates a single \`PersonSecret\` using a unique key and a patch."""
  updatePersonSecretByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonSecretByPersonIdInput!
  ): UpdatePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """
  Updates a single \`CompoundKey\` using its globally unique id and a patch.
  """
  updateCompoundKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateCompoundKeyInput!
  ): UpdateCompoundKeyPayload

  """Updates a single \`CompoundKey\` using a unique key and a patch."""
  updateCompoundKeyByPersonId1AndPersonId2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateCompoundKeyByPersonId1AndPersonId2Input!
  ): UpdateCompoundKeyPayload

  """
  Updates a single \`NullTestRecord\` using its globally unique id and a patch.
  """
  updateNullTestRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateNullTestRecordInput!
  ): UpdateNullTestRecordPayload

  """Updates a single \`NullTestRecord\` using a unique key and a patch."""
  updateNullTestRecordByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateNullTestRecordByRowIdInput!
  ): UpdateNullTestRecordPayload

  """Updates a single \`LeftArm\` using its globally unique id and a patch."""
  updateLeftArm(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLeftArmInput!
  ): UpdateLeftArmPayload

  """Updates a single \`LeftArm\` using a unique key and a patch."""
  updateLeftArmByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLeftArmByRowIdInput!
  ): UpdateLeftArmPayload

  """Updates a single \`LeftArm\` using a unique key and a patch."""
  updateLeftArmByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLeftArmByPersonIdInput!
  ): UpdateLeftArmPayload

  """Updates a single \`Issue756\` using its globally unique id and a patch."""
  updateIssue756(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateIssue756Input!
  ): UpdateIssue756Payload

  """Updates a single \`Issue756\` using a unique key and a patch."""
  updateIssue756ByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateIssue756ByRowIdInput!
  ): UpdateIssue756Payload

  """Updates a single \`Person\` using its globally unique id and a patch."""
  updatePerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonInput!
  ): UpdatePersonPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByRowIdInput!
  ): UpdatePersonPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonByEmail(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByEmailInput!
  ): UpdatePersonPayload

  """Deletes a single \`MyTable\` using its globally unique id."""
  deleteMyTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteMyTableInput!
  ): DeleteMyTablePayload

  """Deletes a single \`MyTable\` using a unique key."""
  deleteMyTableByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteMyTableByRowIdInput!
  ): DeleteMyTablePayload

  """Deletes a single \`PersonSecret\` using its globally unique id."""
  deletePersonSecret(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonSecretInput!
  ): DeletePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Deletes a single \`PersonSecret\` using a unique key."""
  deletePersonSecretByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonSecretByPersonIdInput!
  ): DeletePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Deletes a single \`CompoundKey\` using its globally unique id."""
  deleteCompoundKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteCompoundKeyInput!
  ): DeleteCompoundKeyPayload

  """Deletes a single \`CompoundKey\` using a unique key."""
  deleteCompoundKeyByPersonId1AndPersonId2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteCompoundKeyByPersonId1AndPersonId2Input!
  ): DeleteCompoundKeyPayload

  """Deletes a single \`NullTestRecord\` using its globally unique id."""
  deleteNullTestRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteNullTestRecordInput!
  ): DeleteNullTestRecordPayload

  """Deletes a single \`NullTestRecord\` using a unique key."""
  deleteNullTestRecordByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteNullTestRecordByRowIdInput!
  ): DeleteNullTestRecordPayload

  """Deletes a single \`LeftArm\` using its globally unique id."""
  deleteLeftArm(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLeftArmInput!
  ): DeleteLeftArmPayload

  """Deletes a single \`LeftArm\` using a unique key."""
  deleteLeftArmByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLeftArmByRowIdInput!
  ): DeleteLeftArmPayload

  """Deletes a single \`LeftArm\` using a unique key."""
  deleteLeftArmByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLeftArmByPersonIdInput!
  ): DeleteLeftArmPayload

  """Deletes a single \`Issue756\` using its globally unique id."""
  deleteIssue756(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteIssue756Input!
  ): DeleteIssue756Payload

  """Deletes a single \`Issue756\` using a unique key."""
  deleteIssue756ByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteIssue756ByRowIdInput!
  ): DeleteIssue756Payload

  """Deletes a single \`Person\` using its globally unique id."""
  deletePerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonInput!
  ): DeletePersonPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByRowIdInput!
  ): DeletePersonPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonByEmail(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByEmailInput!
  ): DeletePersonPayload
}

"""The output of our \`mutationOut\` mutation."""
type MutationOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  o: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOut\` mutation."""
input MutationOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutSetof\` mutation."""
type MutationOutSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  os: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutSetof\` mutation."""
input MutationOutSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutUnnamed\` mutation."""
type MutationOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutUnnamed\` mutation."""
input MutationOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`noArgsMutation\` mutation."""
type NoArgsMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`noArgsMutation\` mutation."""
input NoArgsMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationInOut\` mutation."""
type MutationInOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  o: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationInOut\` mutation."""
input MutationInOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`mutationReturnsTableOneCol\` mutation."""
type MutationReturnsTableOneColPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  col1S: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationReturnsTableOneCol\` mutation."""
input MutationReturnsTableOneColInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`jsonIdentityMutation\` mutation."""
type JsonIdentityMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonIdentityMutation\` mutation."""
input JsonIdentityMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  json: JSON
}

"""The output of our \`jsonbIdentityMutation\` mutation."""
type JsonbIdentityMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutation\` mutation."""
input JsonbIdentityMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  json: JSON
}

"""The output of our \`jsonbIdentityMutationPlpgsql\` mutation."""
type JsonbIdentityMutationPlpgsqlPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutationPlpgsql\` mutation."""
input JsonbIdentityMutationPlpgsqlInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  _theJson: JSON!
}

"""The output of our \`jsonbIdentityMutationPlpgsqlWithDefault\` mutation."""
type JsonbIdentityMutationPlpgsqlWithDefaultPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutationPlpgsqlWithDefault\` mutation."""
input JsonbIdentityMutationPlpgsqlWithDefaultInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  _theJson: JSON
}

"""The output of our \`mutationInInout\` mutation."""
type MutationInInoutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  ino: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationInInout\` mutation."""
input MutationInInoutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
  ino: Int
}

"""The output of our \`mutationOutOut\` mutation."""
type MutationOutOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutRecord {
  firstOut: Int
  secondOut: String
}

"""All input for the \`mutationOutOut\` mutation."""
input MutationOutOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutOutSetof\` mutation."""
type MutationOutOutSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationOutOutSetofRecord!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutSetofRecord {
  o1: Int
  o2: String
}

"""All input for the \`mutationOutOutSetof\` mutation."""
input MutationOutOutSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutOutUnnamed\` mutation."""
type MutationOutOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutUnnamedRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutUnnamedRecord {
  arg1: Int
  arg2: String
}

"""All input for the \`mutationOutOutUnnamed\` mutation."""
input MutationOutOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`intSetMutation\` mutation."""
type IntSetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integers: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`intSetMutation\` mutation."""
input IntSetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  x: Int
  y: Int
  z: Int
}

"""The output of our \`mutationOutUnnamedOutOutUnnamed\` mutation."""
type MutationOutUnnamedOutOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutUnnamedOutOutUnnamedRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutUnnamedOutOutUnnamedRecord {
  arg1: Int
  o2: String
  arg3: Int
}

"""All input for the \`mutationOutUnnamedOutOutUnnamed\` mutation."""
input MutationOutUnnamedOutOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationReturnsTableMultiCol\` mutation."""
type MutationReturnsTableMultiColPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationReturnsTableMultiColRecord!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationReturnsTableMultiColRecord {
  col1: Int
  col2: String
}

"""All input for the \`mutationReturnsTableMultiCol\` mutation."""
input MutationReturnsTableMultiColInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`leftArmIdentity\` mutation."""
type LeftArmIdentityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`leftArmIdentity\` mutation."""
input LeftArmIdentityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  leftArm: LeftArmBaseInput
}

"""An input representation of \`LeftArm\` with nullable fields."""
input LeftArmBaseInput {
  rowId: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""The output of our \`issue756Mutation\` mutation."""
type Issue756MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`issue756Mutation\` mutation."""
input Issue756MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`issue756SetMutation\` mutation."""
type Issue756SetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  issue756S: [Issue756!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`issue756SetMutation\` mutation."""
input Issue756SetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`typesMutation\` mutation."""
type TypesMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  boolean: Boolean

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`typesMutation\` mutation."""
input TypesMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: BigInt!
  b: Boolean!
  c: String!
  d: [Int]!
  e: JSON!
  f: FloatRangeInput!
}

"""The output of our \`mutationOutOutCompoundType\` mutation."""
type MutationOutOutCompoundTypePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutCompoundTypeRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutCompoundTypeRecord {
  o1: Int
  o2: CompoundType
}

"""All input for the \`mutationOutOutCompoundType\` mutation."""
input MutationOutOutCompoundTypeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i1: Int
}

"""The output of our \`tableMutation\` mutation."""
type TableMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`tableMutation\` mutation."""
input TableMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int
}

"""The output of our \`mutationOutComplex\` mutation."""
type MutationOutComplexPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutComplexRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""All input for the \`mutationOutComplex\` mutation."""
input MutationOutComplexInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: String
}

"""The output of our \`mutationOutComplexSetof\` mutation."""
type MutationOutComplexSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationOutComplexSetofRecord!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutComplexSetofRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""All input for the \`mutationOutComplexSetof\` mutation."""
input MutationOutComplexSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: String
}

"""The output of our \`mutationOutTable\` mutation."""
type MutationOutTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`mutationOutTable\` mutation."""
input MutationOutTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutTableSetof\` mutation."""
type MutationOutTableSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  people: [Person!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutTableSetof\` mutation."""
input MutationOutTableSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`tableSetMutation\` mutation."""
type TableSetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  people: [Person!]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`tableSetMutation\` mutation."""
input TableSetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our create \`MyTable\` mutation."""
type CreateMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was created by this mutation."""
  myTable: MyTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the create \`MyTable\` mutation."""
input CreateMyTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`MyTable\` to be created by this mutation."""
  myTable: MyTableInput!
}

"""An input for mutations affecting \`MyTable\`"""
input MyTableInput {
  rowId: Int
  jsonData: JSON
}

"""The output of our create \`PersonSecret\` mutation."""
type CreatePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was created by this mutation."""
  personSecret: PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the create \`PersonSecret\` mutation."""
input CreatePersonSecretInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`PersonSecret\` to be created by this mutation."""
  personSecret: PersonSecretInput!
}

"""An input for mutations affecting \`PersonSecret\`"""
input PersonSecretInput {
  personId: Int!

  """A secret held by the associated Person"""
  secret: String
}

"""The output of our create \`CompoundKey\` mutation."""
type CreateCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was created by this mutation."""
  compoundKey: CompoundKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the create \`CompoundKey\` mutation."""
input CreateCompoundKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`CompoundKey\` to be created by this mutation."""
  compoundKey: CompoundKeyInput!
}

"""An input for mutations affecting \`CompoundKey\`"""
input CompoundKeyInput {
  personId2: Int!
  personId1: Int!
  extra: Boolean
}

"""The output of our create \`NullTestRecord\` mutation."""
type CreateNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was created by this mutation."""
  nullTestRecord: NullTestRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the create \`NullTestRecord\` mutation."""
input CreateNullTestRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`NullTestRecord\` to be created by this mutation."""
  nullTestRecord: NullTestRecordInput!
}

"""An input for mutations affecting \`NullTestRecord\`"""
input NullTestRecordInput {
  rowId: Int
  nullableText: String
  nullableInt: Int
  nonNullText: String!
}

"""The output of our create \`EdgeCase\` mutation."""
type CreateEdgeCasePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`EdgeCase\` that was created by this mutation."""
  edgeCase: EdgeCase

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the create \`EdgeCase\` mutation."""
input CreateEdgeCaseInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`EdgeCase\` to be created by this mutation."""
  edgeCase: EdgeCaseInput!
}

"""An input for mutations affecting \`EdgeCase\`"""
input EdgeCaseInput {
  notNullHasDefault: Boolean
  wontCastEasy: Int
  rowId: Int
}

"""The output of our create \`LeftArm\` mutation."""
type CreateLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was created by this mutation."""
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the create \`LeftArm\` mutation."""
input CreateLeftArmInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`LeftArm\` to be created by this mutation."""
  leftArm: LeftArmInput!
}

"""An input for mutations affecting \`LeftArm\`"""
input LeftArmInput {
  rowId: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""The output of our create \`Issue756\` mutation."""
type CreateIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was created by this mutation."""
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the create \`Issue756\` mutation."""
input CreateIssue756Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Issue756\` to be created by this mutation."""
  issue756: Issue756Input!
}

"""An input for mutations affecting \`Issue756\`"""
input Issue756Input {
  rowId: Int
  ts: NotNullTimestamp
}

"""The output of our create \`Person\` mutation."""
type CreatePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was created by this mutation."""
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the create \`Person\` mutation."""
input CreatePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Person\` to be created by this mutation."""
  person: PersonInput!
}

"""An input for mutations affecting \`Person\`"""
input PersonInput {
  """The primary unique identifier for the person"""
  rowId: Int

  """The person’s name"""
  name: String!
  aliases: [String]
  about: String
  email: Email!
  site: WrappedUrlInput
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime
}

"""The output of our update \`MyTable\` mutation."""
type UpdateMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was updated by this mutation."""
  myTable: MyTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the \`updateMyTable\` mutation."""
input UpdateMyTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`MyTable\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`MyTable\` being updated.
  """
  myTablePatch: MyTablePatch!
}

"""
Represents an update to a \`MyTable\`. Fields that are set will be updated.
"""
input MyTablePatch {
  rowId: Int
  jsonData: JSON
}

"""All input for the \`updateMyTableByRowId\` mutation."""
input UpdateMyTableByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!

  """
  An object where the defined keys will be set on the \`MyTable\` being updated.
  """
  myTablePatch: MyTablePatch!
}

"""The output of our update \`PersonSecret\` mutation."""
type UpdatePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was updated by this mutation."""
  personSecret: PersonSecret

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the \`updatePersonSecret\` mutation."""
input UpdatePersonSecretInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`PersonSecret\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`PersonSecret\` being updated.
  """
  personSecretPatch: PersonSecretPatch!
}

"""
Represents an update to a \`PersonSecret\`. Fields that are set will be updated.
"""
input PersonSecretPatch {
  personId: Int

  """A secret held by the associated Person"""
  secret: String
}

"""All input for the \`updatePersonSecretByPersonId\` mutation."""
input UpdatePersonSecretByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!

  """
  An object where the defined keys will be set on the \`PersonSecret\` being updated.
  """
  personSecretPatch: PersonSecretPatch!
}

"""The output of our update \`CompoundKey\` mutation."""
type UpdateCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was updated by this mutation."""
  compoundKey: CompoundKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the \`updateCompoundKey\` mutation."""
input UpdateCompoundKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`CompoundKey\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`CompoundKey\` being updated.
  """
  compoundKeyPatch: CompoundKeyPatch!
}

"""
Represents an update to a \`CompoundKey\`. Fields that are set will be updated.
"""
input CompoundKeyPatch {
  personId2: Int
  personId1: Int
  extra: Boolean
}

"""All input for the \`updateCompoundKeyByPersonId1AndPersonId2\` mutation."""
input UpdateCompoundKeyByPersonId1AndPersonId2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId1: Int!
  personId2: Int!

  """
  An object where the defined keys will be set on the \`CompoundKey\` being updated.
  """
  compoundKeyPatch: CompoundKeyPatch!
}

"""The output of our update \`NullTestRecord\` mutation."""
type UpdateNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was updated by this mutation."""
  nullTestRecord: NullTestRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the \`updateNullTestRecord\` mutation."""
input UpdateNullTestRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`NullTestRecord\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`NullTestRecord\` being updated.
  """
  nullTestRecordPatch: NullTestRecordPatch!
}

"""
Represents an update to a \`NullTestRecord\`. Fields that are set will be updated.
"""
input NullTestRecordPatch {
  rowId: Int
  nullableText: String
  nullableInt: Int
  nonNullText: String
}

"""All input for the \`updateNullTestRecordByRowId\` mutation."""
input UpdateNullTestRecordByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!

  """
  An object where the defined keys will be set on the \`NullTestRecord\` being updated.
  """
  nullTestRecordPatch: NullTestRecordPatch!
}

"""The output of our update \`LeftArm\` mutation."""
type UpdateLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was updated by this mutation."""
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`updateLeftArm\` mutation."""
input UpdateLeftArmInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`LeftArm\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`LeftArm\` being updated.
  """
  leftArmPatch: LeftArmPatch!
}

"""
Represents an update to a \`LeftArm\`. Fields that are set will be updated.
"""
input LeftArmPatch {
  rowId: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""All input for the \`updateLeftArmByRowId\` mutation."""
input UpdateLeftArmByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!

  """
  An object where the defined keys will be set on the \`LeftArm\` being updated.
  """
  leftArmPatch: LeftArmPatch!
}

"""All input for the \`updateLeftArmByPersonId\` mutation."""
input UpdateLeftArmByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!

  """
  An object where the defined keys will be set on the \`LeftArm\` being updated.
  """
  leftArmPatch: LeftArmPatch!
}

"""The output of our update \`Issue756\` mutation."""
type UpdateIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was updated by this mutation."""
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`updateIssue756\` mutation."""
input UpdateIssue756Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Issue756\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`Issue756\` being updated.
  """
  issue756Patch: Issue756Patch!
}

"""
Represents an update to a \`Issue756\`. Fields that are set will be updated.
"""
input Issue756Patch {
  rowId: Int
  ts: NotNullTimestamp
}

"""All input for the \`updateIssue756ByRowId\` mutation."""
input UpdateIssue756ByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!

  """
  An object where the defined keys will be set on the \`Issue756\` being updated.
  """
  issue756Patch: Issue756Patch!
}

"""The output of our update \`Person\` mutation."""
type UpdatePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was updated by this mutation."""
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`updatePerson\` mutation."""
input UpdatePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Person\` to be updated.
  """
  id: ID!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""
Represents an update to a \`Person\`. Fields that are set will be updated.
"""
input PersonPatch {
  """The primary unique identifier for the person"""
  rowId: Int

  """The person’s name"""
  name: String
  aliases: [String]
  about: String
  email: Email
  site: WrappedUrlInput
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime
}

"""All input for the \`updatePersonByRowId\` mutation."""
input UpdatePersonByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The primary unique identifier for the person"""
  rowId: Int!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""All input for the \`updatePersonByEmail\` mutation."""
input UpdatePersonByEmailInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  email: Email!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""The output of our delete \`MyTable\` mutation."""
type DeleteMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was deleted by this mutation."""
  myTable: MyTable
  deletedMyTableId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the \`deleteMyTable\` mutation."""
input DeleteMyTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`MyTable\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deleteMyTableByRowId\` mutation."""
input DeleteMyTableByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!
}

"""The output of our delete \`PersonSecret\` mutation."""
type DeletePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was deleted by this mutation."""
  personSecret: PersonSecret
  deletedPersonSecretId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the \`deletePersonSecret\` mutation."""
input DeletePersonSecretInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`PersonSecret\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deletePersonSecretByPersonId\` mutation."""
input DeletePersonSecretByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!
}

"""The output of our delete \`CompoundKey\` mutation."""
type DeleteCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was deleted by this mutation."""
  compoundKey: CompoundKey
  deletedCompoundKeyId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the \`deleteCompoundKey\` mutation."""
input DeleteCompoundKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`CompoundKey\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deleteCompoundKeyByPersonId1AndPersonId2\` mutation."""
input DeleteCompoundKeyByPersonId1AndPersonId2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId1: Int!
  personId2: Int!
}

"""The output of our delete \`NullTestRecord\` mutation."""
type DeleteNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was deleted by this mutation."""
  nullTestRecord: NullTestRecord
  deletedNullTestRecordId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the \`deleteNullTestRecord\` mutation."""
input DeleteNullTestRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`NullTestRecord\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deleteNullTestRecordByRowId\` mutation."""
input DeleteNullTestRecordByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!
}

"""The output of our delete \`LeftArm\` mutation."""
type DeleteLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was deleted by this mutation."""
  leftArm: LeftArm
  deletedLeftArmId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`deleteLeftArm\` mutation."""
input DeleteLeftArmInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`LeftArm\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deleteLeftArmByRowId\` mutation."""
input DeleteLeftArmByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!
}

"""All input for the \`deleteLeftArmByPersonId\` mutation."""
input DeleteLeftArmByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!
}

"""The output of our delete \`Issue756\` mutation."""
type DeleteIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was deleted by this mutation."""
  issue756: Issue756
  deletedIssue756Id: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`deleteIssue756\` mutation."""
input DeleteIssue756Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Issue756\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deleteIssue756ByRowId\` mutation."""
input DeleteIssue756ByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: Int!
}

"""The output of our delete \`Person\` mutation."""
type DeletePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was deleted by this mutation."""
  person: Person
  deletedPersonId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`deletePerson\` mutation."""
input DeletePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Person\` to be deleted.
  """
  id: ID!
}

"""All input for the \`deletePersonByRowId\` mutation."""
input DeletePersonByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The primary unique identifier for the person"""
  rowId: Int!
}

"""All input for the \`deletePersonByEmail\` mutation."""
input DeletePersonByEmailInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  email: Email!
}`;
export const plans = {
  Query: {
    __assertStep() {
      return true;
    },
    query: Query_queryPlan,
    id($parent) {
      const specifier = handler.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler.codec.name].encode);
    },
    node: {
      plan(_$root, args) {
        return node(nodeIdHandlerByTypeName, args.get("id"));
      },
      args: {
        id: undefined
      }
    },
    myTableByRowId: {
      plan(_$root, args) {
        return pgResource_my_tablePgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    personSecretByPersonId: {
      plan(_$root, args) {
        return pgResource_person_secretPgResource.get({
          person_id: args.get("personId")
        });
      },
      args: {
        personId: undefined
      }
    },
    compoundKeyByPersonId1AndPersonId2: {
      plan(_$root, args) {
        return pgResource_compound_keyPgResource.get({
          person_id_1: args.get("personId1"),
          person_id_2: args.get("personId2")
        });
      },
      args: {
        personId1: undefined,
        personId2: undefined
      }
    },
    nullTestRecordByRowId: {
      plan(_$root, args) {
        return pgResource_null_test_recordPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    leftArmByRowId: {
      plan(_$root, args) {
        return pgResource_left_armPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    leftArmByPersonId: {
      plan(_$root, args) {
        return pgResource_left_armPgResource.get({
          person_id: args.get("personId")
        });
      },
      args: {
        personId: undefined
      }
    },
    issue756ByRowId: {
      plan(_$root, args) {
        return pgResource_issue756PgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    personByRowId: {
      plan(_$root, args) {
        return pgResource_personPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    personByEmail: {
      plan(_$root, args) {
        return pgResource_personPgResource.get({
          email: args.get("email")
        });
      },
      args: {
        email: undefined
      }
    },
    currentUserId($root, args, _info) {
      const selectArgs = makeArgs(args);
      return resource_current_user_idPgResource.execute(selectArgs);
    },
    funcOut($root, args, _info) {
      const selectArgs = makeArgs2(args);
      return resource_func_outPgResource.execute(selectArgs);
    },
    funcOutSetof: {
      plan: Query_funcOutSetofPlan,
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutSetof_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutSetof_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutSetof_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutSetof_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutSetof_after_applyPlan
        }
      }
    },
    funcOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs4(args);
      return resource_func_out_unnamedPgResource.execute(selectArgs);
    },
    noArgsQuery($root, args, _info) {
      const selectArgs = makeArgs5(args);
      return resource_no_args_queryPgResource.execute(selectArgs);
    },
    funcInOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs6(args);
        return resource_func_in_outPgResource.execute(selectArgs);
      },
      args: {
        i: undefined
      }
    },
    funcReturnsTableOneCol: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs2($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        i: undefined,
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableOneCol_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableOneCol_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableOneCol_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableOneCol_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableOneCol_after_applyPlan
        }
      }
    },
    jsonIdentity: {
      plan($root, args, _info) {
        const selectArgs = makeArgs8(args);
        return resource_json_identityPgResource.execute(selectArgs);
      },
      args: {
        json: undefined
      }
    },
    jsonbIdentity: {
      plan($root, args, _info) {
        const selectArgs = makeArgs9(args);
        return resource_jsonb_identityPgResource.execute(selectArgs);
      },
      args: {
        json: undefined
      }
    },
    funcInInout: {
      plan($root, args, _info) {
        const selectArgs = makeArgs10(args);
        return resource_func_in_inoutPgResource.execute(selectArgs);
      },
      args: {
        i: undefined,
        ino: undefined
      }
    },
    funcOutOut($root, args, _info) {
      const selectArgs = makeArgs11(args);
      return resource_func_out_outPgResource.execute(selectArgs);
    },
    funcOutOutSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs3($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutOutSetof_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutOutSetof_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutOutSetof_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutOutSetof_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutOutSetof_after_applyPlan
        }
      }
    },
    funcOutOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs13(args);
      return resource_func_out_out_unnamedPgResource.execute(selectArgs);
    },
    funcOutUnnamedOutOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs14(args);
      return resource_func_out_unnamed_out_out_unnamedPgResource.execute(selectArgs);
    },
    funcReturnsTableMultiCol: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs4($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        i: undefined,
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableMultiCol_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableMultiCol_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableMultiCol_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableMultiCol_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcReturnsTableMultiCol_after_applyPlan
        }
      }
    },
    intSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs5($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        x: undefined,
        y: undefined,
        z: undefined,
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_intSetQuery_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_intSetQuery_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_intSetQuery_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_intSetQuery_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_intSetQuery_after_applyPlan
        }
      }
    },
    searchTestSummariesList: {
      plan($root, args, _info) {
        const selectArgs = makeArgs17(args);
        return resource_search_test_summariesPgResource.execute(selectArgs);
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_searchTestSummariesList_first_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_searchTestSummariesList_offset_applyPlan
        }
      }
    },
    returnTableWithoutGrants($root, args, _info) {
      const selectArgs = makeArgs18(args);
      return resource_return_table_without_grantsPgResource.execute(selectArgs);
    },
    typesQuery: {
      plan($root, args, _info) {
        const selectArgs = makeArgs19(args);
        return resource_types_queryPgResource.execute(selectArgs);
      },
      args: {
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
        e: undefined,
        f: undefined
      }
    },
    funcOutOutCompoundType: {
      plan($root, args, _info) {
        const selectArgs = makeArgs20(args);
        return resource_func_out_out_compound_typePgResource.execute(selectArgs);
      },
      args: {
        i1: undefined
      }
    },
    queryOutputTwoRows: {
      plan($root, args, _info) {
        const selectArgs = makeArgs21(args);
        return resource_query_output_two_rowsPgResource.execute(selectArgs);
      },
      args: {
        leftArmId: undefined,
        postId: undefined,
        txt: undefined
      }
    },
    compoundTypeSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs6($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_compoundTypeSetQuery_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_compoundTypeSetQuery_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_compoundTypeSetQuery_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_compoundTypeSetQuery_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_compoundTypeSetQuery_after_applyPlan
        }
      }
    },
    tableQuery: {
      plan($root, args, _info) {
        const selectArgs = makeArgs23(args);
        return resource_table_queryPgResource.execute(selectArgs);
      },
      args: {
        id: undefined
      }
    },
    funcOutComplex: {
      plan($root, args, _info) {
        const selectArgs = makeArgs24(args);
        return resource_func_out_complexPgResource.execute(selectArgs);
      },
      args: {
        a: undefined,
        b: undefined
      }
    },
    funcOutComplexSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs7($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        a: undefined,
        b: undefined,
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutComplexSetof_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutComplexSetof_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutComplexSetof_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutComplexSetof_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutComplexSetof_after_applyPlan
        }
      }
    },
    badlyBehavedFunction: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs8($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_badlyBehavedFunction_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_badlyBehavedFunction_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_badlyBehavedFunction_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_badlyBehavedFunction_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_badlyBehavedFunction_after_applyPlan
        }
      }
    },
    funcOutTable($root, args, _info) {
      const selectArgs = makeArgs27(args);
      return resource_func_out_tablePgResource.execute(selectArgs);
    },
    funcOutTableSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs9($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutTableSetof_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutTableSetof_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutTableSetof_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutTableSetof_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_funcOutTableSetof_after_applyPlan
        }
      }
    },
    tableSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs10($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQuery_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQuery_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQuery_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQuery_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQuery_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    tableSetQueryPlpgsql: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs11($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQueryPlpgsql_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQueryPlpgsql_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQueryPlpgsql_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQueryPlpgsql_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_tableSetQueryPlpgsql_after_applyPlan
        }
      }
    },
    myTable: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher($nodeId);
      },
      args: {
        id: undefined
      }
    },
    personSecret: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher2($nodeId);
      },
      args: {
        id: undefined
      }
    },
    compoundKey: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher3($nodeId);
      },
      args: {
        id: undefined
      }
    },
    nullTestRecord: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher4($nodeId);
      },
      args: {
        id: undefined
      }
    },
    leftArm: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher5($nodeId);
      },
      args: {
        id: undefined
      }
    },
    issue756: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher6($nodeId);
      },
      args: {
        id: undefined
      }
    },
    person: {
      plan(_$parent, args) {
        const $nodeId = args.get("id");
        return fetcher7($nodeId);
      },
      args: {
        id: undefined
      }
    },
    allMyTables: {
      plan() {
        return connection(pgResource_my_tablePgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allMyTables_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allMyTables_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allMyTables_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allMyTables_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allMyTables_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("MyTablesOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allPersonSecrets: {
      plan() {
        return connection(pgResource_person_secretPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPersonSecrets_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPersonSecrets_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPersonSecrets_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPersonSecrets_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPersonSecrets_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PersonSecretsOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allCompoundKeys: {
      plan() {
        return connection(pgResource_compound_keyPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allCompoundKeys_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allCompoundKeys_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allCompoundKeys_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allCompoundKeys_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allCompoundKeys_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allNullTestRecords: {
      plan() {
        return connection(pgResource_null_test_recordPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allNullTestRecords_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allNullTestRecords_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allNullTestRecords_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allNullTestRecords_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allNullTestRecords_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("NullTestRecordsOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allEdgeCases: {
      plan() {
        return connection(resource_edge_casePgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allEdgeCases_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allEdgeCases_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allEdgeCases_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allEdgeCases_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allEdgeCases_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("EdgeCasesOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allLeftArms: {
      plan() {
        return connection(pgResource_left_armPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allLeftArms_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allLeftArms_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allLeftArms_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allLeftArms_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allLeftArms_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("LeftArmsOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allIssue756S: {
      plan() {
        return connection(pgResource_issue756PgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allIssue756S_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allIssue756S_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allIssue756S_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allIssue756S_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allIssue756S_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("Issue756SOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allPeople: {
      plan() {
        return connection(pgResource_personPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPeople_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPeople_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPeople_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPeople_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Query_allPeople_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    }
  },
  MyTable: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.MyTable.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.MyTable.codec.name].encode);
    },
    rowId($record) {
      return $record.get("id");
    },
    jsonData($record) {
      return $record.get("json_data");
    }
  },
  PersonSecret: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.PersonSecret.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.PersonSecret.codec.name].encode);
    },
    personId($record) {
      return $record.get("person_id");
    },
    secret($record) {
      return $record.get("sekrit");
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("person_id")
      });
    }
  },
  Person: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.Person.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.Person.codec.name].encode);
    },
    computedOut($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs31(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_computed_outPgResource.isUnique && !resource_person_computed_outPgResource.codec.attributes && typeof resource_person_computed_outPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_computed_outPgResource.codec)`${resource_person_computed_outPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_computed_outPgResource.execute(selectArgs);
    },
    firstName($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs32(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_first_namePgResource.isUnique && !resource_person_first_namePgResource.codec.attributes && typeof resource_person_first_namePgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_first_namePgResource.codec)`${resource_person_first_namePgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_first_namePgResource.execute(selectArgs);
    },
    computedOutOut($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs33(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_computed_out_outPgResource.isUnique && !resource_person_computed_out_outPgResource.codec.attributes && typeof resource_person_computed_out_outPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_computed_out_outPgResource.codec)`${resource_person_computed_out_outPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_computed_out_outPgResource.execute(selectArgs);
    },
    computedInout: {
      plan($in, args, _info) {
        if (!hasRecord($in)) {
          throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
        }
        const extraSelectArgs = makeArgs34(args);
        /**
         * An optimisation - if all our dependencies are
         * compatible with the expression's class plan then we
         * can inline ourselves into that, otherwise we must
         * issue the query separately.
         */
        const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
        const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
        const selectArgs = [{
          step: $row.record()
        }, ...extraSelectArgs];
        if (resource_person_computed_inoutPgResource.isUnique && !resource_person_computed_inoutPgResource.codec.attributes && typeof resource_person_computed_inoutPgResource.from === "function") {
          // This is a scalar computed attribute, let's inline the expression
          const placeholders = selectArgs.map((arg, i) => {
            if (i === 0) {
              return $row.getClassStep().alias;
            } else if ("pgCodec" in arg && arg.pgCodec) {
              return $row.placeholder(arg.step, arg.pgCodec);
            } else {
              return $row.placeholder(arg.step);
            }
          });
          return pgClassExpression($row, resource_person_computed_inoutPgResource.codec)`${resource_person_computed_inoutPgResource.from(...placeholders.map(placeholder => ({
            placeholder
          })))}`;
        }
        // PERF: or here, if scalar add select to `$row`?
        return resource_person_computed_inoutPgResource.execute(selectArgs);
      },
      args: {
        ino: undefined
      }
    },
    computedInoutOut: {
      plan($in, args, _info) {
        if (!hasRecord($in)) {
          throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
        }
        const extraSelectArgs = makeArgs35(args);
        /**
         * An optimisation - if all our dependencies are
         * compatible with the expression's class plan then we
         * can inline ourselves into that, otherwise we must
         * issue the query separately.
         */
        const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
        const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
        const selectArgs = [{
          step: $row.record()
        }, ...extraSelectArgs];
        if (resource_person_computed_inout_outPgResource.isUnique && !resource_person_computed_inout_outPgResource.codec.attributes && typeof resource_person_computed_inout_outPgResource.from === "function") {
          // This is a scalar computed attribute, let's inline the expression
          const placeholders = selectArgs.map((arg, i) => {
            if (i === 0) {
              return $row.getClassStep().alias;
            } else if ("pgCodec" in arg && arg.pgCodec) {
              return $row.placeholder(arg.step, arg.pgCodec);
            } else {
              return $row.placeholder(arg.step);
            }
          });
          return pgClassExpression($row, resource_person_computed_inout_outPgResource.codec)`${resource_person_computed_inout_outPgResource.from(...placeholders.map(placeholder => ({
            placeholder
          })))}`;
        }
        // PERF: or here, if scalar add select to `$row`?
        return resource_person_computed_inout_outPgResource.execute(selectArgs);
      },
      args: {
        ino: undefined
      }
    },
    exists: {
      plan($in, args, _info) {
        if (!hasRecord($in)) {
          throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
        }
        const extraSelectArgs = makeArgs36(args);
        /**
         * An optimisation - if all our dependencies are
         * compatible with the expression's class plan then we
         * can inline ourselves into that, otherwise we must
         * issue the query separately.
         */
        const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
        const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
        const selectArgs = [{
          step: $row.record()
        }, ...extraSelectArgs];
        if (resource_person_existsPgResource.isUnique && !resource_person_existsPgResource.codec.attributes && typeof resource_person_existsPgResource.from === "function") {
          // This is a scalar computed attribute, let's inline the expression
          const placeholders = selectArgs.map((arg, i) => {
            if (i === 0) {
              return $row.getClassStep().alias;
            } else if ("pgCodec" in arg && arg.pgCodec) {
              return $row.placeholder(arg.step, arg.pgCodec);
            } else {
              return $row.placeholder(arg.step);
            }
          });
          return pgClassExpression($row, resource_person_existsPgResource.codec)`${resource_person_existsPgResource.from(...placeholders.map(placeholder => ({
            placeholder
          })))}`;
        }
        // PERF: or here, if scalar add select to `$row`?
        return resource_person_existsPgResource.execute(selectArgs);
      },
      args: {
        email: undefined
      }
    },
    computedFirstArgInoutOut($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs37(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_computed_first_arg_inout_outPgResource.isUnique && !resource_person_computed_first_arg_inout_outPgResource.codec.attributes && typeof resource_person_computed_first_arg_inout_outPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_computed_first_arg_inout_outPgResource.codec)`${resource_person_computed_first_arg_inout_outPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_computed_first_arg_inout_outPgResource.execute(selectArgs);
    },
    computedComplex: {
      plan($in, args, _info) {
        if (!hasRecord($in)) {
          throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
        }
        const extraSelectArgs = makeArgs38(args);
        /**
         * An optimisation - if all our dependencies are
         * compatible with the expression's class plan then we
         * can inline ourselves into that, otherwise we must
         * issue the query separately.
         */
        const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
        const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
        const selectArgs = [{
          step: $row.record()
        }, ...extraSelectArgs];
        if (resource_person_computed_complexPgResource.isUnique && !resource_person_computed_complexPgResource.codec.attributes && typeof resource_person_computed_complexPgResource.from === "function") {
          // This is a scalar computed attribute, let's inline the expression
          const placeholders = selectArgs.map((arg, i) => {
            if (i === 0) {
              return $row.getClassStep().alias;
            } else if ("pgCodec" in arg && arg.pgCodec) {
              return $row.placeholder(arg.step, arg.pgCodec);
            } else {
              return $row.placeholder(arg.step);
            }
          });
          return pgClassExpression($row, resource_person_computed_complexPgResource.codec)`${resource_person_computed_complexPgResource.from(...placeholders.map(placeholder => ({
            placeholder
          })))}`;
        }
        // PERF: or here, if scalar add select to `$row`?
        return resource_person_computed_complexPgResource.execute(selectArgs);
      },
      args: {
        a: undefined,
        b: undefined
      }
    },
    firstPost($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs39(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_first_postPgResource.isUnique && !resource_person_first_postPgResource.codec.attributes && typeof resource_person_first_postPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_first_postPgResource.codec)`${resource_person_first_postPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_first_postPgResource.execute(selectArgs);
    },
    computedFirstArgInout($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs40(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_computed_first_arg_inoutPgResource.isUnique && !resource_person_computed_first_arg_inoutPgResource.codec.attributes && typeof resource_person_computed_first_arg_inoutPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_computed_first_arg_inoutPgResource.codec)`${resource_person_computed_first_arg_inoutPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_computed_first_arg_inoutPgResource.execute(selectArgs);
    },
    friends: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs12($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_friends_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_friends_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_friends_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_friends_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_friends_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
            return null;
          }
        }
      }
    },
    typeFunctionConnection: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs13($parent, args, info);
        return connection($select, $item => $item, $item => $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_typeFunctionConnection_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_typeFunctionConnection_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_typeFunctionConnection_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_typeFunctionConnection_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_typeFunctionConnection_after_applyPlan
        }
      }
    },
    typeFunction: {
      plan($in, args, _info) {
        if (!hasRecord($in)) {
          throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
        }
        const extraSelectArgs = makeArgs43(args);
        /**
         * An optimisation - if all our dependencies are
         * compatible with the expression's class plan then we
         * can inline ourselves into that, otherwise we must
         * issue the query separately.
         */
        const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
        const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
        const selectArgs = [{
          step: $row.record()
        }, ...extraSelectArgs];
        if (resource_person_type_functionPgResource.isUnique && !resource_person_type_functionPgResource.codec.attributes && typeof resource_person_type_functionPgResource.from === "function") {
          // This is a scalar computed attribute, let's inline the expression
          const placeholders = selectArgs.map((arg, i) => {
            if (i === 0) {
              return $row.getClassStep().alias;
            } else if ("pgCodec" in arg && arg.pgCodec) {
              return $row.placeholder(arg.step, arg.pgCodec);
            } else {
              return $row.placeholder(arg.step);
            }
          });
          return pgClassExpression($row, resource_person_type_functionPgResource.codec)`${resource_person_type_functionPgResource.from(...placeholders.map(placeholder => ({
            placeholder
          })))}`;
        }
        // PERF: or here, if scalar add select to `$row`?
        return resource_person_type_functionPgResource.execute(selectArgs);
      },
      args: {
        id: undefined
      }
    },
    typeFunctionList($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs44(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_person_type_function_listPgResource.isUnique && !resource_person_type_function_listPgResource.codec.attributes && typeof resource_person_type_function_listPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_person_type_function_listPgResource.codec)`${resource_person_type_function_listPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_person_type_function_listPgResource.execute(selectArgs);
    },
    rowId($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("person_full_name");
    },
    aliases($record) {
      return $record.get("aliases");
    },
    about($record) {
      return $record.get("about");
    },
    email($record) {
      return $record.get("email");
    },
    site($record) {
      const $plan = $record.get("site");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_wrappedUrlPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    config($record) {
      return $record.get("config");
    },
    lastLoginFromIp($record) {
      return $record.get("last_login_from_ip");
    },
    lastLoginFromSubnet($record) {
      return $record.get("last_login_from_subnet");
    },
    userMac($record) {
      return $record.get("user_mac");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    personSecretByPersonId($record) {
      return pgResource_person_secretPgResource.get({
        person_id: $record.get("id")
      });
    },
    leftArmByPersonId($record) {
      return pgResource_left_armPgResource.get({
        person_id: $record.get("id")
      });
    },
    compoundKeysByPersonId1: {
      plan($record) {
        const $records = pgResource_compound_keyPgResource.find({
          person_id_1: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId1_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId1_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId1_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId1_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId1_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    compoundKeysByPersonId2: {
      plan($record) {
        const $records = pgResource_compound_keyPgResource.find({
          person_id_2: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId2_first_applyPlan
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId2_last_applyPlan
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId2_offset_applyPlan
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId2_before_applyPlan
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan: Person_compoundKeysByPersonId2_after_applyPlan
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    }
  },
  PersonComputedOutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    o1($record) {
      return $record.get("o1");
    },
    o2($record) {
      return $record.get("o2");
    }
  },
  PersonComputedInoutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    ino($record) {
      return $record.get("ino");
    },
    o($record) {
      return $record.get("o");
    }
  },
  PersonComputedFirstArgInoutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    person($record) {
      const $plan = $record.get("person");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    o($record) {
      return $record.get("o");
    }
  },
  PersonComputedComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    x($record) {
      return $record.get("x");
    },
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  CompoundType: {
    __assertStep: assertPgClassSingleStep,
    computedField($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs45(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_compound_type_computed_fieldPgResource.isUnique && !resource_compound_type_computed_fieldPgResource.codec.attributes && typeof resource_compound_type_computed_fieldPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_compound_type_computed_fieldPgResource.codec)`${resource_compound_type_computed_fieldPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_compound_type_computed_fieldPgResource.execute(selectArgs);
    },
    a($record) {
      return $record.get("a");
    },
    b($record) {
      return $record.get("b");
    },
    c($record) {
      return $record.get("c");
    },
    d($record) {
      return $record.get("d");
    },
    e($record) {
      return $record.get("e");
    },
    f($record) {
      return $record.get("f");
    },
    g($record) {
      return $record.get("g");
    },
    fooBar($record) {
      return $record.get("foo_bar");
    }
  },
  Color: {
    RED: {
      value: "red"
    },
    GREEN: {
      value: "green"
    },
    BLUE: {
      value: "blue"
    }
  },
  EnumCaps: {
    _0_BAR: {
      value: "0_BAR"
    }
  },
  EnumWithEmptyString: {
    _EMPTY_: {
      value: ""
    },
    ONE: {
      value: "one"
    },
    TWO: {
      value: "two"
    }
  },
  Interval: {
    __assertStep: assertExecutableStep,
    seconds: Interval_secondsPlan,
    minutes: Interval_minutesPlan,
    hours: Interval_hoursPlan,
    days: Interval_daysPlan,
    months: Interval_monthsPlan,
    years: Interval_yearsPlan
  },
  Post: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    headline($record) {
      return $record.get("headline");
    },
    body($record) {
      return $record.get("body");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    enums($record) {
      return $record.get("enums");
    },
    comptypes($record) {
      const $val = $record.get("comptypes");
      const $select = pgSelectFromRecords(resource_frmcdc_comptypePgResource, $val);
      $select.setTrusted();
      return $select;
    }
  },
  AnEnum: {
    AWAITING: {
      value: "awaiting"
    },
    REJECTED: {
      value: "rejected"
    },
    PUBLISHED: {
      value: "published"
    },
    ASTERISK: {
      value: "*"
    },
    ASTERISK_ASTERISK: {
      value: "**"
    },
    ASTERISK_ASTERISK_ASTERISK: {
      value: "***"
    },
    FOO_ASTERISK: {
      value: "foo*"
    },
    FOO_ASTERISK_: {
      value: "foo*_"
    },
    _FOO_ASTERISK: {
      value: "_foo*"
    },
    ASTERISK_BAR: {
      value: "*bar"
    },
    ASTERISK_BAR_: {
      value: "*bar_"
    },
    _ASTERISK_BAR_: {
      value: "_*bar_"
    },
    ASTERISK_BAZ_ASTERISK: {
      value: "*baz*"
    },
    _ASTERISK_BAZ_ASTERISK_: {
      value: "_*baz*_"
    },
    PERCENT: {
      value: "%"
    },
    GREATER_THAN_OR_EQUAL: {
      value: ">="
    },
    LIKE: {
      value: "~~"
    },
    DOLLAR: {
      value: "$"
    }
  },
  Comptype: {
    __assertStep: assertPgClassSingleStep,
    schedule($record) {
      return $record.get("schedule");
    },
    isOptimised($record) {
      return $record.get("is_optimised");
    }
  },
  PeopleConnection: {
    __assertStep: ConnectionStep,
    nodes: PeopleConnection_nodesPlan,
    edges: PeopleConnection_edgesPlan,
    pageInfo: PeopleConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  PeopleEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PageInfo: {
    __assertStep: assertPageInfoCapableStep,
    hasNextPage: PageInfo_hasNextPagePlan,
    hasPreviousPage: PageInfo_hasPreviousPagePlan,
    startCursor($pageInfo) {
      return $pageInfo.startCursor();
    },
    endCursor($pageInfo) {
      return $pageInfo.endCursor();
    }
  },
  PeopleOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    COMPUTED_OUT_ASC: {
      applyPlan(step) {
        if (typeof resource_person_computed_outPgResource.from !== "function") {
          throw new Error("Invalid computed attribute 'from'");
        }
        const expression = sql`${resource_person_computed_outPgResource.from({
          placeholder: step.alias
        })}`;
        step.orderBy({
          codec: resource_person_computed_outPgResource.codec,
          fragment: expression,
          direction: "asc".toUpperCase()
        });
      }
    },
    COMPUTED_OUT_DESC: {
      applyPlan(step) {
        if (typeof resource_person_computed_outPgResource.from !== "function") {
          throw new Error("Invalid computed attribute 'from'");
        }
        const expression = sql`${resource_person_computed_outPgResource.from({
          placeholder: step.alias
        })}`;
        step.orderBy({
          codec: resource_person_computed_outPgResource.codec,
          fragment: expression,
          direction: "desc".toUpperCase()
        });
      }
    },
    FIRST_NAME_ASC: {
      applyPlan(step) {
        if (typeof resource_person_first_namePgResource.from !== "function") {
          throw new Error("Invalid computed attribute 'from'");
        }
        const expression = sql`${resource_person_first_namePgResource.from({
          placeholder: step.alias
        })}`;
        step.orderBy({
          codec: resource_person_first_namePgResource.codec,
          fragment: expression,
          direction: "asc".toUpperCase()
        });
      }
    },
    FIRST_NAME_DESC: {
      applyPlan(step) {
        if (typeof resource_person_first_namePgResource.from !== "function") {
          throw new Error("Invalid computed attribute 'from'");
        }
        const expression = sql`${resource_person_first_namePgResource.from({
          placeholder: step.alias
        })}`;
        step.orderBy({
          codec: resource_person_first_namePgResource.codec,
          fragment: expression,
          direction: "desc".toUpperCase()
        });
      }
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques9[0].attributes.forEach(attributeName => {
          const attribute = personCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques9[0].attributes.forEach(attributeName => {
          const attribute = personCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    NAME_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_full_name",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NAME_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_full_name",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ABOUT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "about",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ABOUT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "about",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    EMAIL_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "email",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    EMAIL_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "email",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    SITE_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "site",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    SITE_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "site",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CONFIG_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "config",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CONFIG_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "config",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    LAST_LOGIN_FROM_IP_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "last_login_from_ip",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    LAST_LOGIN_FROM_IP_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "last_login_from_ip",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    LAST_LOGIN_FROM_SUBNET_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "last_login_from_subnet",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    LAST_LOGIN_FROM_SUBNET_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "last_login_from_subnet",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_MAC_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "user_mac",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_MAC_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "user_mac",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CREATED_AT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "created_at",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CREATED_AT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "created_at",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  TypesConnection: {
    __assertStep: ConnectionStep,
    nodes: TypesConnection_nodesPlan,
    edges: TypesConnection_edgesPlan,
    pageInfo: TypesConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  Type: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    smallint($record) {
      return $record.get("smallint");
    },
    bigint($record) {
      return $record.get("bigint");
    },
    numeric($record) {
      return $record.get("numeric");
    },
    decimal($record) {
      return $record.get("decimal");
    },
    boolean($record) {
      return $record.get("boolean");
    },
    varchar($record) {
      return $record.get("varchar");
    },
    enum($record) {
      return $record.get("enum");
    },
    enumArray($record) {
      return $record.get("enum_array");
    },
    domain($record) {
      return $record.get("domain");
    },
    domain2($record) {
      return $record.get("domain2");
    },
    textArray($record) {
      return $record.get("text_array");
    },
    json($record) {
      return $record.get("json");
    },
    jsonb($record) {
      return $record.get("jsonb");
    },
    nullableRange($record) {
      return $record.get("nullable_range");
    },
    numrange($record) {
      return $record.get("numrange");
    },
    daterange($record) {
      return $record.get("daterange");
    },
    anIntRange($record) {
      return $record.get("an_int_range");
    },
    timestamp($record) {
      return $record.get("timestamp");
    },
    timestamptz($record) {
      return $record.get("timestamptz");
    },
    date($record) {
      return $record.get("date");
    },
    time($record) {
      return $record.get("time");
    },
    timetz($record) {
      return $record.get("timetz");
    },
    interval($record) {
      return $record.get("interval");
    },
    intervalArray($record) {
      return $record.get("interval_array");
    },
    money($record) {
      return $record.get("money");
    },
    compoundType($record) {
      const $plan = $record.get("compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (true) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    nestedCompoundType($record) {
      const $plan = $record.get("nested_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_nestedCompoundTypePgResource, $plan);
      if (true) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    nullableCompoundType($record) {
      const $plan = $record.get("nullable_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    nullableNestedCompoundType($record) {
      const $plan = $record.get("nullable_nested_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_nestedCompoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    point($record) {
      return $record.get("point");
    },
    nullablePoint($record) {
      return $record.get("nullablePoint");
    },
    inet($record) {
      return $record.get("inet");
    },
    cidr($record) {
      return $record.get("cidr");
    },
    macaddr($record) {
      return $record.get("macaddr");
    },
    regproc($record) {
      return $record.get("regproc");
    },
    regprocedure($record) {
      return $record.get("regprocedure");
    },
    regoper($record) {
      return $record.get("regoper");
    },
    regoperator($record) {
      return $record.get("regoperator");
    },
    regclass($record) {
      return $record.get("regclass");
    },
    regtype($record) {
      return $record.get("regtype");
    },
    regconfig($record) {
      return $record.get("regconfig");
    },
    regdictionary($record) {
      return $record.get("regdictionary");
    },
    textArrayDomain($record) {
      return $record.get("text_array_domain");
    },
    int8ArrayDomain($record) {
      return $record.get("int8_array_domain");
    },
    bytea($record) {
      return $record.get("bytea");
    },
    byteaArray($record) {
      return $record.get("bytea_array");
    },
    ltree($record) {
      return $record.get("ltree");
    },
    ltreeArray($record) {
      return $record.get("ltree_array");
    }
  },
  BigFloatRange: {},
  BigFloatRangeBound: {},
  DateRange: {},
  DateRangeBound: {},
  AnIntRange: {},
  AnIntRangeBound: {},
  NestedCompoundType: {
    __assertStep: assertPgClassSingleStep,
    a($record) {
      const $plan = $record.get("a");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    b($record) {
      const $plan = $record.get("b");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    bazBuz($record) {
      return $record.get("baz_buz");
    }
  },
  Point: {},
  TypesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  WrappedUrl: {
    __assertStep: assertPgClassSingleStep,
    url($record) {
      return $record.get("url");
    }
  },
  LeftArm: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.LeftArm.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.LeftArm.codec.name].encode);
    },
    rowId($record) {
      return $record.get("id");
    },
    personId($record) {
      return $record.get("person_id");
    },
    lengthInMetres($record) {
      return $record.get("length_in_metres");
    },
    mood($record) {
      return $record.get("mood");
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("person_id")
      });
    }
  },
  CompoundKeysConnection: {
    __assertStep: ConnectionStep,
    nodes: CompoundKeysConnection_nodesPlan,
    edges: CompoundKeysConnection_edgesPlan,
    pageInfo: CompoundKeysConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  CompoundKey: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.CompoundKey.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.CompoundKey.codec.name].encode);
    },
    personId2($record) {
      return $record.get("person_id_2");
    },
    personId1($record) {
      return $record.get("person_id_1");
    },
    extra($record) {
      return $record.get("extra");
    },
    personByPersonId1($record) {
      return pgResource_personPgResource.get({
        id: $record.get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return pgResource_personPgResource.get({
        id: $record.get("person_id_2")
      });
    }
  },
  CompoundKeysEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  CompoundKeysOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques3[0].attributes.forEach(attributeName => {
          const attribute = compoundKeyCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques3[0].attributes.forEach(attributeName => {
          const attribute = compoundKeyCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PERSON_ID_2_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id_2",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_2_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id_2",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_1_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id_1",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_1_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id_1",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    EXTRA_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "extra",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    EXTRA_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "extra",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  CompoundKeyCondition: {
    personId2: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "person_id_2",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id_2",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), compoundKeyAttributes.person_id_2.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId1: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "person_id_1",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id_1",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), compoundKeyAttributes.person_id_1.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    extra: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "extra",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "extra",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), compoundKeyAttributes.extra.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  NullTestRecord: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.NullTestRecord.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.NullTestRecord.codec.name].encode);
    },
    rowId($record) {
      return $record.get("id");
    },
    nullableText($record) {
      return $record.get("nullable_text");
    },
    nullableInt($record) {
      return $record.get("nullable_int");
    },
    nonNullText($record) {
      return $record.get("non_null_text");
    }
  },
  Issue756: {
    __assertStep: assertPgClassSingleStep,
    id($parent) {
      const specifier = nodeIdHandlerByTypeName.Issue756.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.Issue756.codec.name].encode);
    },
    rowId($record) {
      return $record.get("id");
    },
    ts($record) {
      return $record.get("ts");
    }
  },
  FuncOutSetofConnection: {
    __assertStep: ConnectionStep,
    nodes: FuncOutSetofConnection_nodesPlan,
    edges: FuncOutSetofConnection_edgesPlan,
    pageInfo: FuncOutSetofConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  FuncOutSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncReturnsTableOneColConnection: {
    __assertStep: ConnectionStep,
    nodes: FuncReturnsTableOneColConnection_nodesPlan,
    edges: FuncReturnsTableOneColConnection_edgesPlan,
    pageInfo: FuncReturnsTableOneColConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  FuncReturnsTableOneColEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    firstOut($record) {
      return $record.get("first_out");
    },
    secondOut($record) {
      return $record.get("second_out");
    }
  },
  FuncOutOutSetofConnection: {
    __assertStep: ConnectionStep,
    nodes: FuncOutOutSetofConnection_nodesPlan,
    edges: FuncOutOutSetofConnection_edgesPlan,
    pageInfo: FuncOutOutSetofConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  FuncOutOutSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    o1($record) {
      return $record.get("o1");
    },
    o2($record) {
      return $record.get("o2");
    }
  },
  FuncOutOutSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg2($record) {
      return $record.get("column2");
    }
  },
  FuncOutUnnamedOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    o2($record) {
      return $record.get("o2");
    },
    arg3($record) {
      return $record.get("column3");
    }
  },
  FuncReturnsTableMultiColConnection: {
    __assertStep: ConnectionStep,
    nodes: FuncReturnsTableMultiColConnection_nodesPlan,
    edges: FuncReturnsTableMultiColConnection_edgesPlan,
    pageInfo: FuncReturnsTableMultiColConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  FuncReturnsTableMultiColRecord: {
    __assertStep: assertPgClassSingleStep,
    col1($record) {
      return $record.get("col1");
    },
    col2($record) {
      return $record.get("col2");
    }
  },
  FuncReturnsTableMultiColEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  IntSetQueryConnection: {
    __assertStep: ConnectionStep,
    nodes: IntSetQueryConnection_nodesPlan,
    edges: IntSetQueryConnection_edgesPlan,
    pageInfo: IntSetQueryConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  IntSetQueryEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SearchTestSummariesRecord: {
    __assertStep: assertPgClassSingleStep,
    id($record) {
      return $record.get("id");
    },
    totalDuration($record) {
      return $record.get("total_duration");
    }
  },
  FloatRangeInput: {
    start: undefined,
    end: undefined
  },
  FloatRangeBoundInput: {
    value: undefined,
    inclusive: undefined
  },
  FuncOutOutCompoundTypeRecord: {
    __assertStep: assertPgClassSingleStep,
    o1($record) {
      return $record.get("o1");
    },
    o2($record) {
      const $plan = $record.get("o2");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  QueryOutputTwoRowsRecord: {
    __assertStep: assertPgClassSingleStep,
    txt($record) {
      return $record.get("txt");
    },
    leftArm($record) {
      const $plan = $record.get("left_arm");
      const $select = pgSelectSingleFromRecord(pgResource_left_armPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    post($record) {
      const $plan = $record.get("post");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_postPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  CompoundTypesConnection: {
    __assertStep: ConnectionStep,
    nodes: CompoundTypesConnection_nodesPlan,
    edges: CompoundTypesConnection_edgesPlan,
    pageInfo: CompoundTypesConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  CompoundTypesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    x($record) {
      return $record.get("x");
    },
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  FuncOutComplexSetofConnection: {
    __assertStep: ConnectionStep,
    nodes: FuncOutComplexSetofConnection_nodesPlan,
    edges: FuncOutComplexSetofConnection_edgesPlan,
    pageInfo: FuncOutComplexSetofConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  FuncOutComplexSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    x($record) {
      return $record.get("x");
    },
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  FuncOutComplexSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PersonCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "person_full_name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_full_name",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.person_full_name.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    aliases: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "aliases",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "aliases",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.aliases.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    about: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "about",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "about",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.about.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "email",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "email",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.email.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    site: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "site",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "site",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.site.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    config: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "config",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "config",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.config.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromIp: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "last_login_from_ip",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "last_login_from_ip",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.last_login_from_ip.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromSubnet: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "last_login_from_subnet",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "last_login_from_subnet",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.last_login_from_subnet.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userMac: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "user_mac",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "user_mac",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.user_mac.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personAttributes.created_at.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    computedOut: {
      applyPlan($condition, val) {
        if (typeof resource_person_computed_outPgResource.from !== "function") {
          throw new Error("Invalid computed attribute 'from'");
        }
        const expression = sql`${resource_person_computed_outPgResource.from({
          placeholder: $condition.alias
        })}`;
        if (val.getRaw().evalIs(null)) {
          $condition.where(sql`${expression} is null`);
        } else {
          $condition.where(sql`${expression} = ${$condition.placeholder(val.get(), resource_person_computed_outPgResource.codec)}`);
        }
      }
    }
  },
  WrappedUrlInput: {
    url: {
      applyPlan($insert, val) {
        $insert.set("url", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MyTablesConnection: {
    __assertStep: ConnectionStep,
    nodes: MyTablesConnection_nodesPlan,
    edges: MyTablesConnection_edgesPlan,
    pageInfo: MyTablesConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  MyTablesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  MyTablesOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques[0].attributes.forEach(attributeName => {
          const attribute = myTableCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques[0].attributes.forEach(attributeName => {
          const attribute = myTableCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    JSON_DATA_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "json_data",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    JSON_DATA_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "json_data",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  MyTableCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), myTableAttributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    jsonData: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "json_data",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "json_data",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), myTableAttributes.json_data.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  PersonSecretsConnection: {
    __assertStep: ConnectionStep,
    nodes: PersonSecretsConnection_nodesPlan,
    edges: PersonSecretsConnection_edgesPlan,
    pageInfo: PersonSecretsConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  PersonSecretsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PersonSecretsOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques2[0].attributes.forEach(attributeName => {
          const attribute = personSecretCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques2[0].attributes.forEach(attributeName => {
          const attribute = personSecretCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PERSON_ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    SECRET_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "sekrit",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    SECRET_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "sekrit",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  PersonSecretCondition: {
    personId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personSecretAttributes.person_id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    secret: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "sekrit",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "sekrit",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), personSecretAttributes.sekrit.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  NullTestRecordsConnection: {
    __assertStep: ConnectionStep,
    nodes: NullTestRecordsConnection_nodesPlan,
    edges: NullTestRecordsConnection_edgesPlan,
    pageInfo: NullTestRecordsConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  NullTestRecordsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  NullTestRecordsOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques4[0].attributes.forEach(attributeName => {
          const attribute = nullTestRecordCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques4[0].attributes.forEach(attributeName => {
          const attribute = nullTestRecordCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    NULLABLE_TEXT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "nullable_text",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NULLABLE_TEXT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "nullable_text",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NULLABLE_INT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "nullable_int",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NULLABLE_INT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "nullable_int",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NON_NULL_TEXT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "non_null_text",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NON_NULL_TEXT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "non_null_text",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  NullTestRecordCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), nullTestRecordAttributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableText: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "nullable_text",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "nullable_text",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), nullTestRecordAttributes.nullable_text.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableInt: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "nullable_int",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "nullable_int",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), nullTestRecordAttributes.nullable_int.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nonNullText: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "non_null_text",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "non_null_text",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), nullTestRecordAttributes.non_null_text.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  EdgeCasesConnection: {
    __assertStep: ConnectionStep,
    nodes: EdgeCasesConnection_nodesPlan,
    edges: EdgeCasesConnection_edgesPlan,
    pageInfo: EdgeCasesConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  EdgeCase: {
    __assertStep: assertPgClassSingleStep,
    computed($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs46(args);
      /**
       * An optimisation - if all our dependencies are
       * compatible with the expression's class plan then we
       * can inline ourselves into that, otherwise we must
       * issue the query separately.
       */
      const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
      const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
      const selectArgs = [{
        step: $row.record()
      }, ...extraSelectArgs];
      if (resource_edge_case_computedPgResource.isUnique && !resource_edge_case_computedPgResource.codec.attributes && typeof resource_edge_case_computedPgResource.from === "function") {
        // This is a scalar computed attribute, let's inline the expression
        const placeholders = selectArgs.map((arg, i) => {
          if (i === 0) {
            return $row.getClassStep().alias;
          } else if ("pgCodec" in arg && arg.pgCodec) {
            return $row.placeholder(arg.step, arg.pgCodec);
          } else {
            return $row.placeholder(arg.step);
          }
        });
        return pgClassExpression($row, resource_edge_case_computedPgResource.codec)`${resource_edge_case_computedPgResource.from(...placeholders.map(placeholder => ({
          placeholder
        })))}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_edge_case_computedPgResource.execute(selectArgs);
    },
    notNullHasDefault($record) {
      return $record.get("not_null_has_default");
    },
    wontCastEasy($record) {
      return $record.get("wont_cast_easy");
    },
    rowId($record) {
      return $record.get("row_id");
    }
  },
  EdgeCasesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  EdgeCasesOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    NOT_NULL_HAS_DEFAULT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "not_null_has_default",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    NOT_NULL_HAS_DEFAULT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "not_null_has_default",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    WONT_CAST_EASY_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "wont_cast_easy",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    WONT_CAST_EASY_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "wont_cast_easy",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ROW_ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "row_id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ROW_ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "row_id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  EdgeCaseCondition: {
    notNullHasDefault: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "not_null_has_default",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "not_null_has_default",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), edgeCaseAttributes.not_null_has_default.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    wontCastEasy: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "wont_cast_easy",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "wont_cast_easy",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), edgeCaseAttributes.wont_cast_easy.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "row_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "row_id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), edgeCaseAttributes.row_id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  LeftArmsConnection: {
    __assertStep: ConnectionStep,
    nodes: LeftArmsConnection_nodesPlan,
    edges: LeftArmsConnection_edgesPlan,
    pageInfo: LeftArmsConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  LeftArmsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  LeftArmsOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques6[0].attributes.forEach(attributeName => {
          const attribute = leftArmCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques6[0].attributes.forEach(attributeName => {
          const attribute = leftArmCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    PERSON_ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "person_id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    LENGTH_IN_METRES_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "length_in_metres",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    LENGTH_IN_METRES_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "length_in_metres",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    MOOD_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "mood",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    MOOD_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "mood",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  LeftArmCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), leftArmAttributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), leftArmAttributes.person_id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lengthInMetres: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "length_in_metres",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "length_in_metres",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), leftArmAttributes.length_in_metres.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    mood: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "mood",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "mood",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), leftArmAttributes.mood.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Issue756SConnection: {
    __assertStep: ConnectionStep,
    nodes: Issue756SConnection_nodesPlan,
    edges: Issue756SConnection_edgesPlan,
    pageInfo: Issue756SConnection_pageInfoPlan,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  Issue756SEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  Issue756SOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        uniques7[0].attributes.forEach(attributeName => {
          const attribute = issue756Codec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        uniques7[0].attributes.forEach(attributeName => {
          const attribute = issue756Codec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step.alias}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    TS_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "ts",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    TS_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "ts",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  Issue756Condition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), issue756Attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    ts: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "ts",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "ts",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), issue756Attributes.ts.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Mutation: {
    __assertStep: __ValueStep,
    mutationOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs47(args, ["input"]);
        const $result = resource_mutation_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOut_input_applyPlan
        }
      }
    },
    mutationOutSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs48(args, ["input"]);
        const $result = resource_mutation_out_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutSetof_input_applyPlan
        }
      }
    },
    mutationOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs49(args, ["input"]);
        const $result = resource_mutation_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutUnnamed_input_applyPlan
        }
      }
    },
    noArgsMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs50(args, ["input"]);
        const $result = resource_no_args_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_noArgsMutation_input_applyPlan
        }
      }
    },
    mutationInOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs51(args, ["input"]);
        const $result = resource_mutation_in_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationInOut_input_applyPlan
        }
      }
    },
    mutationReturnsTableOneCol: {
      plan($root, args, _info) {
        const selectArgs = makeArgs52(args, ["input"]);
        const $result = resource_mutation_returns_table_one_colPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationReturnsTableOneCol_input_applyPlan
        }
      }
    },
    jsonIdentityMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs53(args, ["input"]);
        const $result = resource_json_identity_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_jsonIdentityMutation_input_applyPlan
        }
      }
    },
    jsonbIdentityMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs54(args, ["input"]);
        const $result = resource_jsonb_identity_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_jsonbIdentityMutation_input_applyPlan
        }
      }
    },
    jsonbIdentityMutationPlpgsql: {
      plan($root, args, _info) {
        const selectArgs = makeArgs55(args, ["input"]);
        const $result = resource_jsonb_identity_mutation_plpgsqlPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_jsonbIdentityMutationPlpgsql_input_applyPlan
        }
      }
    },
    jsonbIdentityMutationPlpgsqlWithDefault: {
      plan($root, args, _info) {
        const selectArgs = makeArgs56(args, ["input"]);
        const $result = resource_jsonb_identity_mutation_plpgsql_with_defaultPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_jsonbIdentityMutationPlpgsqlWithDefault_input_applyPlan
        }
      }
    },
    mutationInInout: {
      plan($root, args, _info) {
        const selectArgs = makeArgs57(args, ["input"]);
        const $result = resource_mutation_in_inoutPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationInInout_input_applyPlan
        }
      }
    },
    mutationOutOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs58(args, ["input"]);
        const $result = resource_mutation_out_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutOut_input_applyPlan
        }
      }
    },
    mutationOutOutSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs59(args, ["input"]);
        const $result = resource_mutation_out_out_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutOutSetof_input_applyPlan
        }
      }
    },
    mutationOutOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs60(args, ["input"]);
        const $result = resource_mutation_out_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutOutUnnamed_input_applyPlan
        }
      }
    },
    intSetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs61(args, ["input"]);
        const $result = resource_int_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_intSetMutation_input_applyPlan
        }
      }
    },
    mutationOutUnnamedOutOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs62(args, ["input"]);
        const $result = resource_mutation_out_unnamed_out_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutUnnamedOutOutUnnamed_input_applyPlan
        }
      }
    },
    mutationReturnsTableMultiCol: {
      plan($root, args, _info) {
        const selectArgs = makeArgs63(args, ["input"]);
        const $result = resource_mutation_returns_table_multi_colPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationReturnsTableMultiCol_input_applyPlan
        }
      }
    },
    leftArmIdentity: {
      plan($root, args, _info) {
        const selectArgs = makeArgs64(args, ["input"]);
        const $result = resource_left_arm_identityPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_leftArmIdentity_input_applyPlan
        }
      }
    },
    issue756Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs65(args, ["input"]);
        const $result = resource_issue756_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_issue756Mutation_input_applyPlan
        }
      }
    },
    issue756SetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs66(args, ["input"]);
        const $result = resource_issue756_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_issue756SetMutation_input_applyPlan
        }
      }
    },
    typesMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs67(args, ["input"]);
        const $result = resource_types_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_typesMutation_input_applyPlan
        }
      }
    },
    mutationOutOutCompoundType: {
      plan($root, args, _info) {
        const selectArgs = makeArgs68(args, ["input"]);
        const $result = resource_mutation_out_out_compound_typePgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutOutCompoundType_input_applyPlan
        }
      }
    },
    tableMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs69(args, ["input"]);
        const $result = resource_table_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_tableMutation_input_applyPlan
        }
      }
    },
    mutationOutComplex: {
      plan($root, args, _info) {
        const selectArgs = makeArgs70(args, ["input"]);
        const $result = resource_mutation_out_complexPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutComplex_input_applyPlan
        }
      }
    },
    mutationOutComplexSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs71(args, ["input"]);
        const $result = resource_mutation_out_complex_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutComplexSetof_input_applyPlan
        }
      }
    },
    mutationOutTable: {
      plan($root, args, _info) {
        const selectArgs = makeArgs72(args, ["input"]);
        const $result = resource_mutation_out_tablePgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutTable_input_applyPlan
        }
      }
    },
    mutationOutTableSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs73(args, ["input"]);
        const $result = resource_mutation_out_table_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_mutationOutTableSetof_input_applyPlan
        }
      }
    },
    tableSetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs74(args, ["input"]);
        const $result = resource_table_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_tableSetMutation_input_applyPlan
        }
      }
    },
    createMyTable: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_my_tablePgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createMyTable_input_applyPlan
        }
      }
    },
    createPersonSecret: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_person_secretPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createPersonSecret_input_applyPlan
        }
      }
    },
    createCompoundKey: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_compound_keyPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createCompoundKey_input_applyPlan
        }
      }
    },
    createNullTestRecord: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_null_test_recordPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createNullTestRecord_input_applyPlan
        }
      }
    },
    createEdgeCase: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_edge_casePgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createEdgeCase_input_applyPlan
        }
      }
    },
    createLeftArm: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_left_armPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createLeftArm_input_applyPlan
        }
      }
    },
    createIssue756: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_issue756PgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createIssue756_input_applyPlan
        }
      }
    },
    createPerson: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(pgResource_personPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan: Mutation_createPerson_input_applyPlan
        }
      }
    },
    updateMyTable: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_my_tablePgResource, specFromArgs(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateMyTable_input_applyPlan
        }
      }
    },
    updateMyTableByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_my_tablePgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateMyTableByRowId_input_applyPlan
        }
      }
    },
    updatePersonSecret: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_person_secretPgResource, specFromArgs2(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updatePersonSecret_input_applyPlan
        }
      }
    },
    updatePersonSecretByPersonId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_person_secretPgResource, {
            person_id: args.get(['input', "personId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updatePersonSecretByPersonId_input_applyPlan
        }
      }
    },
    updateCompoundKey: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_compound_keyPgResource, specFromArgs3(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateCompoundKey_input_applyPlan
        }
      }
    },
    updateCompoundKeyByPersonId1AndPersonId2: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_compound_keyPgResource, {
            person_id_1: args.get(['input', "personId1"]),
            person_id_2: args.get(['input', "personId2"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateCompoundKeyByPersonId1AndPersonId2_input_applyPlan
        }
      }
    },
    updateNullTestRecord: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_null_test_recordPgResource, specFromArgs4(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateNullTestRecord_input_applyPlan
        }
      }
    },
    updateNullTestRecordByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_null_test_recordPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateNullTestRecordByRowId_input_applyPlan
        }
      }
    },
    updateLeftArm: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_left_armPgResource, specFromArgs5(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateLeftArm_input_applyPlan
        }
      }
    },
    updateLeftArmByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_left_armPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateLeftArmByRowId_input_applyPlan
        }
      }
    },
    updateLeftArmByPersonId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_left_armPgResource, {
            person_id: args.get(['input', "personId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateLeftArmByPersonId_input_applyPlan
        }
      }
    },
    updateIssue756: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_issue756PgResource, specFromArgs6(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateIssue756_input_applyPlan
        }
      }
    },
    updateIssue756ByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_issue756PgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updateIssue756ByRowId_input_applyPlan
        }
      }
    },
    updatePerson: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_personPgResource, specFromArgs7(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updatePerson_input_applyPlan
        }
      }
    },
    updatePersonByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_personPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updatePersonByRowId_input_applyPlan
        }
      }
    },
    updatePersonByEmail: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(pgResource_personPgResource, {
            email: args.get(['input', "email"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_updatePersonByEmail_input_applyPlan
        }
      }
    },
    deleteMyTable: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_my_tablePgResource, specFromArgs8(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteMyTable_input_applyPlan
        }
      }
    },
    deleteMyTableByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_my_tablePgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteMyTableByRowId_input_applyPlan
        }
      }
    },
    deletePersonSecret: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_person_secretPgResource, specFromArgs9(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deletePersonSecret_input_applyPlan
        }
      }
    },
    deletePersonSecretByPersonId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_person_secretPgResource, {
            person_id: args.get(['input', "personId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deletePersonSecretByPersonId_input_applyPlan
        }
      }
    },
    deleteCompoundKey: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_compound_keyPgResource, specFromArgs10(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteCompoundKey_input_applyPlan
        }
      }
    },
    deleteCompoundKeyByPersonId1AndPersonId2: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_compound_keyPgResource, {
            person_id_1: args.get(['input', "personId1"]),
            person_id_2: args.get(['input', "personId2"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteCompoundKeyByPersonId1AndPersonId2_input_applyPlan
        }
      }
    },
    deleteNullTestRecord: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_null_test_recordPgResource, specFromArgs11(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteNullTestRecord_input_applyPlan
        }
      }
    },
    deleteNullTestRecordByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_null_test_recordPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteNullTestRecordByRowId_input_applyPlan
        }
      }
    },
    deleteLeftArm: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_left_armPgResource, specFromArgs12(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteLeftArm_input_applyPlan
        }
      }
    },
    deleteLeftArmByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_left_armPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteLeftArmByRowId_input_applyPlan
        }
      }
    },
    deleteLeftArmByPersonId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_left_armPgResource, {
            person_id: args.get(['input', "personId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteLeftArmByPersonId_input_applyPlan
        }
      }
    },
    deleteIssue756: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_issue756PgResource, specFromArgs13(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteIssue756_input_applyPlan
        }
      }
    },
    deleteIssue756ByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_issue756PgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deleteIssue756ByRowId_input_applyPlan
        }
      }
    },
    deletePerson: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_personPgResource, specFromArgs14(args))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deletePerson_input_applyPlan
        }
      }
    },
    deletePersonByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_personPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deletePersonByRowId_input_applyPlan
        }
      }
    },
    deletePersonByEmail: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(pgResource_personPgResource, {
            email: args.get(['input', "email"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan: Mutation_deletePersonByEmail_input_applyPlan
        }
      }
    }
  },
  MutationOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutPayload_clientMutationIdPlan,
    o($object) {
      return $object.get("result");
    },
    query: MutationOutPayload_queryPlan
  },
  MutationOutInput: {
    clientMutationId: {
      applyPlan: MutationOutInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationOutSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutSetofPayload_clientMutationIdPlan,
    os($object) {
      return $object.get("result");
    },
    query: MutationOutSetofPayload_queryPlan
  },
  MutationOutSetofInput: {
    clientMutationId: {
      applyPlan: MutationOutSetofInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutUnnamedPayload_clientMutationIdPlan,
    integer($object) {
      return $object.get("result");
    },
    query: MutationOutUnnamedPayload_queryPlan
  },
  MutationOutUnnamedInput: {
    clientMutationId: {
      applyPlan: MutationOutUnnamedInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  NoArgsMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: NoArgsMutationPayload_clientMutationIdPlan,
    integer($object) {
      return $object.get("result");
    },
    query: NoArgsMutationPayload_queryPlan
  },
  NoArgsMutationInput: {
    clientMutationId: {
      applyPlan: NoArgsMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationInOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationInOutPayload_clientMutationIdPlan,
    o($object) {
      return $object.get("result");
    },
    query: MutationInOutPayload_queryPlan
  },
  MutationInOutInput: {
    clientMutationId: {
      applyPlan: MutationInOutInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    i: undefined
  },
  MutationReturnsTableOneColPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationReturnsTableOneColPayload_clientMutationIdPlan,
    col1S($object) {
      return $object.get("result");
    },
    query: MutationReturnsTableOneColPayload_queryPlan
  },
  MutationReturnsTableOneColInput: {
    clientMutationId: {
      applyPlan: MutationReturnsTableOneColInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    i: undefined
  },
  JsonIdentityMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: JsonIdentityMutationPayload_clientMutationIdPlan,
    json($object) {
      return $object.get("result");
    },
    query: JsonIdentityMutationPayload_queryPlan
  },
  JsonIdentityMutationInput: {
    clientMutationId: {
      applyPlan: JsonIdentityMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    json: undefined
  },
  JsonbIdentityMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: JsonbIdentityMutationPayload_clientMutationIdPlan,
    json($object) {
      return $object.get("result");
    },
    query: JsonbIdentityMutationPayload_queryPlan
  },
  JsonbIdentityMutationInput: {
    clientMutationId: {
      applyPlan: JsonbIdentityMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    json: undefined
  },
  JsonbIdentityMutationPlpgsqlPayload: {
    __assertStep: ObjectStep,
    clientMutationId: JsonbIdentityMutationPlpgsqlPayload_clientMutationIdPlan,
    json($object) {
      return $object.get("result");
    },
    query: JsonbIdentityMutationPlpgsqlPayload_queryPlan
  },
  JsonbIdentityMutationPlpgsqlInput: {
    clientMutationId: {
      applyPlan: JsonbIdentityMutationPlpgsqlInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    _theJson: undefined
  },
  JsonbIdentityMutationPlpgsqlWithDefaultPayload: {
    __assertStep: ObjectStep,
    clientMutationId: JsonbIdentityMutationPlpgsqlWithDefaultPayload_clientMutationIdPlan,
    json($object) {
      return $object.get("result");
    },
    query: JsonbIdentityMutationPlpgsqlWithDefaultPayload_queryPlan
  },
  JsonbIdentityMutationPlpgsqlWithDefaultInput: {
    clientMutationId: {
      applyPlan: JsonbIdentityMutationPlpgsqlWithDefaultInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    _theJson: undefined
  },
  MutationInInoutPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationInInoutPayload_clientMutationIdPlan,
    ino($object) {
      return $object.get("result");
    },
    query: MutationInInoutPayload_queryPlan
  },
  MutationInInoutInput: {
    clientMutationId: {
      applyPlan: MutationInInoutInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    i: undefined,
    ino: undefined
  },
  MutationOutOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutOutPayload_clientMutationIdPlan,
    result($object) {
      return $object.get("result");
    },
    query: MutationOutOutPayload_queryPlan
  },
  MutationOutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    firstOut($record) {
      return $record.get("first_out");
    },
    secondOut($record) {
      return $record.get("second_out");
    }
  },
  MutationOutOutInput: {
    clientMutationId: {
      applyPlan: MutationOutOutInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationOutOutSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutOutSetofPayload_clientMutationIdPlan,
    results($object) {
      return $object.get("result");
    },
    query: MutationOutOutSetofPayload_queryPlan
  },
  MutationOutOutSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    o1($record) {
      return $record.get("o1");
    },
    o2($record) {
      return $record.get("o2");
    }
  },
  MutationOutOutSetofInput: {
    clientMutationId: {
      applyPlan: MutationOutOutSetofInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationOutOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutOutUnnamedPayload_clientMutationIdPlan,
    result($object) {
      return $object.get("result");
    },
    query: MutationOutOutUnnamedPayload_queryPlan
  },
  MutationOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg2($record) {
      return $record.get("column2");
    }
  },
  MutationOutOutUnnamedInput: {
    clientMutationId: {
      applyPlan: MutationOutOutUnnamedInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  IntSetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: IntSetMutationPayload_clientMutationIdPlan,
    integers($object) {
      return $object.get("result");
    },
    query: IntSetMutationPayload_queryPlan
  },
  IntSetMutationInput: {
    clientMutationId: {
      applyPlan: IntSetMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    x: undefined,
    y: undefined,
    z: undefined
  },
  MutationOutUnnamedOutOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutUnnamedOutOutUnnamedPayload_clientMutationIdPlan,
    result($object) {
      return $object.get("result");
    },
    query: MutationOutUnnamedOutOutUnnamedPayload_queryPlan
  },
  MutationOutUnnamedOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    o2($record) {
      return $record.get("o2");
    },
    arg3($record) {
      return $record.get("column3");
    }
  },
  MutationOutUnnamedOutOutUnnamedInput: {
    clientMutationId: {
      applyPlan: MutationOutUnnamedOutOutUnnamedInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationReturnsTableMultiColPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationReturnsTableMultiColPayload_clientMutationIdPlan,
    results($object) {
      return $object.get("result");
    },
    query: MutationReturnsTableMultiColPayload_queryPlan
  },
  MutationReturnsTableMultiColRecord: {
    __assertStep: assertPgClassSingleStep,
    col1($record) {
      return $record.get("col1");
    },
    col2($record) {
      return $record.get("col2");
    }
  },
  MutationReturnsTableMultiColInput: {
    clientMutationId: {
      applyPlan: MutationReturnsTableMultiColInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    i: undefined
  },
  LeftArmIdentityPayload: {
    __assertStep: ObjectStep,
    clientMutationId: LeftArmIdentityPayload_clientMutationIdPlan,
    leftArm($object) {
      return $object.get("result");
    },
    query: LeftArmIdentityPayload_queryPlan,
    leftArmEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques6[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_left_armPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("LeftArmsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  LeftArmIdentityInput: {
    clientMutationId: {
      applyPlan: LeftArmIdentityInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    leftArm: undefined
  },
  LeftArmBaseInput: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId: {
      applyPlan($insert, val) {
        $insert.set("person_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lengthInMetres: {
      applyPlan($insert, val) {
        $insert.set("length_in_metres", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    mood: {
      applyPlan($insert, val) {
        $insert.set("mood", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Issue756MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: Issue756MutationPayload_clientMutationIdPlan,
    issue756($object) {
      return $object.get("result");
    },
    query: Issue756MutationPayload_queryPlan,
    issue756Edge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques7[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_issue756PgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("Issue756SOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  Issue756MutationInput: {
    clientMutationId: {
      applyPlan: Issue756MutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Issue756SetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: Issue756SetMutationPayload_clientMutationIdPlan,
    issue756S($object) {
      return $object.get("result");
    },
    query: Issue756SetMutationPayload_queryPlan
  },
  Issue756SetMutationInput: {
    clientMutationId: {
      applyPlan: Issue756SetMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  TypesMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: TypesMutationPayload_clientMutationIdPlan,
    boolean($object) {
      return $object.get("result");
    },
    query: TypesMutationPayload_queryPlan
  },
  TypesMutationInput: {
    clientMutationId: {
      applyPlan: TypesMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
    e: undefined,
    f: undefined
  },
  MutationOutOutCompoundTypePayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutOutCompoundTypePayload_clientMutationIdPlan,
    result($object) {
      return $object.get("result");
    },
    query: MutationOutOutCompoundTypePayload_queryPlan
  },
  MutationOutOutCompoundTypeRecord: {
    __assertStep: assertPgClassSingleStep,
    o1($record) {
      return $record.get("o1");
    },
    o2($record) {
      const $plan = $record.get("o2");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutOutCompoundTypeInput: {
    clientMutationId: {
      applyPlan: MutationOutOutCompoundTypeInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    i1: undefined
  },
  TableMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: TableMutationPayload_clientMutationIdPlan,
    post($object) {
      return $object.get("result");
    },
    query: TableMutationPayload_queryPlan
  },
  TableMutationInput: {
    clientMutationId: {
      applyPlan: TableMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    id: undefined
  },
  MutationOutComplexPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutComplexPayload_clientMutationIdPlan,
    result($object) {
      return $object.get("result");
    },
    query: MutationOutComplexPayload_queryPlan
  },
  MutationOutComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    x($record) {
      return $record.get("x");
    },
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutComplexInput: {
    clientMutationId: {
      applyPlan: MutationOutComplexInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    a: undefined,
    b: undefined
  },
  MutationOutComplexSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutComplexSetofPayload_clientMutationIdPlan,
    results($object) {
      return $object.get("result");
    },
    query: MutationOutComplexSetofPayload_queryPlan
  },
  MutationOutComplexSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    x($record) {
      return $record.get("x");
    },
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(pgResource_personPgResource, $plan);
      if (undefined) {
        $select.coalesceToEmptyObject();
      }
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutComplexSetofInput: {
    clientMutationId: {
      applyPlan: MutationOutComplexSetofInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    a: undefined,
    b: undefined
  },
  MutationOutTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutTablePayload_clientMutationIdPlan,
    person($object) {
      return $object.get("result");
    },
    query: MutationOutTablePayload_queryPlan,
    personEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques9[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_personPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  MutationOutTableInput: {
    clientMutationId: {
      applyPlan: MutationOutTableInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MutationOutTableSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId: MutationOutTableSetofPayload_clientMutationIdPlan,
    people($object) {
      return $object.get("result");
    },
    query: MutationOutTableSetofPayload_queryPlan
  },
  MutationOutTableSetofInput: {
    clientMutationId: {
      applyPlan: MutationOutTableSetofInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  TableSetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId: TableSetMutationPayload_clientMutationIdPlan,
    people($object) {
      return $object.get("result");
    },
    query: TableSetMutationPayload_queryPlan
  },
  TableSetMutationInput: {
    clientMutationId: {
      applyPlan: TableSetMutationInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateMyTablePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateMyTablePayload_clientMutationIdPlan,
    myTable: CreateMyTablePayload_myTablePlan,
    query: CreateMyTablePayload_queryPlan,
    myTableEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_my_tablePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("MyTablesOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateMyTableInput: {
    clientMutationId: {
      applyPlan: CreateMyTableInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    myTable: {
      applyPlan: CreateMyTableInput_myTable_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  MyTableInput: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    jsonData: {
      applyPlan($insert, val) {
        $insert.set("json_data", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreatePersonSecretPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreatePersonSecretPayload_clientMutationIdPlan,
    personSecret: CreatePersonSecretPayload_personSecretPlan,
    query: CreatePersonSecretPayload_queryPlan,
    personSecretEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques2[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_person_secretPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PersonSecretsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  CreatePersonSecretInput: {
    clientMutationId: {
      applyPlan: CreatePersonSecretInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    personSecret: {
      applyPlan: CreatePersonSecretInput_personSecret_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  PersonSecretInput: {
    personId: {
      applyPlan($insert, val) {
        $insert.set("person_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    secret: {
      applyPlan($insert, val) {
        $insert.set("sekrit", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateCompoundKeyPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateCompoundKeyPayload_clientMutationIdPlan,
    compoundKey: CreateCompoundKeyPayload_compoundKeyPlan,
    query: CreateCompoundKeyPayload_queryPlan,
    compoundKeyEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques3[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_compound_keyPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId1($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  CreateCompoundKeyInput: {
    clientMutationId: {
      applyPlan: CreateCompoundKeyInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    compoundKey: {
      applyPlan: CreateCompoundKeyInput_compoundKey_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CompoundKeyInput: {
    personId2: {
      applyPlan($insert, val) {
        $insert.set("person_id_2", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId1: {
      applyPlan($insert, val) {
        $insert.set("person_id_1", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    extra: {
      applyPlan($insert, val) {
        $insert.set("extra", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateNullTestRecordPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateNullTestRecordPayload_clientMutationIdPlan,
    nullTestRecord: CreateNullTestRecordPayload_nullTestRecordPlan,
    query: CreateNullTestRecordPayload_queryPlan,
    nullTestRecordEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques4[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_null_test_recordPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("NullTestRecordsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateNullTestRecordInput: {
    clientMutationId: {
      applyPlan: CreateNullTestRecordInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    nullTestRecord: {
      applyPlan: CreateNullTestRecordInput_nullTestRecord_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  NullTestRecordInput: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableText: {
      applyPlan($insert, val) {
        $insert.set("nullable_text", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableInt: {
      applyPlan($insert, val) {
        $insert.set("nullable_int", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nonNullText: {
      applyPlan($insert, val) {
        $insert.set("non_null_text", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateEdgeCasePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateEdgeCasePayload_clientMutationIdPlan,
    edgeCase: CreateEdgeCasePayload_edgeCasePlan,
    query: CreateEdgeCasePayload_queryPlan
  },
  CreateEdgeCaseInput: {
    clientMutationId: {
      applyPlan: CreateEdgeCaseInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    edgeCase: {
      applyPlan: CreateEdgeCaseInput_edgeCase_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  EdgeCaseInput: {
    notNullHasDefault: {
      applyPlan($insert, val) {
        $insert.set("not_null_has_default", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    wontCastEasy: {
      applyPlan($insert, val) {
        $insert.set("wont_cast_easy", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("row_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateLeftArmPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateLeftArmPayload_clientMutationIdPlan,
    leftArm: CreateLeftArmPayload_leftArmPlan,
    query: CreateLeftArmPayload_queryPlan,
    leftArmEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques6[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_left_armPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("LeftArmsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  CreateLeftArmInput: {
    clientMutationId: {
      applyPlan: CreateLeftArmInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    leftArm: {
      applyPlan: CreateLeftArmInput_leftArm_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  LeftArmInput: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId: {
      applyPlan($insert, val) {
        $insert.set("person_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lengthInMetres: {
      applyPlan($insert, val) {
        $insert.set("length_in_metres", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    mood: {
      applyPlan($insert, val) {
        $insert.set("mood", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateIssue756Payload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreateIssue756Payload_clientMutationIdPlan,
    issue756: CreateIssue756Payload_issue756Plan,
    query: CreateIssue756Payload_queryPlan,
    issue756Edge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques7[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_issue756PgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("Issue756SOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateIssue756Input: {
    clientMutationId: {
      applyPlan: CreateIssue756Input_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    issue756: {
      applyPlan: CreateIssue756Input_issue756_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Issue756Input: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    ts: {
      applyPlan($insert, val) {
        $insert.set("ts", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreatePersonPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId: CreatePersonPayload_clientMutationIdPlan,
    person: CreatePersonPayload_personPlan,
    query: CreatePersonPayload_queryPlan,
    personEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques9[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_personPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreatePersonInput: {
    clientMutationId: {
      applyPlan: CreatePersonInput_clientMutationId_applyPlan,
      autoApplyAfterParentApplyPlan: true
    },
    person: {
      applyPlan: CreatePersonInput_person_applyPlan,
      autoApplyAfterParentApplyPlan: true
    }
  },
  PersonInput: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("person_full_name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    aliases: {
      applyPlan($insert, val) {
        $insert.set("aliases", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    about: {
      applyPlan($insert, val) {
        $insert.set("about", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($insert, val) {
        $insert.set("email", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    site: {
      applyPlan($insert, val) {
        $insert.set("site", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    config: {
      applyPlan($insert, val) {
        $insert.set("config", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromIp: {
      applyPlan($insert, val) {
        $insert.set("last_login_from_ip", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromSubnet: {
      applyPlan($insert, val) {
        $insert.set("last_login_from_subnet", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userMac: {
      applyPlan($insert, val) {
        $insert.set("user_mac", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("created_at", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateMyTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdateMyTablePayload_clientMutationIdPlan,
    myTable: UpdateMyTablePayload_myTablePlan,
    query: UpdateMyTablePayload_queryPlan,
    myTableEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_my_tablePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("MyTablesOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateMyTableInput: {
    clientMutationId: {
      applyPlan: UpdateMyTableInput_clientMutationId_applyPlan
    },
    id: undefined,
    myTablePatch: {
      applyPlan: UpdateMyTableInput_myTablePatch_applyPlan
    }
  },
  MyTablePatch: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    jsonData: {
      applyPlan($insert, val) {
        $insert.set("json_data", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateMyTableByRowIdInput: {
    clientMutationId: {
      applyPlan: UpdateMyTableByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined,
    myTablePatch: {
      applyPlan: UpdateMyTableByRowIdInput_myTablePatch_applyPlan
    }
  },
  UpdatePersonSecretPayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdatePersonSecretPayload_clientMutationIdPlan,
    personSecret: UpdatePersonSecretPayload_personSecretPlan,
    query: UpdatePersonSecretPayload_queryPlan,
    personSecretEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques2[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_person_secretPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PersonSecretsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  UpdatePersonSecretInput: {
    clientMutationId: {
      applyPlan: UpdatePersonSecretInput_clientMutationId_applyPlan
    },
    id: undefined,
    personSecretPatch: {
      applyPlan: UpdatePersonSecretInput_personSecretPatch_applyPlan
    }
  },
  PersonSecretPatch: {
    personId: {
      applyPlan($insert, val) {
        $insert.set("person_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    secret: {
      applyPlan($insert, val) {
        $insert.set("sekrit", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdatePersonSecretByPersonIdInput: {
    clientMutationId: {
      applyPlan: UpdatePersonSecretByPersonIdInput_clientMutationId_applyPlan
    },
    personId: undefined,
    personSecretPatch: {
      applyPlan: UpdatePersonSecretByPersonIdInput_personSecretPatch_applyPlan
    }
  },
  UpdateCompoundKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdateCompoundKeyPayload_clientMutationIdPlan,
    compoundKey: UpdateCompoundKeyPayload_compoundKeyPlan,
    query: UpdateCompoundKeyPayload_queryPlan,
    compoundKeyEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques3[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_compound_keyPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId1($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  UpdateCompoundKeyInput: {
    clientMutationId: {
      applyPlan: UpdateCompoundKeyInput_clientMutationId_applyPlan
    },
    id: undefined,
    compoundKeyPatch: {
      applyPlan: UpdateCompoundKeyInput_compoundKeyPatch_applyPlan
    }
  },
  CompoundKeyPatch: {
    personId2: {
      applyPlan($insert, val) {
        $insert.set("person_id_2", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId1: {
      applyPlan($insert, val) {
        $insert.set("person_id_1", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    extra: {
      applyPlan($insert, val) {
        $insert.set("extra", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateCompoundKeyByPersonId1AndPersonId2Input: {
    clientMutationId: {
      applyPlan: UpdateCompoundKeyByPersonId1AndPersonId2Input_clientMutationId_applyPlan
    },
    personId1: undefined,
    personId2: undefined,
    compoundKeyPatch: {
      applyPlan: UpdateCompoundKeyByPersonId1AndPersonId2Input_compoundKeyPatch_applyPlan
    }
  },
  UpdateNullTestRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdateNullTestRecordPayload_clientMutationIdPlan,
    nullTestRecord: UpdateNullTestRecordPayload_nullTestRecordPlan,
    query: UpdateNullTestRecordPayload_queryPlan,
    nullTestRecordEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques4[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_null_test_recordPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("NullTestRecordsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateNullTestRecordInput: {
    clientMutationId: {
      applyPlan: UpdateNullTestRecordInput_clientMutationId_applyPlan
    },
    id: undefined,
    nullTestRecordPatch: {
      applyPlan: UpdateNullTestRecordInput_nullTestRecordPatch_applyPlan
    }
  },
  NullTestRecordPatch: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableText: {
      applyPlan($insert, val) {
        $insert.set("nullable_text", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nullableInt: {
      applyPlan($insert, val) {
        $insert.set("nullable_int", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    nonNullText: {
      applyPlan($insert, val) {
        $insert.set("non_null_text", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateNullTestRecordByRowIdInput: {
    clientMutationId: {
      applyPlan: UpdateNullTestRecordByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined,
    nullTestRecordPatch: {
      applyPlan: UpdateNullTestRecordByRowIdInput_nullTestRecordPatch_applyPlan
    }
  },
  UpdateLeftArmPayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdateLeftArmPayload_clientMutationIdPlan,
    leftArm: UpdateLeftArmPayload_leftArmPlan,
    query: UpdateLeftArmPayload_queryPlan,
    leftArmEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques6[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_left_armPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("LeftArmsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  UpdateLeftArmInput: {
    clientMutationId: {
      applyPlan: UpdateLeftArmInput_clientMutationId_applyPlan
    },
    id: undefined,
    leftArmPatch: {
      applyPlan: UpdateLeftArmInput_leftArmPatch_applyPlan
    }
  },
  LeftArmPatch: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    personId: {
      applyPlan($insert, val) {
        $insert.set("person_id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lengthInMetres: {
      applyPlan($insert, val) {
        $insert.set("length_in_metres", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    mood: {
      applyPlan($insert, val) {
        $insert.set("mood", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateLeftArmByRowIdInput: {
    clientMutationId: {
      applyPlan: UpdateLeftArmByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined,
    leftArmPatch: {
      applyPlan: UpdateLeftArmByRowIdInput_leftArmPatch_applyPlan
    }
  },
  UpdateLeftArmByPersonIdInput: {
    clientMutationId: {
      applyPlan: UpdateLeftArmByPersonIdInput_clientMutationId_applyPlan
    },
    personId: undefined,
    leftArmPatch: {
      applyPlan: UpdateLeftArmByPersonIdInput_leftArmPatch_applyPlan
    }
  },
  UpdateIssue756Payload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdateIssue756Payload_clientMutationIdPlan,
    issue756: UpdateIssue756Payload_issue756Plan,
    query: UpdateIssue756Payload_queryPlan,
    issue756Edge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques7[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_issue756PgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("Issue756SOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateIssue756Input: {
    clientMutationId: {
      applyPlan: UpdateIssue756Input_clientMutationId_applyPlan
    },
    id: undefined,
    issue756Patch: {
      applyPlan: UpdateIssue756Input_issue756Patch_applyPlan
    }
  },
  Issue756Patch: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    ts: {
      applyPlan($insert, val) {
        $insert.set("ts", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateIssue756ByRowIdInput: {
    clientMutationId: {
      applyPlan: UpdateIssue756ByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined,
    issue756Patch: {
      applyPlan: UpdateIssue756ByRowIdInput_issue756Patch_applyPlan
    }
  },
  UpdatePersonPayload: {
    __assertStep: ObjectStep,
    clientMutationId: UpdatePersonPayload_clientMutationIdPlan,
    person: UpdatePersonPayload_personPlan,
    query: UpdatePersonPayload_queryPlan,
    personEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques9[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_personPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdatePersonInput: {
    clientMutationId: {
      applyPlan: UpdatePersonInput_clientMutationId_applyPlan
    },
    id: undefined,
    personPatch: {
      applyPlan: UpdatePersonInput_personPatch_applyPlan
    }
  },
  PersonPatch: {
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("person_full_name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    aliases: {
      applyPlan($insert, val) {
        $insert.set("aliases", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    about: {
      applyPlan($insert, val) {
        $insert.set("about", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($insert, val) {
        $insert.set("email", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    site: {
      applyPlan($insert, val) {
        $insert.set("site", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    config: {
      applyPlan($insert, val) {
        $insert.set("config", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromIp: {
      applyPlan($insert, val) {
        $insert.set("last_login_from_ip", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    lastLoginFromSubnet: {
      applyPlan($insert, val) {
        $insert.set("last_login_from_subnet", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userMac: {
      applyPlan($insert, val) {
        $insert.set("user_mac", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("created_at", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdatePersonByRowIdInput: {
    clientMutationId: {
      applyPlan: UpdatePersonByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined,
    personPatch: {
      applyPlan: UpdatePersonByRowIdInput_personPatch_applyPlan
    }
  },
  UpdatePersonByEmailInput: {
    clientMutationId: {
      applyPlan: UpdatePersonByEmailInput_clientMutationId_applyPlan
    },
    email: undefined,
    personPatch: {
      applyPlan: UpdatePersonByEmailInput_personPatch_applyPlan
    }
  },
  DeleteMyTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeleteMyTablePayload_clientMutationIdPlan,
    myTable: DeleteMyTablePayload_myTablePlan,
    deletedMyTableId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.MyTable.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeleteMyTablePayload_queryPlan,
    myTableEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_my_tablePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("MyTablesOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteMyTableInput: {
    clientMutationId: {
      applyPlan: DeleteMyTableInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeleteMyTableByRowIdInput: {
    clientMutationId: {
      applyPlan: DeleteMyTableByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined
  },
  DeletePersonSecretPayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeletePersonSecretPayload_clientMutationIdPlan,
    personSecret: DeletePersonSecretPayload_personSecretPlan,
    deletedPersonSecretId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.PersonSecret.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeletePersonSecretPayload_queryPlan,
    personSecretEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques2[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_person_secretPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PersonSecretsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  DeletePersonSecretInput: {
    clientMutationId: {
      applyPlan: DeletePersonSecretInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeletePersonSecretByPersonIdInput: {
    clientMutationId: {
      applyPlan: DeletePersonSecretByPersonIdInput_clientMutationId_applyPlan
    },
    personId: undefined
  },
  DeleteCompoundKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeleteCompoundKeyPayload_clientMutationIdPlan,
    compoundKey: DeleteCompoundKeyPayload_compoundKeyPlan,
    deletedCompoundKeyId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.CompoundKey.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeleteCompoundKeyPayload_queryPlan,
    compoundKeyEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques3[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_compound_keyPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("CompoundKeysOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId1($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  DeleteCompoundKeyInput: {
    clientMutationId: {
      applyPlan: DeleteCompoundKeyInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeleteCompoundKeyByPersonId1AndPersonId2Input: {
    clientMutationId: {
      applyPlan: DeleteCompoundKeyByPersonId1AndPersonId2Input_clientMutationId_applyPlan
    },
    personId1: undefined,
    personId2: undefined
  },
  DeleteNullTestRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeleteNullTestRecordPayload_clientMutationIdPlan,
    nullTestRecord: DeleteNullTestRecordPayload_nullTestRecordPlan,
    deletedNullTestRecordId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.NullTestRecord.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeleteNullTestRecordPayload_queryPlan,
    nullTestRecordEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques4[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_null_test_recordPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("NullTestRecordsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteNullTestRecordInput: {
    clientMutationId: {
      applyPlan: DeleteNullTestRecordInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeleteNullTestRecordByRowIdInput: {
    clientMutationId: {
      applyPlan: DeleteNullTestRecordByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined
  },
  DeleteLeftArmPayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeleteLeftArmPayload_clientMutationIdPlan,
    leftArm: DeleteLeftArmPayload_leftArmPlan,
    deletedLeftArmId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.LeftArm.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeleteLeftArmPayload_queryPlan,
    leftArmEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques6[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_left_armPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("LeftArmsOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    },
    personByPersonId($record) {
      return pgResource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  DeleteLeftArmInput: {
    clientMutationId: {
      applyPlan: DeleteLeftArmInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeleteLeftArmByRowIdInput: {
    clientMutationId: {
      applyPlan: DeleteLeftArmByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined
  },
  DeleteLeftArmByPersonIdInput: {
    clientMutationId: {
      applyPlan: DeleteLeftArmByPersonIdInput_clientMutationId_applyPlan
    },
    personId: undefined
  },
  DeleteIssue756Payload: {
    __assertStep: ObjectStep,
    clientMutationId: DeleteIssue756Payload_clientMutationIdPlan,
    issue756: DeleteIssue756Payload_issue756Plan,
    deletedIssue756Id($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.Issue756.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeleteIssue756Payload_queryPlan,
    issue756Edge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques7[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_issue756PgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("Issue756SOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteIssue756Input: {
    clientMutationId: {
      applyPlan: DeleteIssue756Input_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeleteIssue756ByRowIdInput: {
    clientMutationId: {
      applyPlan: DeleteIssue756ByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined
  },
  DeletePersonPayload: {
    __assertStep: ObjectStep,
    clientMutationId: DeletePersonPayload_clientMutationIdPlan,
    person: DeletePersonPayload_personPlan,
    deletedPersonId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.Person.plan($record);
      return lambda(specifier, nodeIdCodecs_base64JSON_base64JSON.encode);
    },
    query: DeletePersonPayload_queryPlan,
    personEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = uniques9[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return pgResource_personPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PeopleOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeletePersonInput: {
    clientMutationId: {
      applyPlan: DeletePersonInput_clientMutationId_applyPlan
    },
    id: undefined
  },
  DeletePersonByRowIdInput: {
    clientMutationId: {
      applyPlan: DeletePersonByRowIdInput_clientMutationId_applyPlan
    },
    rowId: undefined
  },
  DeletePersonByEmailInput: {
    clientMutationId: {
      applyPlan: DeletePersonByEmailInput_clientMutationId_applyPlan
    },
    email: undefined
  }
};
export const schema = makeGrafastSchema({
  typeDefs: typeDefs,
  plans: plans
});
