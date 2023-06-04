import React from 'react'
import './IntroContent.scss'
import handIcon from '../../../images/hand.png'
import CallToAction from '../../sharedComponent/CallToAction/CallToAction'
import mainImage from '../../../images/about/about-img.jpg'
import { RiExternalLinkLine } from 'react-icons/ri'
import { downloadResume } from '../../../utils/helper'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SocialIcon from '../../sharedComponent/SocialIcon/SocialIcon'

const IntroContent: React.FC = () => {
    return (
        <div className="intro-content">
            <div className="left-col  highlight">
                <h1 className="title">
                    <span>
                        <span className="text">Hi</span>
                        <span className="icon">
                            <img src={handIcon} />
                        </span>
                        <span className="text">, I'm</span>
                    </span>
                    <span>
                        {' '}
                        <span className="text">
                            <Typewriter
                                words={[
                                    'Govind Pawar',
                                    'a Full-stack Developer',
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                cursorBlinking={true}
                                typeSpeed={180}
                                deleteSpeed={120}
                                delaySpeed={1800}
                            />
                        </span>
                    </span>
                </h1>
                <p>
                    I'm a full-stack developer based in Pune, India. and I'm
                    very passionate and dedicated to my work...
                </p>
                <div className="links">
                    <CallToAction
                        text="Resume"
                        icon={<RiExternalLinkLine />}
                        action={downloadResume}
                    />
                    <div className="social-links">
                        <SocialIcon
                            icon={<FaLinkedinIn />}
                            color={'#fff'}
                            link={
                                'https://in.linkedin.com/in/govind-pawar?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F'
                            }
                        />
                        <SocialIcon
                            icon={<FaGithub />}
                            color={'#fff'}
                            link={'https://github.com/GovindPawar111'}
                        />
                    </div>
                </div>
            </div>
            <div className="right-col">
                <img src={mainImage} alt="hero section" />
            </div>
        </div>
    )
}

export default IntroContent
