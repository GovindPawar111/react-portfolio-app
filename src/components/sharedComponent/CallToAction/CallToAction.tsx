import React from 'react'
import './CallToAction.scss'
import Arrow from '../Arrow/Arrow'

interface CallToActionProps {
    text: string
}

const CallToAction: React.FC<CallToActionProps> = (props) => {
    return (
        <div className="call-to-action">
            <span className="call-to-action_text">{props.text}</span>
            <Arrow />
        </div>
    )
}

export default CallToAction
