import { ApolloServer } from "apollo-server-micro"
import { DateTimeResolver } from "graphql-scalars"
import { NextApiHandler } from "next"
import { asNexusMethod, makeSchema } from "nexus"
import path from "path"
import cors from "micro-cors"
import Mutation from "../../components/api/mutations"
import Query from "../../components/api/queries"
import { Post, User, Rule, Chunk, Cond } from "../../components/api/types"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

export const schema = makeSchema({
  types: [Query, Mutation, Post, User, Rule, Chunk, Cond, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

let apolloServerHandler: NextApiHandler

async function getApolloServerHandler() {
  const apolloServer = new ApolloServer({ schema })

  if (!apolloServerHandler) {
    await apolloServer.start()

    apolloServerHandler = apolloServer.createHandler({
      path: "/api",
    })
  }

  return apolloServerHandler
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler()

  if (req.method === "OPTIONS") {
    res.end()
    return
  }

  return apolloServerHandler(req, res)
}

export default cors()(handler)
