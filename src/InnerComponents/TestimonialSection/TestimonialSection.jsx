import { Grid } from '@mui/material'
import React from 'react'
import './TestimonialSection.css';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';

const TestimonialSection = () => {
  return (
    <Grid container spacing={0} className='testimonialSection' justifyContent='end'>
      <Grid item xs={12} container spacing={0}>
        <h1>Testimonial</h1>
      </Grid>
      <TestimonialSlider />
    </Grid>
  )
}

export default TestimonialSection