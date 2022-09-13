const { cocktails, landingSlides, users } = require('./db/db')

exports.Query = {
    cocktail: (parent, { id }, context) => {
        const cocktail = cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: () => cocktails,
    landingSlide: (parent, { id }, context) => {
        const slide = landingSlides.find(slide => slide.id === id)
        return slide ? slide : null 
    },
    landingSlides: () => landingSlides,
    user: (parent, { id }, context) => {
      const user = users.find(user => user.id === id)
      return user ? user : null 
    },
    users: () => users
};