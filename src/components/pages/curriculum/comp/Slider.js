import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/ganaan/pic_1.JPG';
import pic_2 from '../../../../media/ganaan/pic_2.JPG';
import pic_3 from '../../../../media/ganaan/pic_3.JPG';
import pic_4 from '../../../../media/ganaan/pic_4.JPG';
import pic_5 from '../../../../media/ganaan/pic_5.JPG';
import pic_6 from '../../../../media/ganaan/pic_6.JPG';
import pic_7 from '../../../../media/ganaan/pic_7.JPG';
import pic_8 from '../../../../media/ganaan/pic_8.JPG';

const Slider = () => {
  return (
    <Carousel fade controls={true} interval={3000} indicators={true}>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_1} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_2} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_3} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_4} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_5} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_6} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_7} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={pic_8} alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
