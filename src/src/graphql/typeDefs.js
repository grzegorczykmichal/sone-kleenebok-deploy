"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Float!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }

  type Query {
    listings: [Listing!]!
  }
`;
exports.typeDefs = typeDefs;
