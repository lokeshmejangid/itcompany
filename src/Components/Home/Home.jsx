import React, { useEffect, useState } from 'react';
import SliderBannerArr from '../../Utils/SliderBanner.json'
import SliderBanner from '../../InnerComponent/SliderBanner/SliderBanner';

const Home = () => {

  const [sliderCount, setSliderCount] = useState(1);

  const next = () => {
    sliderCount === SliderBannerArr.length ? setSliderCount(1) : setSliderCount(sliderCount + 1);
  }

  const previous = () => {
    sliderCount === 1 ? setSliderCount(SliderBannerArr.length) : setSliderCount(sliderCount - 1);
  }

  useEffect(() => {
    setTimeout(() => {
      next();
    }, 5000);
  });

  const styles = {
    cardBg: {
      backgroundImage: `url(./image/SectionBackground.jpg)`
    }
  }

  return (
    <>
      {SliderBannerArr.map((value, index) => sliderCount === index + 1 ? <SliderBanner val={value} key={index} next={next} pre={previous} /> : "")}
    </>
  )
}

export default Home