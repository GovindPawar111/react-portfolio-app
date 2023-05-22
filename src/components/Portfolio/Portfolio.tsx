import React, { useState } from 'react'
import './Portfolio.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import Filters from './Filters/Filters'
import ProjectsData from '../../models/ShowCaseModel'
import ShowCase from './ShowCase/ShowCase'
import thumb1 from '../../images/portfolio/thumb-1.jpg'
import thumb2 from '../../images/portfolio/thumb-2.jpg'
import thumb3 from '../../images/portfolio/thumb-3.jpg'
import thumb4 from '../../images/portfolio/thumb-4.jpg'
import thumb5 from '../../images/portfolio/thumb-5.jpg'
import thumb6 from '../../images/portfolio/thumb-6.jpg'
import thumb7 from '../../images/portfolio/thumb-7.jpg'
import thumb8 from '../../images/portfolio/thumb-8.jpg'

const projectsData: ProjectsData[] = [
    {
        id: 1,
        name: 'Healthy Food Restraint',
        tags: ['static-page'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb7,
        },
    },
    {
        id: 2,
        name: 'Anna & Daniel',
        tags: ['static-page'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb2,
        },
    },
    {
        id: 3,
        name: 'Web Design Landing Page',
        tags: ['react-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb8,
        },
    },
    {
        id: 4,
        name: 'Business Analytics Web App',
        tags: ['react-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb1,
        },
    },
    {
        id: 5,
        name: 'limitless',
        tags: ['react-app', 'mern-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb6,
        },
    },
    {
        id: 6,
        name: 'Dashboard',
        tags: ['react-app', 'mern-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb4,
        },
    },
    {
        id: 7,
        name: 'Digital Creative Agency',
        tags: ['react-app', 'mern-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb3,
        },
    },
    {
        id: 8,
        name: 'Virtual Reality Experience',
        tags: ['react-app', 'mern-app'],
        liveLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        githubLink: 'https://github.com/GovindPawar111/react-portfolio-app',
        media: {
            thumbnail: thumb5,
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
