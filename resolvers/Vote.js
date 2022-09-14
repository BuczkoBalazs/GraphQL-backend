exports.Vote = {
    postedBy: ({ postedBy }, args, { users }) => {
        return users.find( user => user.id === postedBy)
    },
    cocktailID: ({ cocktailID }, args, { cocktails }) => {
        return cocktails.find( cocktail => cocktail.id === cocktailID)
    }
};