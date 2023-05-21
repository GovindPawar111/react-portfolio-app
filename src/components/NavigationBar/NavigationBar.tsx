import React from 'react'
import './NavigationBar.scss'
import CallToAction from '../sharedComponent/CallToAction/CallToAction'
import scrollToSection from '../../utils/helper'

const NavigationBar: React.FC = () => {
    return (
        <div className="top-navigation-bar">
            <div className="navigation-title">
                <div className="navigation-item">
                    <h1>Govind</h1>
                </div>
            </div>
            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection('skills')}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection('portfolio')}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection('blogs')}
                >
                    Blog & Articles
                </span>
                <CallToAction
                    text={'Contact me'}
                    action={() => scrollToSection('contact')}
                />
            </div>
        </div>
    )
}

export default NavigationBar
