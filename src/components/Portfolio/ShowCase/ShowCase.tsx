import React from 'react'
import './ShowCase.scss'
import ProjectsData from '../../../models/ShowCaseModel'
import classNames from 'classnames'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

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
                            <a href={project?.liveLink} target="_blank">
                                Demo <AiOutlineLink />
                            </a>
                            <a href={project?.githubLink} target="_blank">
                                Github <BsGithub />
                            </a>
                        </div>
                    </div>
                    <img src={project.media.thumbnail} alt="project" />
                </div>
            ))}
        </div>
    )
}

export default ShowCase
