import { list, objectType } from "nexus"
import prisma from "../../lib/prisma"

export const User = objectType({
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

export const Post = objectType({
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

export const Chunk = objectType({
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
