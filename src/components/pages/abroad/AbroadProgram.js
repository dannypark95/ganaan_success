import React from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

import international from '../../../media/international.jpg';
import study_abroad from '../../../media/study_abroad.jpg';

const AbroadProgram = () => {
  return (
    <div>
      <Header text={'관리형 조기유학'} sub={'국제학교 입학 프로그램'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>관리형 조기유학</div>
            <Abroad current={'program'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>국제학교 입학 프로그램</span>
            </div>
            <div className='text-left ms-4 abroadProgramText'>
              <div className='fs-3 mb-5'>
                <div className='mb-3 abroadT'>
                  Cebu Internatioanl School Program
                </div>
                <div className='programGrid'>
                  <div className='program-g1 m-3'>
                    <div className='fs-6'>
                      <span>학비</span> : $2,000 ~ $20,000 (1 Year)
                      <br /> <span>홈스테이 비용</span> : $25,000 (1 Year) /
                      $2,200 (1 Month)
                    </div>
                    <div className='fs-6'>
                      <span>포함 내역</span>: 숙소 및 식사비용, 학교 픽업-드랍,
                      비자연장비, 방과후 수업 3타임, 가디언 비용, 세탁 및
                      청소비용
                    </div>
                  </div>
                  <div className='program-g2 img-fluid rounded imgShadow w-75 m-auto dimPic'>
                    <img src={international} alt='international program' />
                  </div>
                </div>
              </div>
              <div className='fs-3'>
                <div className='mb-3 abroadT'>장기 유학 프로그램</div>
                <div className='programGrid'>
                  <div className='program-g1 img-fluid rounded imgShadow w-75 m-3 m-auto dimPic'>
                    <img src={study_abroad} alt='Study Abroad program' />
                  </div>
                  <div className='program-g2 m-3'>
                    <div className='fs-6'>
                      <span>비용 </span>: $3,000 (1 Month)
                    </div>
                    <div className='fs-6'>
                      <span>포함 내역</span>: 학원 수업료, 숙소 및 식사비용,
                      학원 픽업-드랍, 비자연장비, I-CARD 비용, SSP발급비, 가디언
                      비용, 세탁 및 청소비용, 주말 엑티비티 비용 (월 2회),
                      교재비
                      <br />
                      <span>비포함 내역</span>: 항공권, 여행자보험, 용돈, 출국세
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadProgram;
