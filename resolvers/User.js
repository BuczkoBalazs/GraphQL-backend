exports.User = {
    cocktails: ({ id }, { filter }, { cocktails }) => {
      return filter ? 
      cocktails.filter(cocktail => cocktail.userFav.includes(id) && cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      cocktails.filter(cocktail => cocktail.userFav.includes(id))
    },
    votes: ({ id }, args, { votes }) => {
      return votes.filter(vote => vote.postedBy === id)
    }
};