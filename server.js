const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/schema');
const { cocktails, landingSlides, users } = require('./db/db')

const resolvers = {
  Query: {
    cocktail: (parent, { id }, context) => {
        const cocktail = cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: () => cocktails,
    landingSlide: (parent, { id }, context) => {
        const slide = landingSlides.find(slide => slide.id === id)
        return slide ? slide : null 
    },
    landingSlides: () => landingSlides,
    user: (parent, { id }, context) => {
      const user = users.find(user => user.id === id)
      return user ? user : null 
    },
    users: () => users
  },
  User: {
    cocktails: ({ id }, args, context) => {
      return cocktails.filter(cocktail => cocktail.userFav.includes(id))
    } 
  },
  Cocktail: {
    userLiked: ({ id }, args, context) => {
      return users.filter(user => user.favCocktails.includes(id))
    }
  }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()
    .then(({ url }) => {
    console.log('Server is listening on ' + url);
});