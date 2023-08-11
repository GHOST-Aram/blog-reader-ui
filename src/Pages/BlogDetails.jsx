import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BlockContainer from '../components/BlockContainer'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Paragraph from '../components/Paragraph'
import { getBlogs } from '../utils/fectch'
import ErrorAlert from '../components/ErrorAlert'

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const [isError, setIsError] = useState(false)
    const location  = useLocation().state.blog

    useEffect(() =>{
        getBlogs(`http://localhost:8000/blog/${location._id}`).then(
            blog => {
                if(blog.body && blog.title && blog.snippet)
                    setBlog(blog)
                else
                    setIsError(true)
            }
        ).catch(error => setIsError(true))
    }, [location])
    console.log(blog)
    return (
        <BlockContainer>
            <Title text={location.title}/>
            <Subtitle text={location.snippet}/>
            {
                !isError ?
                <Paragraph>{blog.body}</Paragraph>
                : <ErrorAlert closeAlert={() => setIsError(false)}/>
            }
        </BlockContainer>
    )
}

export default BlogDetails