exports.Cocktail = {
    userLiked: ({ id }, { filter }, { users }) => {
      return filter ?
      users.filter(user => user.favCocktails.includes(id) && user.age > filter.age) :
      users.filter(user => user.favCocktails.includes(id))
    },
    votes: ({ id }, args, { votes }) => {
      return votes.filter(vote => vote.cocktailID === id)
    }
};