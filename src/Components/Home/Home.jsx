import React from 'react'
import MainSlider from '../../InnerComponents/MainSlider/MainSlider'
import AboutSection from '../../InnerComponents/AboutSection/AboutSection'
import AgencySection from '../../InnerComponents/AgencySection/AgencySection'
import ServiceSection from '../../InnerComponents/ServiceSection/ServiceSection'
import TestimonialSection from '../../InnerComponents/TestimonialSection/TestimonialSection'
import BlogSection from '../../InnerComponents/BlogSection/BlogSection'

const Home = () => {
  return (
    <>
      <MainSlider />
      <AboutSection />
      <AgencySection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
    </>
  )
}

export default Home