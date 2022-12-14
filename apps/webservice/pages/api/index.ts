import { ApolloServer } from "apollo-server-micro"
import { DateTimeResolver } from "graphql-scalars"
import { NextApiHandler } from "next"
import {
  asNexusMethod,
  list,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus"
import path from "path"
import cors from "micro-cors"
import prisma from "../../lib/prisma"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

const User = objectType({
  name: "User",
  definition(t) {
    t.int("id")
    t.string("name")
    t.string("email")
    t.list.field("posts", {
      type: "Post",
      resolve: parent =>
        prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    })
  },
})

const Post = objectType({
  name: "Post",
  definition(t) {
    t.int("id")
    t.string("title")
    t.nullable.string("content")
    t.boolean("published")
    t.nullable.field("author", {
      type: "User",
      resolve: parent =>
        prisma.post
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .author(),
    })
  },
})

const Chunk = objectType({
  name: "Chunk",
  definition(t) {
    t.string("id")
    t.int("new")
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

const Cond = objectType({
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

const Rule = objectType({
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

    t.field("post", {
      type: "Post",
      args: {
        postId: nonNull(stringArg()),
      },
      resolve: (_, args) => {
        return prisma.post.findUnique({
          where: { id: Number(args.postId) },
        })
      },
    })

    t.list.field("feed", {
      type: "Post",
      resolve: (_parent, _args) => {
        return prisma.post.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field("drafts", {
      type: "Post",
      resolve: (_parent, _args, ctx) => {
        return prisma.post.findMany({
          where: { published: false },
        })
      },
    })

    t.list.field("filterPosts", {
      type: "Post",
      args: {
        searchString: nullable(stringArg()),
      },
      resolve: (_, { searchString }, ctx) => {
        return prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("signupUser", {
      type: "User",
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
      },
      resolve: (_, { name, email }, ctx) => {
        return prisma.user.create({
          data: {
            name,
            email,
          },
        })
      },
    })

    t.nullable.field("deletePost", {
      type: "Post",
      args: {
        postId: stringArg(),
      },
      resolve: (_, { postId }, ctx) => {
        return prisma.post.delete({
          where: { id: Number(postId) },
        })
      },
    })

    t.field("createDraft", {
      type: "Post",
      args: {
        title: nonNull(stringArg()),
        content: stringArg(),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return prisma.post.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        })
      },
    })

    t.nullable.field("publish", {
      type: "Post",
      args: {
        postId: stringArg(),
      },
      resolve: (_, { postId }, ctx) => {
        return prisma.post.update({
          where: { id: Number(postId) },
          data: { published: true },
        })
      },
    })
  },
})

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
