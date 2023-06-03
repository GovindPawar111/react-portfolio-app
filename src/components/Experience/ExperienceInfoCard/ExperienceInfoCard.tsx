import React, { ReactNode } from 'react'
import './ExperienceInfoCard.scss'

interface ExperienceInfoCardProps {
    icon: ReactNode
    year: string
    title: string
    description: string
}

const ExperienceInfoCard = (
    props: ExperienceInfoCardProps
): React.ReactElement => {
    return (
        <div className="info-content">
            <div className="info-icon">{props.icon}</div>
            <span className="info-year">{props.year}</span>
            <h3 className="info-title">{props.title}</h3>
            <p className="info-text">{props.description}</p>
        </div>
    )
}

export default ExperienceInfoCard
