import { ArrowForward } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {img, h3, p, link} = props.val;
    return (
        <Grid item xs={10} sm={6} md={3}>
            <div className={`serviceCard ${props.addClass || ""}`}>
                <div><img src={img} alt="" /> </div>
                <h3>{h3}</h3>
                <p>{p}</p>
                <button>
                    <Link to={link}><span>Read More</span> <ArrowForward /></Link>
                </button>
            </div>
        </Grid>
    )
}

export default ServiceCard