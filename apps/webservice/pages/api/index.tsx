import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { schema } from "../../components/api/schema"
import { context, createContext } from "../../lib/context"

const server = new ApolloServer({
  schema,
})

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    return context
  },
})
