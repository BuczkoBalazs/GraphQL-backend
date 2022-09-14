exports.User = {
    cocktails: ({ id }, args, { cocktails }) => {
      return cocktails.filter(cocktail => cocktail.userFav.includes(id))
    },
    votes: ({ id }, args, { votes }) => {
      return votes.filter(vote => vote.postedBy === id)
    }
};