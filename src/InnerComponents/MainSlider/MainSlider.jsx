import React from 'react'
import './MainSlider.css'
import { Grid } from '@mui/material'

const MainSlider = () => {
  return (
    <Grid container spacing={0} className='MainSlider'>
      <img src="./sliderIm.png" alt="" width="100%"/>
    </Grid>
  )
}

export default MainSlider