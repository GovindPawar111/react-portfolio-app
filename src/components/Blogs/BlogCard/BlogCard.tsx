import React from 'react'
import './BlogCard.scss'
import Arrow from './../../sharedComponent/Arrow/Arrow'

interface BlogCardProps {
    user: string
    date: string
    image: string
    title: string
    description: string
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
    return (
        <div className="blog-card">
            <div className="image-section">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name">By {props.user}</div>
                    <div className="posted-date">{props.date}</div>
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="read-more-cta">
                    <span className="text"></span>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
