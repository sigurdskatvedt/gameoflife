import { intArg, list, nonNull, objectType, stringArg } from "nexus"
import prisma from "../../lib/prisma"

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createRule", {
      type: "Rule",
      args: {
        name: nonNull(stringArg()),
        description: nonNull(stringArg()),
        stateNames: nonNull(list(nonNull(stringArg()))),
        others: nonNull(intArg()),
      },
      resolve: (_, { name, description, stateNames, others }) => {
        return prisma.rule.create({
          data: {
            name,
            description,
            stateNames,
            others,
          },
        })
      },
    }),
      t.field("createChunk", {
        type: "Chunk",
        args: {
          newState: nonNull(intArg()),
          ruleId: nonNull(stringArg()),
        },
        resolve: (_, { newState, ruleId }) => {
          return prisma.chunk.create({
            data: {
              newState,
              rule: {
                connect: { id: ruleId },
              },
            },
          })
        },
      })

    t.field("createCond", {
      type: "Cond",
      args: {
        nbr: nonNull(list(nonNull(intArg()))),
        nbgStates: nonNull(intArg()),
        chunkId: nonNull(stringArg()),
        states: nonNull(list(nonNull(intArg()))),
      },
      resolve: (_, { nbr, nbgStates, chunkId, states }) => {
        return prisma.cond.create({
          data: {
            nbr,
            nbgStates,
            chunk: {
              connect: { id: chunkId },
            },
            states,
          },
        })
      },
    })
  },
})

export default Mutation
