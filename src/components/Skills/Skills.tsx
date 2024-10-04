import React from 'react'
import './Skill.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import { HiBadgeCheck } from 'react-icons/hi'
import SkillCard from './SkillCard/SkillCard'

const FrontEndSkillsData = [
    {
        name: 'React',
        level: 'Advanced',
    },
    {
        name: 'Next.Js',
        level: 'Intermediate',
    },
    {
        name: 'Javascript',
        level: 'Advanced',
    },
    {
        name: 'Typescript',
        level: 'Advanced',
    },
    {
        name: 'Zustand',
        level: 'Intermediate',
    },
    {
        name: 'HTML & CSS',
        level: 'Advanced',
    },
]

const BackEndSkillsData = [
    {
        name: 'Node.Js',
        level: 'Intermediate',
    },
    {
        name: 'Express',
        level: 'Intermediate',
    },
    {
        name: 'MongoDB',
        level: 'Advanced',
    },
    {
        name: 'ASP.Net Core',
        level: 'Intermediate',
    },
    {
        name: 'REST API',
        level: 'Advanced',
    },
    {
        name: 'Azure DevOps',
        level: 'Intermediate',
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
