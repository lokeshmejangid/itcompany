import React from 'react'
import './Footer.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Pinterest, Place, Send, Sms, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <Grid container spacing={0} className='footer' justifyContent='center'>
      <Grid item xs={10.5} container spacing={0}>
        <Grid item xs={12} sm={7} md={5}>
          <div className="leftFooter">
            <Link to='/'>
              <img src="./image/logo.webp" alt="" />
            </Link>
            <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy</p>
            <ul>
              <li>
                <Link><Place /></Link>
                <Link>86 Road Broklyn Street, 600 <br /><br />
                  New York, USA</Link>
              </li>
              <li>
                <Link><Sms /></Link>
                <Link>needhelp@company.com <br /><br />
                  +92 666 888 0000</Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <div className="centerFooter">
            <h2 className='footerHeading'>Services Req</h2>
            <ul>
              <li><Link to='/'>Parking permission</Link></li>
              <li><Link to='/'>Fire Service Noc</Link></li>
              <li><Link to='/'>Report a Parking Violation</Link></li>
              <li><Link to='/'>Residential Parking</Link></li>
              <li><Link to='/'>Vendor Registration</Link></li>
              <li><Link to='/'>City Board Applications</Link></li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="rightFooter">
            <h2 className='footerHeading'>Newsletter</h2>
            <div className="socialBox">
              <div className="inputBox">
                <input type="email" placeholder='Enter Email Address' />
                <Send />
              </div>
              <div className="checkPolicies">
                <input type="checkbox" />
                <p>I agree to all your terms and policies</p>
              </div>
              <div className="socialMedia">
                <Link to='/'><Facebook /></Link>
                <Link to='/'><Twitter /></Link>
                <Link to='/'><Instagram /></Link>
                <Link to='/'><Pinterest /></Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer