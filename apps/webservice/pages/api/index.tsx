import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { schema } from "../../components/api/schema"
import { context } from "../../lib/context"
import allowCors from "./cors"

const server = new ApolloServer({
  schema,
})

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    return context
  },
})

// There is a need for CORS setup with Apollo Server v4
export default allowCors(handler)
