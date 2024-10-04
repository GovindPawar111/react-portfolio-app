import React from 'react'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import aboutImage from '../../images/about/about-img.jpg'
import CallToAction from '../sharedComponent/CallToAction/CallToAction'
import { RiExternalLinkLine } from 'react-icons/ri'
import scrollToSection, { downloadResume } from '../../utils/helper'

import './About.scss'
import InfoCard from '../sharedComponent/InfoCard/InfoCard'
import { FaAward } from 'react-icons/fa'
import { BiBriefcase } from 'react-icons/bi'

const About = (): React.ReactElement => {
    const infoCardClickHandler = (sectionId: string): void => {
        scrollToSection(sectionId)
    }

    return (
        <SectionComponent id="about" title="About Me" background={'dark'}>
            <div className="about-content-wrapper">
                <div className="left-col">
                    <img
                        className="about-img"
                        src={aboutImage}
                        alt="my picture"
                    />
                </div>
                <div className="right-col">
                    <div className="info-section">
                        <InfoCard
                            icon={<BiBriefcase />}
                            title={'Experience'}
                            subtitle={'2+ Years Working'}
                            onClick={() => infoCardClickHandler('experience')}
                        />
                        <InfoCard
                            icon={<FaAward />}
                            title={'Projects'}
                            subtitle={'10+ Completed'}
                            onClick={() => infoCardClickHandler('portfolio')}
                        />
                    </div>
                    <p className="about-description">
                        I’m a software developer with 3 years of experience,
                        currently working at Cyncly, Pune. I specialize in
                        creating user-friendly web applications using
                        technologies like React, JavaScript, TypeScript,
                        Node.js, MongoDB, and ASP.NET. Over the years, I’ve
                        worked on both front-end and back-end technologies,
                        building robust, scalable solutions while focusing on
                        crafting applications that are engaging and intuitive
                        for end-users.
                    </p>
                    <CallToAction
                        text="Resume"
                        icon={<RiExternalLinkLine />}
                        action={downloadResume}
                    />
                </div>
            </div>
        </SectionComponent>
    )
}

export default About
