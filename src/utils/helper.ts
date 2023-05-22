export const scrollToSection = (sectionId: string) => {
    document
        .querySelector('#' + sectionId)
        ?.scrollIntoView({ behavior: 'smooth' })
}

export const downloadResume = () => {
    const link =
        'https://drive.google.com/file/d/1k-W8H92s5qxKfN4e9K89snedM5Pu4aUA/view?usp=share_link'
    window.open(link, '_blank')
}

export default scrollToSection
