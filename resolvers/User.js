exports.User = {
    cocktails: ({ id }, args, { cocktails }) => {
      return cocktails.filter(cocktail => cocktail.userFav.includes(id))
    } 
};