import React from 'react'
import './ContactInfo.scss'

import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any question you may have about
                freelance writing or content marketing!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 8945613785</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">pawargovind@gmail.com</span>
            </div>
        </div>
    )
}

export default ContactInfo
