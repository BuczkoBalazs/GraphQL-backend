exports.Cocktail = {
    userLiked: ({ id }, args, { users }) => {
      return users.filter(user => user.favCocktails.includes(id))
    },
    votes: ({ id }, args, { votes }) => {
      return votes.filter(vote => vote.cocktailID === id)
    }
};