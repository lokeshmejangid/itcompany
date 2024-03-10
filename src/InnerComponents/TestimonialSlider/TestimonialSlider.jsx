import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './TestimonialSlider.css'
import testimonialSliderArr from '../../Utils/TestimonialSlider.json'

const TestimonialSlider = () => {
    const [sliderCount, setSliderCount] = useState(0);

    const testimonialSliderRun = (e) =>{
        setSliderCount(e);
    }

    return (
        <Grid item md={11.5} xs={12} container spacing={0} className='testimonialSlider' justifyContent='start'>
            <Grid item md={5} xs={12} container spacing={0} alignItems='center' justifyContent='center'>
                <div className="testimonialSliderLeft">
                    <img className='bgAnimation' src="./image/TestimonialSliderImg/bgAnimationImg.webp" alt="" />
                    {testimonialSliderArr.map((value, index) => index === sliderCount ? <img key={index} className='mainImg' src={value.img} alt="" /> : "")}

                    <img className='feedbackImg' src="./image/TestimonialSliderImg/feedbackImg.webp" alt="" />
                </div>
            </Grid>
            <Grid item md={6} xs={12} container spacing={0} alignItems='center' className='testimonialSliderRight'>
                {testimonialSliderArr.map((value, index) => index === sliderCount ? <p key={index}>{`${value.des[0]} `}<span>{value.des[1]}</span>{` ${value.des[2]}`}</p> : "")}
                <img src="./image/TestimonialSliderImg/desBg.webp" alt="" />
                <div className="testimonialSliderRightBottom">
                    <div className="sliderNavigation">
                        {testimonialSliderArr.map((value, index) => <div key={index} 
                        className={index === sliderCount ? "activeSlider" : ""}
                        onClick={(e)=>testimonialSliderRun(index)}
                        ></div>)}
                    </div>
                    <div className="founder">
                        <h4>Mathias Herasen</h4>
                        <p>Founder of <span>GamerPay</span></p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default TestimonialSlider