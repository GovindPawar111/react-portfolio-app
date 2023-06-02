import React from 'react'
import './Footer.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import SocialIcon from '../sharedComponent/SocialIcon/SocialIcon'

import { scrollToSection } from './../../utils/helper'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

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
                        icon={<FaLinkedinIn />}
                        color={'#0a66c2'}
                        link={
                            'https://in.linkedin.com/in/govind-pawar?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F'
                        }
                    />
                    <SocialIcon
                        icon={<FaGithub />}
                        color={'#0d2636'}
                        link={'https://github.com/GovindPawar111'}
                    />
                    <SocialIcon
                        icon={<MdOutlineMail />}
                        color={'#f1592b'}
                        email="pawargovind511@gmail.com"
                    ></SocialIcon>
                    <SocialIcon
                        icon={<FaWhatsapp />}
                        color={'#00E676'}
                        link={'https://wa.me/7218302823'}
                    />
                </div>

                <div className="bottom-bar">
                    <div className="copyright-text">
                        {`Copyright ${currentYear} Govind Pawar Portfolio | All
                        Rights Reserved.`}
                    </div>
                </div>
            </div>
        </SectionComponent>
    )
}

export default Footer
