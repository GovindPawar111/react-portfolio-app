import React from 'react'
import './IntroContent.scss'
import handIcon from '../../../images/hand.png'
import CallToAction from '../../sharedComponent/CallToAction/CallToAction'
import mainImage from '../../../images/girl.png'
import { RiExternalLinkLine } from 'react-icons/ri'
import { downloadResume } from '../../../utils/helper'

const IntroContent: React.FC = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col  highlight">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={handIcon} />
                            </span>
                            <span className="text">, I'm</span>
                        </span>
                        <span className="big-text">Govind Pawar</span>
                    </h1>
                    <p>
                        I'm full-stack developer based in Pune, India. I have 2
                        years of experience building and designing software. and
                        I'm very passionate and dedicated to my work...
                    </p>
                    <CallToAction
                        text="Resume"
                        icon={<RiExternalLinkLine />}
                        action={downloadResume}
                    />
                </div>
                <div className="right-col">
                    <img src={mainImage} alt="hero section" />
                </div>
            </div>
        </div>
    )
}

export default IntroContent
