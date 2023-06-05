import React, { ReactNode } from 'react'
import './SkillCard.scss'

interface SkillCardProps {
    icon: ReactNode
    name: string
    level: string
}

const SkillCard = (props: SkillCardProps): React.ReactElement => {
    return (
        <div className="skills-data">
            <div className="skills-icon">{props.icon}</div>
            <div>
                <h3 className="skills-name">{props.name}</h3>
                <span className="skills-level">{props.level}</span>
            </div>
        </div>
    )
}

export default SkillCard
