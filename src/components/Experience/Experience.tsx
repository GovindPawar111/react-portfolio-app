import React from 'react'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import ExperienceInfoCard from './ExperienceInfoCard/ExperienceInfoCard'
import { SlGraduation } from 'react-icons/sl'
import { BiBriefcase } from 'react-icons/bi'
import './Experience.scss'

const EducationData = [
    {
        id: '1',
        year: '2019 - 2022',
        title: 'Bachelor of Technology in Mechanical Engineering',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum asperiores perspiciatis a sint nihil incidunt',
    },
    {
        id: '1',
        year: '2016 - 2019',
        title: 'Diploma in Mechanical Engineering',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum asperiores perspiciatis a sint nihil incidunt',
    },
]

const ExperienceData = [
    {
        id: '1',
        year: '2022 - Present',
        title: 'Software Engineer',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum asperiores perspiciatis a sint nihil incidunt',
    },
    {
        id: '1',
        year: '2021 - 2022',
        title: 'Software Engineer Intern',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum asperiores perspiciatis a sint nihil incidunt',
    },
]

const Experience = (): React.ReactElement => {
    return (
        <SectionComponent
            id="experience"
            title="Experience & Education"
            background={'dark'}
        >
            <div className="experience-content-wrapper">
                <div className="info-container">
                    {ExperienceData.map((item, index) => (
                        <ExperienceInfoCard
                            key={index}
                            icon={<SlGraduation />}
                            year={item.year}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="info-container">
                    {EducationData.map((item, index) => (
                        <ExperienceInfoCard
                            key={index}
                            icon={<BiBriefcase />}
                            year={item.year}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </SectionComponent>
    )
}

export default Experience
