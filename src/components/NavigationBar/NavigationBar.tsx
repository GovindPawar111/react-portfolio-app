import React from 'react'
import './NavigationBar.scss'
import CallToAction from '../sharedComponent/CallToAction/CallToAction'

const NavigationBar: React.FC = () => {
    return (
        <div className="top-navigation-bar">
            <div className="navigation-title">
                <div className="navigation-item">
                    <h1>Govind</h1>
                </div>
            </div>
            <div className="navigation">
                <span className="navigation-item">Skills</span>
                <span className="navigation-item">Portfolio</span>
                <span className="navigation-item">Blog & Articles</span>
                <CallToAction text={'Contact me'} />
            </div>
        </div>
    )
}

export default NavigationBar
