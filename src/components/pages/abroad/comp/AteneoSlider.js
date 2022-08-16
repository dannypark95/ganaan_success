import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/ganaan/pic_1.JPG';
import pic_2 from '../../../../media/ganaan/pic_2.JPG';
import pic_3 from '../../../../media/ganaan/pic_3.JPG';

const AteneoSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3'>Ateneo De Cebu</div>
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
        1995년에 설립된 Ateneo de Cebu는 pre K ~ G12까지 2,000여 명의 학생이
        수업하고 있습니다. 세부 지역의 필리핀 학부모님들이 가장 선호하는 명문
        사립학교이기도 합니다. 카톨릭계 화교 학교이기 때문에 영어, 중국어,
        수학이 필수이며 세부 지역에서 가장 큰 규모를 자랑하는 사립학교입니다.
        입학 조건이 까다로운 편이며, 학교 수업면에서도 어려운 학교 중에
        하나입니다. 국제 학생의 비율은 10% 내외로 비교적 적은 편이고, 캠퍼스
        내에서는 시설이 잘 갖추어져 있어 다양한 클럽 활동이 가능합니다. 반
        인원은 대략 30명에서 25명 사이이며 연간 학비는 대략 300만원~400만 원
        사이입니다.
      </div>

      <div>
        <a href='http://www.example.com' target='_blank' rel=' noreferrer'>
          www.example.com
        </a>
      </div>
    </div>
  );
};

export default AteneoSlider;
