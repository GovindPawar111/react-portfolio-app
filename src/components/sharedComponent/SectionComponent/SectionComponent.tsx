import React, { ReactNode } from 'react'
import './SectionComponent.scss'
import classNames from 'classnames'

interface SectionComponentProps {
    children: ReactNode
    id?: string
    className?: string
    title?: string
    background: string
}

const SectionComponent: React.FC<SectionComponentProps> = (props) => {
    const sectionClassName = classNames(
        'section-component',
        props.className,
        { dark: props.background === 'dark' },
        { light: props.background === 'light' }
    )

    return (
        <div id={props.id || ''} className={sectionClassName}>
            <div className="content">
                {props.title && (
                    <div className="section-title">
                        <h2>{props.title}</h2>
                    </div>
                )}
                {props.children}
            </div>
        </div>
    )
}

export default SectionComponent
