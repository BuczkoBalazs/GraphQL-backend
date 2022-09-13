exports.Query = {
    cocktail: (parent, { id }, { cocktails }) => {
        const cocktail = cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: (parent, args, { cocktails }) => cocktails,
    landingSlide: (parent, { id }, { landingSlides }) => {
        const slide = landingSlides.find(slide => slide.id === id)
        return slide ? slide : null 
    },
    landingSlides: (parent, args, { landingSlides }) => landingSlides,
    user: (parent, { id }, { users }) => {
      const user = users.find(user => user.id === id)
      return user ? user : null 
    },
    users: (parent, args, { users }) => users
};