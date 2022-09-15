exports.Mutation = {
    addLandingSlide: (parent, { input }, { db }) => {

        const { title, text } = input;

        const newLandingSlide = {
            id: db.landingSlides.length.toString(),
            title: input.title,
            text: input.text
        }

        db.landingSlides.push(newLandingSlide)

        return newLandingSlide
    },
    deleteLandingSlide: (parent, { id }, { db } ) => {
        db.landingSlides = db.landingSlides.filter(slide => slide.id !== id);
        return true
    }
}