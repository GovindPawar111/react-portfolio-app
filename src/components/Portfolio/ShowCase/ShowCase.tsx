import React from 'react'
import './ShowCase.scss'
import ProjectsData from '../../../models/ShowCaseModel'
import Arrow from './../../sharedComponent/Arrow/Arrow'
import classNames from 'classnames'

interface ShowCaseProps {
    data: ProjectsData[]
    transition: string
}

const ShowCase: React.FC<ShowCaseProps> = (props) => {
    const showCaseClassName = classNames('showcase-item', props.transition)

    return (
        <div className="projects-showcase">
            {props.data.map((project) => (
                <div className={showCaseClassName} key={project.id}>
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <img src={project.media.thumbnail} alt="project" />
                </div>
            ))}
        </div>
    )
}

export default ShowCase
