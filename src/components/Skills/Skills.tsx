import React from 'react'
import './Skill.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import { HiBadgeCheck } from 'react-icons/hi'

const FrontEndSkillsData = [
    {
        name: 'HTML',
        level: 'Intermediate',
    },
    {
        name: 'CSS & SCSS',
        level: 'Intermediate',
    },
    {
        name: 'Javascript',
        level: 'Intermediate',
    },
    {
        name: 'Typescript',
        level: 'Basic',
    },
    {
        name: 'React',
        level: 'Intermediate',
    },
    {
        name: 'Bootstrap',
        level: 'Basic',
    },
    {
        name: 'Zustand',
        level: 'Basic',
    },
]

const BackEndSkillsData = [
    {
        name: 'Node.Js',
        level: 'Basic',
    },
    {
        name: 'Express',
        level: 'Intermediate',
    },
    {
        name: 'MongoDB',
        level: 'Intermediate',
    },
    {
        name: 'ASP.Net',
        level: 'Intermediate',
    },
    {
        name: 'REST API',
        level: 'Basic',
    },
    {
        name: 'Azure',
        level: 'Basic',
    },
]

const Skills: React.FC = () => {
    return (
        <SectionComponent id={'skills'} title="Skills" background={'light'}>
            <div className="skills-content-wrapper">
                <div className="skills-content">
                    <h3 className="skills-title">Frontend Stack</h3>
                    <div className="skills-box">
                        <div className="skills-group">
                            {FrontEndSkillsData.map((data) => {
                                return (
                                    <div className="skills-data">
                                        <div className="skills-icon">
                                            <HiBadgeCheck />
                                        </div>
                                        <div>
                                            <h3 className="skills-name">
                                                {data.name}
                                            </h3>
                                            <span className="skills-level">
                                                {data.level}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="skills-content">
                    <h3 className="skills-title">Backend Stack</h3>
                    <div className="skills-box">
                        <div className="skills-group">
                            {BackEndSkillsData.map((data) => {
                                return (
                                    <div className="skills-data">
                                        <div className="skills-icon">
                                            <HiBadgeCheck />
                                        </div>
                                        <div>
                                            <h3 className="skills-name">
                                                {data.name}
                                            </h3>
                                            <span className="skills-level">
                                                {data.level}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </SectionComponent>
    )
}

export default Skills
