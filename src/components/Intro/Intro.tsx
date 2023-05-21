import './Intro.scss'
import cloud from './../../images/cloud.png'
import cloudSoft from './../../images/cloud-soft.png'
import NavigationBar from '../NavigationBar/NavigationBar'
import IntroContent from '../IntroContent/IntroContent'

export const Intro = (): JSX.Element => {
    return (
        <div id="home" className="intro-section">
            <div className="vector-bg" id="parallax"></div>
            <img src={cloudSoft} className="cloud-soft" />
            <img src={cloud} className="cloud" />
            <div className="content">
                <NavigationBar />
                <IntroContent />
            </div>
        </div>
    )
}

export default Intro
