import React, { ReactNode } from 'react'

interface SocialIconProps {
    icon: ReactNode
    color: string
    link?: string
    email?: string
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: props.color }}
            onClick={() => {
                if (props.email) {
                    const emailTo = 'mailto:' + props.email
                    window.location.href = emailTo
                } else {
                    window.open(props.link, '_blank')
                }
            }}
        >
            {props.icon}
        </div>
    )
}

export default SocialIcon
