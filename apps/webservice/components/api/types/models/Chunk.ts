import { list, objectType } from "nexus"
import prisma from "../../../../lib/prisma"

export const Chunk = objectType({
  name: "Chunk",
  definition(t) {
    t.string("id")
    t.int("newState")
    t.field("rule", {
      type: "Rule",
      resolve: parent =>
        prisma.chunk
          .findUnique({
            where: { id: String(parent.id) },
          })
          .rule(),
    })
    t.field("conds", {
      type: list("Cond"),
      resolve: parent =>
        prisma.chunk
          .findUnique({
            where: { id: String(parent.id) },
          })
          .conds(),
    })
  },
})
