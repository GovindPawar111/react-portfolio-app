import React, { ReactNode } from 'react'

interface SocialIconProps {
    icon: ReactNode
    color: string
    link: string
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: props.color }}
            onClick={() => {
                window.open(props.link, '_blank')
            }}
        >
            {props.icon}
        </div>
    )
}

export default SocialIcon
