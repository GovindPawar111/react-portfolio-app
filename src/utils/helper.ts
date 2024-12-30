export const scrollToSection = (sectionId: string) => {
    document
        .querySelector('#' + sectionId)
        ?.scrollIntoView({ behavior: 'smooth' })
}

export const downloadResume = () => {
    const link =
        'https://drive.google.com/file/d/1yHio74tzIimMw1qOte5M1kB9r2yzuboC/view?usp=sharing'
    window.open(link, '_blank')
}

export default scrollToSection
