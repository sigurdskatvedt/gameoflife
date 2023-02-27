import { list, objectType } from "nexus"
import prisma from "../../../../lib/prisma"

export const Cond = objectType({
  name: "Cond",
  definition(t) {
    t.string("id")
    t.field("nbr", { type: list("Int") })
    t.int("nbgStates")
    t.field("chunk", {
      type: "Chunk",
      resolve: parent =>
        prisma.cond
          .findUnique({
            where: { id: String(parent.id) },
          })
          .chunk(),
    })
    t.field("states", { type: list("Int") })
  },
})
