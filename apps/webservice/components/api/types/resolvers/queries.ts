import { list, nonNull, nullable, objectType, stringArg } from "nexus"
import prisma from "../../../../lib/prisma"

const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("cond", {
      type: "Cond",
      args: {
        condId: nonNull(stringArg()),
      },
      resolve: (_, args) => {
        return prisma.cond.findUnique({
          where: { id: String(args.condId) },
        })
      },
    })

    t.field("uniqueRule", {
      type: "Rule",
      args: {
        ruleId: nonNull(stringArg()),
      },
      resolve: (_, args) => {
        return prisma.rule.findUnique({
          where: { id: String(args.ruleId) },
        })
      },
    })

    t.field("allRules", {
      type: list("Rule"),
      resolve: (_, args) => {
        return prisma.rule.findMany()
      },
    })

    t.field("chunk", {
      type: "Chunk",
      args: {
        chunkId: nonNull(stringArg()),
      },
      resolve: (_, args) => {
        return prisma.chunk.findUnique({
          where: { id: String(args.chunkId) },
        })
      },
    })
  },
})

export default Query
