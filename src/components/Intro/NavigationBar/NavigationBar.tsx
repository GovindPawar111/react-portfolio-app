import React, { useEffect, useState } from 'react'
import './NavigationBar.scss'
import CallToAction from '../../sharedComponent/CallToAction/CallToAction'
import scrollToSection from '../../../utils/helper'

import { CgMenuRight } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import classNames from 'classnames'

const NavigationBar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenu] = useState<boolean>(false)

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop
            setScrolled(scrollTop > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const menuItemClickHandler = (sectionId: string): void => {
        setMobileMenu((prevState) => !prevState)
        scrollToSection(sectionId)
    }

    const menuClickHandler = (): void => {
        setMobileMenu((prevState) => !prevState)
    }

    const navigationClassName = classNames('navigation', {
        active: mobileMenuOpen,
    })

    const topNavigationBarClassName = classNames('top-navigation-bar', {
        scrolled: scrolled,
    })

    return (
        <div className={topNavigationBarClassName}>
            <div className="navigation-title">
                <div className="navigation-item">
                    <h2>Govind</h2>
                </div>
            </div>
            <div className={navigationClassName}>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler('home')}
                >
                    Home
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler('skills')}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler('portfolio')}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler('blogs')}
                >
                    Blog & Articles
                </span>
                <CallToAction
                    text={'Contact me'}
                    action={() => menuItemClickHandler('contact')}
                />
            </div>
            <div className="mobile-menu" onClick={menuClickHandler}>
                {mobileMenuOpen ? <IoMdClose /> : <CgMenuRight />}
            </div>
        </div>
    )
}

export default NavigationBar
