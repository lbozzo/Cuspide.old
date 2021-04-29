import { ApolloServer, MockList } from "apollo-server-micro";
import { gql } from "apollo-server-micro";
import * as faker from "faker";

export const typeDefs = gql`
  type Author {
    id: ID
    name: String
    url: String
  }

  type Quote {
    id: ID
    text: String
    author: Author!
  }

  type Query {
    authors: [Author]
    quote(ID: ID!): Quote!
    quotes: [Quote]
    randomQuote: Quote!
  }
`;

const mocks = {
  Author: () => ({
    name: faker.name.findName(),
  }),
  Quote: () => ({
    text: faker.lorem.lines(2),
  }),
  Query: () => ({
    authors: () => new MockList(faker.random.number(20)),
    quotes: () => new MockList(faker.random.number(20)),
  }),
};

const apolloServer = new ApolloServer({ typeDefs, mocks });

export default apolloServer.createHandler({ path: "/api/graphql" });
