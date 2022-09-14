exports.Query = {
    cocktail: (parent, { id }, { cocktails }) => {
        const cocktail = cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: (parent, { filter }, { cocktails }) => {
      return filter ?
      cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      cocktails
    },
    landingSlide: (parent, { id }, { landingSlides }) => {
        const slide = landingSlides.find(slide => slide.id === id)
        return slide ? slide : null 
    },
    landingSlides: (parent, args, { landingSlides }) => landingSlides,
    user: (parent, { id }, { users }) => {
      const user = users.find(user => user.id === id)
      return user ? user : null 
    },
    users: (parent, { filter }, { users }) => {
      return filter ? 
      users.filter(user => user.age > filter.age) :
      users
    },
    vote: (parent, { id }, { votes }) => {
        const vote = votes.find(vote => vote.id === id)
        return vote ? vote : null 
      },
    votes: (parent, args, { votes }) => votes,
};