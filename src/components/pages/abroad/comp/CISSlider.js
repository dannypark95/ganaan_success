import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/cis_1.png';
import pic_2 from '../../../../media/schools/cis_2.png';
import pic_3 from '../../../../media/schools/cis_3.png';

const CISSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle '>
        CIS (Cebu International School)
      </div>
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
        1924년에 설립된 세부 최고의 유일한 국제학교인 CIS는 PRE-SCHOOL~ G12까지
        재학 중이며 대략 400명의 학생이 수업하고 있습니다. 한 반의 정원은 약
        16명이며, WASC 학력 인증 기관이자 IB (PYP, MYP, IBDP) 학교 입니다.
        국제학교 이기 때문에 필리핀 교육 과정인 필리핀 교육 과정인 타갈로그어와
        필리핀 사회과목이 필수가 아닙니다. 제2외국어는 중국어와 스페인어를
        제공하고 있으며 강사진도 원어민 선생님의 비율이 높습니다. 영어, 수학,
        과학을 기본 입학시험으로 하며 합격 후 영어 인터뷰가 주어집니다. 세부
        지역에서뿐만 아니라 필리핀 전체에서도 가장 명문 국제학교에 속하는 CIS
        국제학교입니다. 연간 학비는 1,400만 원 ~2,600만 원 정도 됩니다.
      </div>
      <div>
        <a href='https://cis.edu.ph/' target='_blank' rel=' noreferrer'>
          https://cis.edu.ph/
        </a>
      </div>
    </div>
  );
};

export default CISSlider;
