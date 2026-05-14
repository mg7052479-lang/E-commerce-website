import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const carousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
<div className=" w-full  bg-cover  ">
            
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/assets/banner/Slider1.png"  className="w-full block" alt="slider1" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/assets/banner/Slider2.png" className="w-full block" alt="slider2" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="/assets/banner/Slider3.png" className="w-full block" alt="slider3" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="/assets/banner/Slider4.png" className="w-full block" alt="slider4" />
      </Carousel.Item>
    </Carousel>
            </div>

  )
}

export default carousal
