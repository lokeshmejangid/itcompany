import React from 'react'
import './AboutSection.css'
import { Grid } from '@mui/material'
import { PlayArrow, Tune } from '@mui/icons-material'
import MiniHeading from '../MiniHeading/MiniHeading'
import MainHeading from '../MainHeading/MainHeading'
import { CircularProgressbar } from 'react-circular-progressbar'
import CusBtn from '../CusBtn/CusBtn'

const AboutSection = () => {
    const percentage = 66;
    return (
        <Grid container spacing={0} justifyContent='center' className='aboutSection'>
            <Grid container spacing={0} item xs={11} justifyContent='space-between'>
                <Grid item xs={12} sm={5}>
                    <div className="aboutImgPart">
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
                    </div>
                </Grid>
                <Grid item sm={6} className="aboutContantPart" container spacing={0} alignContent='start' justifyContent='space-between'>
                    <Grid item sm={12}>
                        <MiniHeading frist='about' />
                        <MainHeading addClass='aboutSectionHeading' f="Best Digital" s="Technology" t="Agency For People" />
                        <p>Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                    </Grid>
                    <Grid item xs={6} container spacing={0} className='aboutProgress'>
                        <Grid item sm={5}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                counterClockwise
                            />
                        </Grid>
                        <Grid item sm={7}>
                            <h5>Business Strategy Growth</h5>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} container spacing={0} className='aboutProgress'>
                        <Grid item sm={5}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                counterClockwise
                            />
                        </Grid>
                        <Grid item sm={7}>
                            <h5>Health Valuable Ideas</h5>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={5} md={6} lg={5}>
                        <CusBtn text="OUR HISTORY" link="new" arrow={true} />
                    </Grid>
                    <Grid item xs={6} sm={7} md={6} lg={7} container spacing={0} alignItems='center'>
                        <div className="aboutDate">
                            <h6>BRENDON GARREY</h6>
                            <p>mayor, since 21st Oct , 2019</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutSection