import React from 'react'
import './Blogs.scss'
import SectionComponent from '../sharedComponent/SectionComponent/SectionComponent'
import BlogCard from './BlogCard/BlogCard'
import BlogImg1 from '../../images/blogs/blog-thumb-1.jpg'
import BlogImg2 from '../../images/blogs/blog-thumb-2.jpg'
import BlogImg3 from '../../images/blogs/blog-thumb-3.jpg'

const Blogs: React.FC = () => {
    return (
        <SectionComponent id='blogs' title='Blogs & Articles' background='dark'>
            <div className="blog-content-wrapper">
                <BlogCard
                    user={'Govind Pawar'}
                    date={'May 8 2023'}
                    image={BlogImg1}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magnam et molestiae consequatur illo explicabo exercitationem iusto nobis incidunt esse voluptatem, perferendis in laborum non harum dolor quia inventore cum?'}
                />
                <BlogCard
                    user={'Govind Pawar'}
                    date={'Dec 24 2022'}
                    image={BlogImg2}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magnam et molestiae consequatur illo explicabo exercitationem iusto nobis incidunt esse voluptatem, perferendis in laborum non harum dolor quia inventore cum?'}

                />
                <BlogCard
                    user={'Govind Pawar'}
                    date={'March 15 2023'}
                    image={BlogImg3}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magnam et molestiae consequatur illo explicabo exercitationem iusto nobis incidunt esse voluptatem, perferendis in laborum non harum dolor quia inventore cum?'}
                />
            </div>

        </SectionComponent>
    )
}

export default Blogs;
