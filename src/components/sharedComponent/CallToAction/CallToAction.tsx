import React, { ReactNode } from 'react'
import './CallToAction.scss'
import Arrow from '../Arrow/Arrow'

interface CallToActionProps {
    text: string
    icon: ReactNode
    action?: () => void
}

const CallToAction: React.FC<CallToActionProps> = (props) => {
    return (
        <div className="call-to-action">
            <span className="call-to-action_text">{props.text}</span>
            {props.icon ? <div className="icon">{props.icon}</div> : <Arrow />}
        </div>
    )
}

export default CallToAction
