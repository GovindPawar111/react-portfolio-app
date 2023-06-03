import React from 'react'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import aboutImage from '../../images/about/about-img.jpg'
import CallToAction from '../sharedComponent/CallToAction/CallToAction'
import { RiExternalLinkLine } from 'react-icons/ri'
import { downloadResume } from '../../utils/helper'

import './About.scss'
import InfoCard from '../sharedComponent/InfoCard/InfoCard'
import { FaAward } from 'react-icons/fa'
import { BiBriefcase } from 'react-icons/bi'

const About = (): React.ReactElement => {
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
                        />
                        <InfoCard
                            icon={<FaAward />}
                            title={'Projects'}
                            subtitle={'10+ Completed'}
                        />
                    </div>
                    <p className="about-description">
                        I am a passionate full-stack developer with 2 years of
                        industry experience. Currently, I am working at Cyncly,
                        Pune. where I have developed a strong expertise in full
                        stack technology's like HTML, CSS, SCSS, React, Node.js,
                        MongoDB, and ASP.NET. I have also completed more than 10
                        personal projects. I strive to create engaging and
                        user-friendly applications that meet the needs of
                        clients and end-users alike.
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
