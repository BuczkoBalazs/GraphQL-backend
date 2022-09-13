const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/schema');
const { Cocktails } = require('./resolvers/Cocktails')
const { Query } = require('./resolvers/Query')
const { User } = require('./resolvers/User')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Cocktails,
      Query,
      User
    }
});

server.listen()
    .then(({ url }) => {
    console.log('Server is listening on ' + url);
});