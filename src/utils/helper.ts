export const scrollToSection = (sectionId: string) => {
    document
        .querySelector('#' + sectionId)
        ?.scrollIntoView({ behavior: 'smooth' })
}

export default scrollToSection
