import { Grid } from '@mui/material'
import React from 'react'
import './BlogSection.css'
import MiniHeading from '../MiniHeading/MiniHeading'
import MainHeading from '../MainHeading/MainHeading'
import BlogCard from '../BlogCard/BlogCard'
import blogCardArr from '../../Utils/BlogCard.json'

const BlogSection = () => {
    return (
        <Grid container spacing={0} justifyContent='center' className='blogSection'>
            <Grid item sm={12}>
                <img src="./image/BlogSectionImg/bg.webp" alt="" />
                <img src="./image/BlogSectionImg/bg.webp" alt="" />
                <MiniHeading frist='feature' addClass="centerMiniHeading" />
                <MainHeading f='Best Digital' s='Technology' t='Agency For People' addClass="centerMainHeading" />
            </Grid>
            <Grid item sm={11} container spacing={3} justifyContent='center'>
                {blogCardArr.map((value, index) => <BlogCard key={index} val={value} />)}
            </Grid>
        </Grid>
    )
}

export default BlogSection