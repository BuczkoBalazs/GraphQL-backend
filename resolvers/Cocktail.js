exports.Cocktail = {
    userLiked: ({ id }, args, { users }) => {
      return users.filter(user => user.favCocktails.includes(id))
    }
};