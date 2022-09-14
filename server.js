const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/schema');
const { Cocktail } = require('./resolvers/Cocktail');
const { Query } = require('./resolvers/Query');
const { User } = require('./resolvers/User');
const { Vote } = require('./resolvers/Vote')
const { cocktails, landingSlides, users, votes } = require('./db/db')

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Cocktail,
    Query,
    User,
    Vote
  },
  context: {
    cocktails,
    landingSlides,
    users,
    votes
  }
});

server.listen()
  .then(({ url }) => {
  console.log('Server is listening on ' + url);
});