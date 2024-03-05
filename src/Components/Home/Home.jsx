import React from 'react'
import MainSlider from '../../InnerComponents/MainSlider/MainSlider'
import AboutSection from '../../InnerComponents/AboutSection/AboutSection'
import AgencySection from '../../InnerComponents/AgencySection/AgencySection'
import ServiceSection from '../../InnerComponents/ServiceSection/ServiceSection'

const Home = () => {
  return (
    <>
      <MainSlider />
      <AboutSection />
      <AgencySection />
      <ServiceSection />
    </>
  )
}

export default Home