import { Grid } from '@mui/material'
import React from 'react'
import './SliderBanner.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import CusButton from './CusButton/CusButton'

const SliderBanner = (props) => {
  const { val, ind, next, pre } = props;
  const { h2, p, img } = val;
  const styles = {
    banner: {
      backgroundImage: `url(${img})`
    }
  };
  return (
    <Grid container spacing={0} className='Slider' justifyContent='center' style={styles.banner} >
      <div className='black'></div>
      <Grid container spacing={0} item sm={10} xs={11}>
        <Grid item sm={6} xs={12}>
          <h2>{h2}</h2>
          <p>{p}</p>
          <CusButton name='Book Now' />
          <div className="errow">
            <ArrowBackIos className='Arrow' onClick={pre} />
            <ArrowForwardIos className='Arrow' onClick={next} />
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SliderBanner