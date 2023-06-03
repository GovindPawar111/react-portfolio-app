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
        title: 'B-Tech in Mechanical Engineering',
        description:
            'I graduated from the G. H. Raisoni College of Engineering and Management in Pune. During this course, I received an 8.2 CGPA. In the course, I learned about a variety of topics and completed a number of major and projects.',
    },
    {
        id: '1',
        year: '2016 - 2019',
        title: 'Diploma in Mechanical Engineering',
        description:
            'I graduated from the Government Polytechnic College in Solapur with a diploma in mechanical engineering. During this course, I received an 83%.',
    },
]

const ExperienceData = [
    {
        id: '1',
        year: '2022 - Present',
        title: 'Software Engineer',
        description:
            'Currently, I am working at Cyncly in the IS7 Pune Team. During this time, I worked on the latest technologies in web development. from front end to back end, like React, DotNet 6 with MongoDB, and Azure.',
    },
    {
        id: '1',
        year: '2021 - 2022',
        title: 'Software Engineer Intern',
        description:
            'I finished my 6-month internship at Cyncly. I worked with the Mooble team during this time. During this time, I learned about MVC architecture, Asp.net, and Javascript.',
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
