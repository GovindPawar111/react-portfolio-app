import React from 'react'
import './ContactInfo.scss'
import { MdEmail } from 'react-icons/md'

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be delighted to speak with you at your convenience.
                Please feel free to contact me at the provided email address.
            </h4>
            <div className="contact-option">
                <MdEmail />
                <span className="text">pawargovind511@gmail.com</span>
            </div>
        </div>
    )
}

export default ContactInfo
