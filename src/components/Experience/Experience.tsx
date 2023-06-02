import React from 'react'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'

import './Experience.scss'

const Experience = (): React.ReactElement => {
    return (
        <SectionComponent
            id="Experience"
            title="Experience & Qualification"
            background={'dark'}
        >
            <div className="experience-content-wrapper">Experience</div>
        </SectionComponent>
    )
}

export default Experience
