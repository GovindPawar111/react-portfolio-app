import React from 'react'
import './Footer.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import SocialIcon from '../sharedComponent/SocialIcon/SocialIcon'

import { scrollToSection } from './../../utils/helper'
import { FaYoutube, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()
    return (
        <SectionComponent background="dark" className="footer">
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
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('portfolio')}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection('blogs')}
                    >
                        Blog & Articles
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
                        icon={<FaYoutube />}
                        color={'#ff0000'}
                        link={'https://www.youtube.com/'}
                    />
                    <SocialIcon
                        icon={<FaGithub />}
                        color={'#0d2636'}
                        link={'https://www.youtube.com/'}
                    />
                    <SocialIcon
                        icon={<FaLinkedinIn />}
                        color={'#0a66c2'}
                        link={'https://www.youtube.com/'}
                    />
                    <SocialIcon
                        icon={<FaInstagram />}
                        color={'#e84c88'}
                        link={'https://www.youtube.com/'}
                    />
                </div>

                <div className="bottom-bar">
                    <div className="copyright-text">
                        {`Copyright ${currentYear} Govind Pawar Portfolio | All
                        Rights Reserved`}
                    </div>
                </div>
            </div>
        </SectionComponent>
    )
}

export default Footer
