import React from 'react'
import './Contact.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import ContactInfo from './ContactInfo/ContactInfo'
import Form from './Form/Form'

const Contact: React.FC = () => {
    return (
        <SectionComponent
            id="contact"
            title="Any Question? Feel Free to Contact"
            background={'light'}
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </SectionComponent>
    )
}

export default Contact
