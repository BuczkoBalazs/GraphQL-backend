exports.Mutation = {
    addLandingSlide: (parent, { input }, { landingSlides }) => {

        const { title, text } = input;

        const newLandingSlide = {
            id: landingSlides.length,
            title: input.title,
            text: input.text
        }

        landingSlides.push(newLandingSlide)

        return newLandingSlide
    }
}