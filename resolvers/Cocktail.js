exports.Cocktail = {
    userLiked: ({ id }, { filter }, { db }) => {
      return filter ?
      db.users.filter(user => user.favCocktails.includes(id) && user.age > filter.age) :
      db.users.filter(user => user.favCocktails.includes(id))
    },
    votes: ({ id }, args, { db }) => {
      return db.votes.filter(vote => vote.cocktailID === id)
    }
};