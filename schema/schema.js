const { gql } = require('apollo-server');


exports.typeDefs = gql`
  type Query {
    cocktail(id: ID!): Cocktail
    cocktails: [Cocktail!]!
    landingSlide(id: ID!): LandingSlide
    landingSlides: [LandingSlide!]!
    user(id: ID!): User
    users: [User!]!
    vote(id: ID!): Vote
    votes: [Vote!]!
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
  type Vote {
    id: ID!
    title: String!
    text: String!
    postedBy: User!
    cocktail: Cocktail!
  }
`;