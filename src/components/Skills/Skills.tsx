import React from 'react'
import './Skill.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import { HiBadgeCheck } from 'react-icons/hi'
import SkillCard from './SkillCard/SkillCard'

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
        <SectionComponent id={'skills'} title="My Skills" background={'light'}>
            <div className="skills-content-wrapper">
                <div className="skills-content">
                    <h3 className="skills-title">Frontend Development</h3>
                    <div className="skills-box">
                        <div className="skills-group">
                            {FrontEndSkillsData.map((skill, index) => {
                                return (
                                    <SkillCard
                                        key={index}
                                        icon={<HiBadgeCheck />}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="skills-content">
                    <h3 className="skills-title">Backend Development</h3>
                    <div className="skills-box">
                        <div className="skills-group">
                            {BackEndSkillsData.map((skill, index) => {
                                return (
                                    <SkillCard
                                        key={index}
                                        icon={<HiBadgeCheck />}
                                        name={skill.name}
                                        level={skill.level}
                                    />
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
