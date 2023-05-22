import React from 'react'
import './ContactInfo.scss'

import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-box">
            <h4>
                It would be delighted to talk to you. Please feel free to
                contact me at the specified phone number or email address.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 7218302823</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">pawargovind511@gmail.com</span>
            </div>
        </div>
    )
}

export default ContactInfo
