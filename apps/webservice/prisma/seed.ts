import { PrismaClient, Prisma } from "@prisma/client"
import { create } from "domain"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
        },
      ],
    },
  },
]

const ruleData: Prisma.RuleCreateInput[] = [
  {
    name: "Game of life",
    description: "The basic rules for the James Conways Game of Life",
    stateNames: ["dead", "live"],
    others: 0,
    chunks: {
      create: [
        {
          conds: {
            create: {
              states: 1,
              nbgStates: 1,
              nbr: [2, 3],
            },
          },
          new: 1,
        },
        {
          conds: {
            create: {
              states: 0,
              nbgStates: 1,
              nbr: [3],
            },
          },
          new: 1,
        },
      ],
    },
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const rule of ruleData) {
      const ruleResult = await prisma.rule.create({
        data: rule,
      })
      console.log(`Created user with id: ${ruleResult.id}`)
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
