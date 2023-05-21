import React from 'react'
import './IntroContent.scss'
import handIcon from '../../../images/hand.png'
import CallToAction from '../../sharedComponent/CallToAction/CallToAction'
import mainImage from '../../../images/girl.png'
import { BsAwardFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import scrollToSection from '../../../utils/helper'

const IntroContent: React.FC = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={handIcon} />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">Govind Pawar</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta assumenda commodi ullam nam modi harum ratione
                        minima vitae aperiam ex cum unde magni officiis magnam,
                        facilis fuga eligendi error eveniet?
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => scrollToSection('contact')}
                    />
                </div>
                <div className="right-col">
                    <img src={mainImage} alt="hero section" />
                    <div className="highlight horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlight vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContent
