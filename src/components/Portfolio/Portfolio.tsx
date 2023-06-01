import React, { useState } from 'react'
import './Portfolio.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import Filters from './Filters/Filters'
import ProjectsData from '../../models/ShowCaseModel'
import ShowCase from './ShowCase/ShowCase'
import thumb1 from '../../images/portfolio/thumb-1.png'
import thumb2 from '../../images/portfolio/thumb-2.png'
import thumb3 from '../../images/portfolio/thumb-3.png'
import thumb4 from '../../images/portfolio/thumb-4.png'
import thumb5 from '../../images/portfolio/thumb-5.png'
import thumb6 from '../../images/portfolio/thumb-6.png'
import thumb7 from '../../images/portfolio/thumb-7.png'

const projectsData: ProjectsData[] = [
    {
        id: 1,
        name: 'Website For Candies',
        tags: ['static-page'],
        liveLink: 'https://govindpawar111.github.io/websiteForCandies/',
        githubLink: 'https://github.com/GovindPawar111/websiteForCandies',
        media: {
            thumbnail: thumb1,
        },
    },
    {
        id: 2,
        name: 'Image Gallery',
        tags: ['static-page'],
        liveLink: 'https://govindpawar111.github.io/imageGallery/',
        githubLink: 'https://github.com/GovindPawar111/imageGallery',
        media: {
            thumbnail: thumb2,
        },
    },
    {
        id: 3,
        name: 'Table Tennis Score Keeper',
        tags: ['static-page'],
        liveLink: 'https://govindpawar111.github.io/tableTennisScoreKeeper/',
        githubLink: 'https://github.com/GovindPawar111/tableTennisScoreKeeper',
        media: {
            thumbnail: thumb3,
        },
    },
    {
        id: 4,
        name: 'Blog Post Node App',
        tags: ['other'],
        liveLink: 'https://blogpostnodeapplication.onrender.com/',
        githubLink: 'https://github.com/GovindPawar111/blog_post_app',
        media: {
            thumbnail: thumb4,
        },
    },
    {
        id: 5,
        name: 'Expense Tracker App',
        tags: ['react-app'],
        liveLink: 'https://expense-traker-application.netlify.app/',
        githubLink: 'https://github.com/GovindPawar111/expesnseTrackerApp',
        media: {
            thumbnail: thumb5,
        },
    },
    {
        id: 6,
        name: 'Note Taking App',
        tags: ['react-app'],
        liveLink: 'https://notetaking-application.netlify.app/',
        githubLink: 'https://github.com/GovindPawar111/react-note-app',
        media: {
            thumbnail: thumb6,
        },
    },
    {
        id: 7,
        name: 'React Portfolio App',
        tags: ['react-app'],
        liveLink: 'https://govind-pawar.netlify.app/',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb7,
        },
    },
]

const Portfolio: React.FC = () => {
    const [projects, setProjects] = useState<ProjectsData[]>(projectsData)
    const [transition, setTransition] = useState<string>('')

    const filterProjectsHandler = (tag: string): void => {
        setTransition('zoom-out')
        setTimeout(() => {
            if (tag === 'all') {
                setProjects(projectsData)
            } else {
                const filteredProject = projectsData.filter((project) =>
                    project.tags.includes(tag)
                )
                setProjects(filteredProject)
            }
            setTransition('zoom-in')
        }, 200)

        setTimeout(() => {
            setTransition('')
        }, 600)
    }

    return (
        <SectionComponent
            id="portfolio"
            title="Check my Portfolio"
            background={'light'}
            className="portfolio"
        >
            <div className="portfolio-content-wrapper">
                <Filters onFilterProjectHandler={filterProjectsHandler} />
                <ShowCase data={projects} transition={transition} />
            </div>
        </SectionComponent>
    )
}

export default Portfolio
