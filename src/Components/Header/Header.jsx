import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import { ArrowDownward, ArrowLeft, Call, Close, Facebook, KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, LinkedIn, Mail, Place, Search, Tune, Twitter, YouTube } from '@mui/icons-material'
import legArr from '../../Utils/leg.json'
import navLinksArr from '../../Utils/NavLinks.json'
import { NavLink } from 'react-router-dom'
import galleryImgArr from '../../Utils/GalleryImgs.json'
import { contactArr } from '../../Utils/Contact'

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [countGallerySliderImg, setCountGallerySliderImg] = useState(0);
  const [gallerySlider, setGallerySlider] = useState(false);
  const [sideBarNavLinks, setSideBarNavLinks] = useState('');

  const activeToggle = () => setToggle(true);
  const disActiveToggle = () => setToggle(false);

  // const showSideBarNavLinks = () => sideBarNavLinks === false ? setSideBarNavLinks(true) : setSideBarNavLinks(false);

  const showSideBarNavLinks = (e) => {
    const targetLink = e.target.getAttribute('val');
    sideBarNavLinks === targetLink ? setSideBarNavLinks('') : setSideBarNavLinks(targetLink)
  }

  const activeGallerySlider = (img) => {
    setGallerySlider(true)
    setCountGallerySliderImg(img)
  };
  const disActiveGallerySlider = () => setGallerySlider(false);

  const rightGallerySliderImg = () =>
    countGallerySliderImg === galleryImgArr.length - 1 ? setCountGallerySliderImg(0) : setCountGallerySliderImg(countGallerySliderImg + 1);

  const leftGallerySliderImg = () =>
    countGallerySliderImg === 0 ? setCountGallerySliderImg(galleryImgArr.length - 1) : setCountGallerySliderImg(countGallerySliderImg - 1);


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
          {legArr.map((value, index) =>
            <Grid item sm={6} className="fristHeaderRight" key={index}>
              {value.img !== '' ? <img src={value.img} /> : ''}
              <p>{value.title}<KeyboardArrowDown /></p>
              <ul>{value.list.map((val, ind) => <li key={ind}>{val}</li>)}</ul>
            </Grid>)}
        </Grid>
      </Grid>
      <Grid container spacing={0} className='mainHeader' justifyContent='space-between'>
        <Grid item xs={5} sm={4} md={2}>
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
                    {value.list.map((val, ind) => <li key={ind}><NavLink>{val}</NavLink></li>)}
                  </ul> : ''}
                </li>)}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={7} sm={4} md={2} container spacing={0} justifyContent='end'>
          <Grid item xs={12} md={6}>
            <div className="toggle" onClick={activeToggle}>
              <div className="toggleLines"></div>
              <div className="toggleLines"></div>
              <div className="toggleLines"></div>
            </div>
            <div className={` bgBlackClrEffect ${toggle === true ? "ActiveBgBlackClrEffect" : ''}`} onClick={disActiveToggle}></div>
            <div className={`toggleSideBar ${toggle === true ? 'activeToggleSideBar' : ''}`}>
              <Grid container spacing={0} justifyContent='space-between' alignItems='center'>
                <Grid item xs={7} sm={3} md={6}>
                  <img className='sideBarLogo' src="./image/blackTextLogo.webp" alt="" />
                </Grid>
                <Grid item xs={3}>
                  <div className="toggleClose" onClick={disActiveToggle}>
                    <Close />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="sideBarNavLinks">
                    <ul>
                      {navLinksArr.map((value, index) => <li key={index}>
                        <NavLink>
                          {value.title}
                        </NavLink>
                        {value.icon === true ? <ArrowDownward val={value.title} onClick={(e) => showSideBarNavLinks(e)} /> : ''}
                        {value.icon === true ? <ul className={sideBarNavLinks === value.title ? 'activeSubNavLinks' : ''}>
                          {value.list.map((val, ind) => <li key={ind}><NavLink>{val}</NavLink></li>)}
                        </ul> : ''}
                      </li>)}
                    </ul>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <p>Web designing in a powerful way of just not an only professions. We have tendency to believe the idea that smart looking .</p>
                </Grid>
                <Grid item xs={12}>
                  <h2>Gallery</h2>
                </Grid>
                <Grid item xs={12} container spacing={1} className='sideBarGalleryImg'>
                  {galleryImgArr.map((value, index) =>
                    <Grid item xs={4} sm={3} md={4} key={index}>
                      <img src={value.url} alt="" onClick={() => activeGallerySlider(index)} />
                    </Grid>)}
                </Grid>
                <Grid item xs={12}>
                  <h2>Contacts</h2>
                </Grid>
                <Grid item xs={12} className='sideBarContact'>
                  <ul className='sideBarContactText'>
                    {contactArr.map((value, index) =>
                      value.type === 'text' ? <li key={index}><a href="/">{value.icon}{value.text}</a></li> : ''
                    )}
                  </ul>
                  <ul className="sideBarContactLogos">
                    {contactArr.map((value, index) =>
                      value.type === 'logo' ? <li key={index}><a style={{ backgroundColor: value.bgColor }} href="/">{value.logo}</a></li> : ''
                    )}
                  </ul>
                </Grid>
              </Grid>
            </div>
            <div className={`sideBarGalleryImgSlider ${gallerySlider === true ? 'activeSideBarGalleryImgSlider' : ''
              }`}>
              <div className="sideBarGalleryImgSliderClose" onClick={disActiveGallerySlider}>
                <Close />
              </div>
              <div className="sideBarGalleryImgSliderLeft" onClick={leftGallerySliderImg}>
                <KeyboardArrowLeft />
              </div>
              <div className="sideBarGalleryImgSliderRight" onClick={rightGallerySliderImg}>
                <KeyboardArrowRight />
              </div>
              <div className={`sideBarGalleryImgSliderImg`}>
                {galleryImgArr.map((value, index) =>
                  index === countGallerySliderImg ? <img key={index} src={value.url} alt="" /> : ''
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid >
    </>
  )
}

export default Header