import { list, objectType } from "nexus"
import prisma from "../../../../lib/prisma"

export const Rule = objectType({
  name: "Rule",
  definition(t) {
    t.string("id")
    t.string("name")
    t.string("description")
    t.field("stateNames", { type: list("String") })
    t.int("others")
    t.field("chunks", {
      type: list("Chunk"),
      resolve: parent =>
        prisma.rule
          .findUnique({
            where: { id: String(parent.id) },
          })
          .chunks(),
    })
  },
})
