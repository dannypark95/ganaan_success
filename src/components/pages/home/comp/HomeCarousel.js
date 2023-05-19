import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

// import home_01 from '../../../../media/homeBanner/home_01.png';
// import home_02 from '../../../../media/homeBanner/home_02.png';
import home_03 from '../../../../media/homeBanner/home_03.png';

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block carouselPic'
            src={home_03}
            alt='First slide'
          />
          <Carousel.Caption>
            <h1 className='carouselHeading'>2023 SUMMER CAMP</h1>
            <h4 className='programTitle mt-2 mb-2 homeTitle'>
              SUCCESS ACADEMY & Ganaan International School ENGLISH CAMP
            </h4>
            <div className='carouselDate'>가족캠프 | 주니어캠프</div>
            <div className='carouselDesc mt-2 mb-2'>
              글로벌 인재로 키우는 <span>국제영어캠프</span>!
            </div>
            <div className='carouselBtn'>
              <Link to='/curriculum/contact'>
                <button type='button' class='btn btn-dark'>
                  상담문의
                </button>
              </Link>{' '}
              <Link to='/curriculum/apply'>
                <button type='button' class='btn btn-dark'>
                  접수신청
                </button>
              </Link>{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className='d-block carouselPic'
            src={home_01}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className='d-block carouselPic'
            src={home_02}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
