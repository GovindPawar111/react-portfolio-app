const resumeLink = import.meta.env.VITE_RESUME_LINK

export const scrollToSection = (sectionId: string) => {
    document
        .querySelector('#' + sectionId)
        ?.scrollIntoView({ behavior: 'smooth' })
}

export const downloadResume = () => {
    const link = resumeLink
    window.open(link, '_blank')
}

export default scrollToSection
