import { ApolloServer, gql } from "apollo-server-micro";
import cors from "micro-cors";
import { Parent, Test } from "werwtyukjytreawaresrdhfjgkhmfdsadafdgfhjjkngnfdfsadafgh";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: (_: any, __: any, ___: any) => {
      const banana: Test = "test";
      const pouet: Parent = { banana };
      return banana + pouet;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
// @ts-ignore
module.exports = cors(apolloServer.createHandler());
