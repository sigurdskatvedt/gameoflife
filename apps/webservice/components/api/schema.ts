import * as path from "path"
import { makeSchema } from "nexus"
import Query from "./types/resolvers/queries"
import Mutation from "./types/resolvers/mutations"
import { Chunk, Cond, Rule } from "./types/models/"

export const schema = makeSchema({
  types: [Query, Mutation, Rule, Chunk, Cond],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
})
