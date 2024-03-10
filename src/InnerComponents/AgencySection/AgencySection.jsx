import React from 'react'
import './AgencySection.css'
import { Grid } from '@mui/material'
import MiniHeading from '../MiniHeading/MiniHeading'
import MainHeading from '../MainHeading/MainHeading'
import agencyCardArr from '../../Utils/AgencyCard.json'
import { Link } from 'react-router-dom'
import { AddCircleOutline } from '@mui/icons-material'

const AgencySection = () => {
    return (
        <Grid container spacing={0} className='agencySection'>
            <img className='leftBg' src="./image/agencySectionImg/leftBg.webp" alt="" />
            <img className='rightBg' src="./image/agencySectionImg/rightBg.webp" alt="" />
            <Grid item sm={12}>
                <MiniHeading frist='feature' addClass="centerMiniHeading" />
                <MainHeading f='Best Digital' s='Technology' t='Agency For People' addClass="centerMainHeading" />
            </Grid>
            <Grid item sm={12} container spacing={0} justifyContent='center'>
                {
                    agencyCardArr.map((value, index) =>
                        <Grid item xs={5} md={2} key={index} container spacing={0} justifyContent='center'>
                            <div className={`agencyCard ${index % 2 === 0 ? 'downAgebcyCard' : ''}`}>
                                <img src={value.img} alt="" />
                                <p>{value.text}</p>
                            </div>
                        </Grid>)}
            </Grid>
            <Grid item xs={12}>
                <p className='viewMore'><span>BRING THEM TOGETHER AND YOU OVERCOME THE ORDINARY.</span><Link to='/'>VIEW MORE SERVICE <AddCircleOutline /> </Link></p>
            </Grid>
        </Grid>
    )
}

export default AgencySection