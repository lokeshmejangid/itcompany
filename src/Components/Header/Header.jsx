import { Grid } from '@mui/material'
import React from 'react'
import './Header.css'
import { ArrowDownward, KeyboardArrowDown, Mail, Place, Search } from '@mui/icons-material'
import navLinksArr from '../../Utils/NavLinks.json'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const arr = [
    {
      img: '',
      title: 'USD',
      list: [
        'EUR',
        'AFN',
        'XCD'
      ]
    },
    {
      img: 'https://e7.pngegg.com/pngimages/1020/23/png-clipart-logo-primera-air-organization-business-english-language-british-flag-flag-logo.png',
      title: 'English',
      list: [
        'Spanish',
        'English',
        'Canada'
      ]
    }
  ];
  return (
    <>
      <Grid container spacing={0} className='fristHeader'>
        <Grid item sm={10}>
          <div className="fristHeaderLeft">
            <button>Call</button>
            <p>Consult With It Advisor? <a href="/"> Click Now</a></p>
            <a href="https://www.google.com/maps/@36.0758266,-79.4558848,17z" target='_block'> <Place /> 734 H, Bryan Burlington, NC 27215</a>
            <a href="mailto:technix@support.com"> <Mail /> technix@support.com</a>
          </div>
        </Grid>
        <Grid item sm={2} container spacing={2}>
          {arr.map((value, index) =>
            <Grid item sm={6} className="fristHeaderRight" key={index}>
              {value.img !== '' ? <img src={value.img} /> : ''}
              <p>{value.title}<KeyboardArrowDown /></p>
              <ul>{value.list.map((val, ind) => <li key={ind}>{val}</li>)}</ul>
            </Grid>)}
        </Grid>
      </Grid>
      <Grid container spacing={0} className='mainHeader'>
        <Grid item md={2}>
          <div className="headerLogo">
            <img src="./image/logo.webp" alt="" />
          </div>
        </Grid>
        <Grid item md={8}>
          <div className="navLinksBox">
            <div className="navLinks">
              <ul>
                {navLinksArr.map((value, index) => <li key={index}>
                  <NavLink>
                    {value.title}
                  {value.icon === true ? <ArrowDownward /> : ''}
                  </NavLink>
                  {value.icon === true ? <ul>
                    {value.list.map((val, ind) => <li><NavLink>{val}</NavLink></li>)}
                  </ul> : ''}
                </li>)}
              </ul>
              <Search />
            </div>
          </div>
        </Grid>
      </Grid >
    </>
  )
}

export default Header