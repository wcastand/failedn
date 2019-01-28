import { Parent, Test } from "@scope/common";
import { ApolloServer, gql } from "apollo-server-micro";
import cors from "micro-cors";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: (parent: any, args: any, context: any) => {
      const banana: Test = "test";
      const pouet: Parent = { banana };
      return banana + pouet;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
// @ts-ignore
module.exports = cors(apolloServer.createHandler());
