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
            'Currently working at Cyncly, Pune, focusing on the Spaces-Flex product. Led front-end development with React and TypeScript, integrated APIs using ASP.NET Core, and optimized UI/UX, improving loading speeds by up to 60%. Mentored junior developers, ensuring code quality and best practices.',
    },
    {
        id: '1',
        year: '2021 - 2022',
        title: 'Software Engineer Intern',
        description:
            'Completed a 6-month internship at 2020 Spaces, working on the Mooble product. Developed responsive UI components and integrated APIs using MVC architecture with C#. Collaborated in Agile practices to enhance team efficiency and product delivery.',
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
