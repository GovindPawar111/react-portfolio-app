import React from 'react'
import './Skill.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import techIcons from '../../images/tech-icons.png'
import CallToAction from '../sharedComponent/CallToAction/CallToAction'
import { RiExternalLinkLine } from 'react-icons/ri'
import { downloadResume } from '../../utils/helper'

const Skills: React.FC = () => {
    return (
        <SectionComponent id={'skills'} background={'dark'}>
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img src={techIcons} alt="JS, React, HTML, CSS" />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea unde perspiciatis illo saepe reprehenderit placeat
                        rerum voluptates doloribus debitis quae repellendus,
                        quam nostrum cum perferendis sequi quis. Itaque, earum
                        odit. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ex quis pariatur architecto voluptates
                        in vel modi tenetur corporis deserunt quod ducimus, eius
                        delectus natus, corrupti quas exercitationem obcaecati
                        sapiente? Laborum!
                    </p>
                    <CallToAction
                        text={'Resume'}
                        icon={<RiExternalLinkLine />}
                        action={downloadResume}
                    />
                </div>
            </div>
        </SectionComponent>
    )
}

export default Skills
