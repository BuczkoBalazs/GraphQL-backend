const { users } = require('../db/db')

exports.Cocktail = {
    userLiked: ({ id }, args, context) => {
      return users.filter(user => user.favCocktails.includes(id))
    }
};