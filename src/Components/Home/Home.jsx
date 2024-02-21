import React, { useEffect, useState } from 'react';
// import SliderBannerArr from '../../Utils/SliderBanner.json'
import SliderBanner from '../../InnerComponent/SliderBanner/SliderBanner';
import { withNavigation } from 'react-awesome-slider/dist/navigation';


const Home = () => {
  // const MySliderWithNavigation = withNavigation(SliderBanner);


  return (
    <>
     {/* <MySliderWithNavigation /> */}
     <SliderBanner />
    </>
  )
}

export default Home