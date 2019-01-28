"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
const micro_cors_1 = require("micro-cors");
const typeDefs = apollo_server_micro_1.gql `
  type Query {
    sayHello: String
  }
`;
const resolvers = {
    Query: {
        sayHello: (parent, args, context) => {
            const banana = "test";
            const pouet = { banana };
            return banana + pouet;
        },
    },
};
const apolloServer = new apollo_server_micro_1.ApolloServer({ typeDefs, resolvers });
// @ts-ignore
module.exports = micro_cors_1.default(apolloServer.createHandler());
//# sourceMappingURL=server.js.map