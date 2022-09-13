const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/schema');
const { Cocktail } = require('./resolvers/Cocktail');
const { Query } = require('./resolvers/Query');
const { User } = require('./resolvers/User');
const { cocktails, landingSlides, users } = require('./db/db')

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Cocktail,
    Query,
    User
  },
  context: {
    cocktails,
    landingSlides,
    users
  }
});

server.listen()
  .then(({ url }) => {
  console.log('Server is listening on ' + url);
});