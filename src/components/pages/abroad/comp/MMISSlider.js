import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/mmis_1.png';
import pic_2 from '../../../../media/schools/mmis_2.png';
import pic_3 from '../../../../media/schools/mmis_3.png';

const MMISSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle'>
        MMIS (Maria Montessori International School)
      </div>
      <div className='sliderSize mb-3 schoolCarousel'>
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
        1984년 설립된 MMIS는 몬테소리 교육법을 기본으로 운영하는 학교이며 규모는
        800여 명의 학생이 수업하고 있으며 초, 중, 고등부는 전통적인 필리핀
        사립학교에 가깝습니다. 학년별로 차이는 있지만 입학 테스트는 영어, 수학,
        과학을 기본으로 합니다. 한 반 정원은 약 30명 정도이며, 가성비가 좋은
        학교중의 하나입니다. 수업료가 다른 사립학교에 비해 저렴하고 높은 수업의
        질을 장점으로 뽑을 수 있습니다. 연간 학비는 USD 1,800 ~3,500입니다
      </div>

      <div>
        <a href='https://www.mmis.edu.ph/' target='_blank' rel=' noreferrer'>
          https://www.mmis.edu.ph/
        </a>
      </div>
    </div>
  );
};

export default MMISSlider;
