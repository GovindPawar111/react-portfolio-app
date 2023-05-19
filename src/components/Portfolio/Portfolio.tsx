import React from 'react'
import './Portfolio.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'

const Portfolio: React.FC = () => {
    return (
        <SectionComponent
            id="portfolio"
            title="Check my Portfolio"
            background={'light'}
        >
            <div></div>
        </SectionComponent>
    )
}

export default Portfolio
