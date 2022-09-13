const { gql } = require('apollo-server');


exports.typeDefs = gql`
  type Query {
    cocktail(id: ID!): Cocktail
    cocktails: [Cocktail!]!
    landingSlide(id: ID!): LandingSlide
    landingSlides: [LandingSlide!]!
    user(id: ID!): User
    users: [User!]!
  }
  type Cocktail {
    id: ID!
    name: String!
    howto: String!
    ingredients: String!
    image: String!
    favourite: Boolean!
    userLiked: [User!]! 
  }
  type LandingSlide {
    id: ID!
    title: String!
    text: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    cocktails: [Cocktail!]!
  }
`;