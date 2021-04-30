import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../server/graphql/schema";
import { context } from "../../server/graphql/context";

const apolloServer = new ApolloServer({ schema, context });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
