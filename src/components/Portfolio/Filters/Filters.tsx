import React, { useState } from 'react'
import './Filters.scss'
import classNames from 'classnames'

const FiltersData = [
    {
        name: 'All',
        id: 'all',
    },
    {
        name: 'Web Apps',
        id: 'web-app',
    },
    {
        name: 'Web Pages',
        id: 'web-page',
    },
    {
        name: 'Mobile-Apps',
        id: 'mobile-app',
    },
    {
        name: 'Products',
        id: 'product',
    },
]

interface FiltersProps {
    onFilterProjectHandler: (tag: string) => void
}

const Filters: React.FC<FiltersProps> = (props) => {
    const [activeFilter, setActiveFilter] = useState<string>('All')

    const menuItemClickHandler = (id: string) => {
        setActiveFilter(id)
        props.onFilterProjectHandler(id)
    }

    return (
        <ul className="filter-menu-items">
            {FiltersData.map(item => {
                const FiltersClassName = classNames('filter-menu-item', { active: activeFilter === item.id })
                return (
                    <li
                        key={item.id}
                        className={FiltersClassName}
                        onClick={() => menuItemClickHandler(item.id)}
                    >
                        {item.name}
                    </li>
                )
            })}
        </ul>
    )
}

export default Filters
