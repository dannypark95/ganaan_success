import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/success/slider/info_1.png';
import pic_2 from '../../../../media/success/slider/info_2.png';
import pic_3 from '../../../../media/success/slider/info_3.png';
import pic_4 from '../../../../media/success/slider/info_4.png';
import pic_5 from '../../../../media/success/slider/info_5.png';
import pic_6 from '../../../../media/success/slider/info_6.png';
import pic_7 from '../../../../media/success/slider/info_7.png';

const SuccessSlider = () => {
  return (
    <div className='sliderSize m-auto'>
      <Carousel fade controls={true} interval={3000} indicators={true}>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_1}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_2}
            alt='second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_3}
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_4}
            alt='fourth slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_5}
            alt='Fifth slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_6}
            alt='Sixth slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded imgShadow'
            src={pic_7}
            alt='Seventh slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SuccessSlider;
