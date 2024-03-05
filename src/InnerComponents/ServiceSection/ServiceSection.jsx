import React from 'react'
import './ServiceSection.css'
import { Grid } from '@mui/material'
import MiniHeading from '../../InnerComponents/MiniHeading/MiniHeading'
import MainHeading from '../MainHeading/MainHeading'
import ServiceCard from '../ServiceCard/ServiceCard'
import serviceCardArr from '../../Utils/ServiceCard.json'
import { Link } from 'react-router-dom'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const ServiceSection = () => {
    return (
        <Grid container spacing={0} justifyContent='center' className='serviceSection'>
            <Grid item xs={11} container spacing={0}>
                <Grid item xs={12}>
                    <MiniHeading frist="Service" />
                </Grid>
                <Grid item xs={6}>
                    <MainHeading f="Best Digital" s="Technology" t="Agency For People" />
                </Grid>
                <Grid item xs={6} container spacing={0} alignItems='center'>
                    <p>Transmax is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of about merchandise through land transport.w much you know</p>
                </Grid>
                <Grid container spacing={3} item xs={12}>
                    {serviceCardArr.map((value, index) => <ServiceCard val={value} key={index} />)}
                </Grid>
                <Grid item xs={12}>
                    <p className='viewMore'><ArrowForward /> <span>BRING THEM TOGETHER AND YOU OVERCOME THE ORDINARY.</span><Link to='/'>VIEW MORE SERVICE </Link> <ArrowBack /></p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ServiceSection