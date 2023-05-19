import React from 'react'

const FiltersData = [
    {
        name: 'All',
        id: 'all',
    },
    {
        name: 'Products',
        id: 'products',
    },
    {
        name: 'Web Pages',
        id: 'web-page',
    },
    {
        name: 'Web Pages',
        id: 'web-page',
    },
    {
        name: 'Mobile-Apps',
        id: 'mobile-app',
    },
]

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = (props) => {
    return (
        <ul className="filters-menu-items">
            <li className="filter-menu-item"></li>
        </ul>
    )
}

export default Filters
