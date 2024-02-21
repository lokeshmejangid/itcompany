import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './SliderBanner.css'


const SliderBanner = () => {
  return (
    <AwesomeSlider
      bullets={false}
      className='MainSlider'
    >
      <div data-src="./image/bannerImages/1.webp" className='Contant'>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div data-src="./image/bannerImages/2.jpg" className='Contant'>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </AwesomeSlider>
  );
}

export default SliderBanner