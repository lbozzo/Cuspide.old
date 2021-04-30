import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types,
  contextType: {
    module: join(process.cwd(), "server/graphql", "context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: join(
      process.cwd(),
      "server/graphql/generated",
      "nexus-typegen.ts"
    ),
    schema: join(process.cwd(), "server/graphql/generated", "schema.graphql"),
  },
});
