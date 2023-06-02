import React, { ReactNode } from 'react'

import './InfoCard.scss'

interface InfoCardProps {
    icon: ReactNode
    title: string
    subtitle: string
}

const InfoCard = (props: InfoCardProps): React.ReactElement => {
    return (
        <div className="info-container">
            <div className="info-box">
                <div className="info-icon">{props.icon}</div>
                <h3 className="info-title">{props.title}</h3>
                <span className="info-subtitle">{props.subtitle}</span>
            </div>
        </div>
    )
}

export default InfoCard
