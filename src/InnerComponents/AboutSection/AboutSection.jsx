import React from 'react'
import './AboutSection.css'
import { Grid } from '@mui/material'
import { PlayArrow, Tune } from '@mui/icons-material'
import MiniHeading from '../MiniHeading/MiniHeading'
import MainHeading from '../MainHeading/MainHeading'
import { CircularProgressbar } from 'react-circular-progressbar'

const AboutSection = () => {
    const percentage = 66;
    return (
        <Grid container spacing={0} justifyContent='center' className='aboutSection'>
            <Grid container spacing={0} item xs={11} justifyContent='space-between'>
                <Grid item sm={5} className="aboutImgPart">
                    <img src="./image/aboutImgPart/1.webp" alt="" />
                    <img className='aboutSideImg1' src="./image/aboutImgPart/side1.webp" alt="" />
                    <img className='aboutSideImg2' src="./image/aboutImgPart/side2.webp" alt="" />
                    <div className="aboutVideoPart">
                        <img className='videoImg' src="./image/aboutImgPart/videoImg.webp" alt="" />
                        <div className="aboutVideoPlay">
                            <PlayArrow />
                        </div>
                    </div>
                    <div className="awardImg">
                        <img src="./image/aboutImgPart/awardImgBg.webp" alt="" />
                        <img src="./image/aboutImgPart/awardImg.webp" alt="" />
                    </div>
                </Grid>
                <Grid item sm={6} className="aboutContantPart" container spacing={0}>
                    <MiniHeading frist='about' secound='it solutions' />
                    <MainHeading f="Best Digital" s="Technology" t="Agency For People" />
                    <p>Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                    <Grid item sm={6}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                        />;
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutSection