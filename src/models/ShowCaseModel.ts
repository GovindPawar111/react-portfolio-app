export interface ProjectsData {
    id: number
    name: string
    tags: string[]
    liveLink?: string
    githubLink?: string
    media: {
        thumbnail: string
    }
}

export default ProjectsData
