import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import MuiListItem from './MuiListItem'
import Stack from '@mui/material/Stack'


const BlogCard = ({title, snippet}) => {
    return (
        <MuiListItem>
            <Stack display={'blog'}>
                <Title text ={title}/>
                <Subtitle text={snippet}/>
            </Stack>
        </MuiListItem>
    )
}

export default BlogCard