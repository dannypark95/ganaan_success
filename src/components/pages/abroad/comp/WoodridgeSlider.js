import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/woodridge_1.png';
import pic_2 from '../../../../media/schools/woodridge_2.png';
import pic_3 from '../../../../media/schools/woodridge_3.png';

const WoodridgeSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle'>Woodrige International School</div>

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
        2001년 설립된 Woodrige School은 세부 유학을 준비하시는 학생들이 많이
        들어본 학교 중의 하나일 것입니다. 소규모 학교에 속하며 300~400명의 학생
        수와 20명 내외의 학생들이 한 반에서 수업하고 있습니다. Cambridge
        International School 멤버에 등록된 학교이지만, 입학시험은 까다롭지 않고
        영어로 수업하기에 아직 준비가 덜 되어 있는 학생들이 처음에 다니기에 좋은
        학교입니다. 입학시험은 인터뷰와 간단한 영어와 수학 테스트를 치릅니다.
        중국어 수업과 중고등부 비즈니스 클래스 추가됩니다. 학비는 연간
        300~400만원 정도입니다.
      </div>

      <div>
        <a href='http://wis.edu.ph/' target='_blank' rel=' noreferrer'>
          http://wis.edu.ph/
        </a>
      </div>
    </div>
  );
};

export default WoodridgeSlider;
