import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic_1 from '../../media/slider_01.jpeg';
import pic_2 from '../../media/slider_01.jpeg';

const Slider = () => {
  return (
    <Carousel fade controls={false} interval={10000} indicators={false}>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_1} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_2} alt='Second slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
