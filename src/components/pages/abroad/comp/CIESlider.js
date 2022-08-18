import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/cie_1.png';
import pic_2 from '../../../../media/schools/cie_2.png';
import pic_3 from '../../../../media/schools/cie_3.png';

const CIESlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle'>
        CIE (Centre for International Education)
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
        1995년에 설립된 CIE는 세부에서 가장 오래되고 인지도 있는 사립학교 중의
        하나입니다. K~G12까지 모든 학년이 재학 중이며 총 480명 정원에 한 학급당
        20명 내외의 학생들이 수업받고 있습니다. 한국 학생 비율은 외국인 국적
        비율 30% 중의 5% 정도의 국적 비율을 보이고 있습니다. 영국계 학교 (IGCSE
        채택 가능) 이며 과제량과 공부량이 많은 학교이기도 합니다. 연간 학비는
        500만 원 ~800만 원 입니다.
      </div>

      <div>
        <a href='https://cie.edu/' target='_blank' rel=' noreferrer'>
          https://cie.edu/
        </a>
      </div>
    </div>
  );
};

export default CIESlider;
