import React from 'react'
import './Footer.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import SocialIcon from '../sharedComponent/SocialIcon/SocialIcon'

import { scrollToSection } from './../../utils/helper'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK
const githubLink = import.meta.env.VITE_GITHUB_LINK

const Footer: React.FC = () => {
    return (
        <SectionComponent background="light" className="footer">
            <div className="footer-content-wrapper">
                <div className="footer-title">
                    <h1>Govind Pawar</h1>
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('experience')}
                    >
                        Experience
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('portfolio')}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        icon={<FaLinkedinIn />}
                        color={'#0a66c2'}
                        link={linkedinLink}
                    />
                    <SocialIcon
                        icon={<FaGithub />}
                        color={'#0d2636'}
                        link={githubLink}
                    />
                    <SocialIcon
                        icon={<MdOutlineMail />}
                        color={'#f1592b'}
                        email="pawargovind511@gmail.com"
                    ></SocialIcon>
                </div>

                <div className="bottom-bar">
                    <div className="copyright-text">
                        Made with ❤️ and passion.
                    </div>
                </div>
            </div>
        </SectionComponent>
    )
}

export default Footer
