const { cocktails } = require('./db/db')

exports.User = {
    cocktails: ({ id }, args, context) => {
      return cocktails.filter(cocktail => cocktail.userFav.includes(id))
    } 
};