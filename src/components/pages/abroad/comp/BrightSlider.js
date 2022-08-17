import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/bright_1.png';
import pic_2 from '../../../../media/schools/bright_2.png';
import pic_3 from '../../../../media/schools/bright_3.png';

const BrightSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle'>BRIGHT ACADEMY</div>
      <div className='w-50 mb-3 schoolCarousel'>
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
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded imgShadow'
              src={pic_3}
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='mb-3'>
        1992년에 설립되었으며 세부 지역의 사립학교 중에서도 가성비가 높은 학교로
        학부모님들의 사이에 인지도가 많은 학교 중에 하나입니다. 필리핀
        사립학교에 맞게 1년 4쿼터 제로 학사일정이 운영되고 있으며 전체 학년이
        모두 있으나 유아부와 유치부는 플레이 하우스로 따로 운영되고 있습니다.
        주니어는 12학년까지 있으며 1년 학비는 대략 $2,000~ $4,500 정도
        예상하시면 됩니다. 입학 시험은 영어인터뷰 통과 후 영어, 수학 시험을
        치르게 됩니다.
      </div>

      <div>
        <a href='https://bright.edu.ph/' target='_blank' rel=' noreferrer'>
          https://bright.edu.ph/
        </a>
      </div>
    </div>
  );
};

export default BrightSlider;
