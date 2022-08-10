import React from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

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
            <div className='text-left ms-4'>
              <div className='fs-3 mb-4'>
                Cebu Internatioanl School Program
                <div className='fs-6 ms-4 mb-3'>
                  학비 : $2,000 ~ $20,000 (1 Year)
                  <br /> 홈스테이 비용 : $25,000 (1 Year) / $2,200 (1 Month)
                </div>
                <div className='fs-6 ms-4'>
                  포함 내역: 숙소 및 식사비용, 학교 픽업-드랍, 비자연장비,
                  방과후 수업 3타임, 가디언 비용, 세탁 및 청소비용
                </div>
              </div>
              <div className='fs-3'>
                장기 유학 프로그램
                <div className='fs-6 ms-4 mb-3'>비용 : $3,000 (1 Month)</div>
                <div className='fs-6 ms-4'>
                  포함 내역: 학원 수업료, 숙소 및 식사비용, 학원 픽업-드랍,
                  비자연장비, I-CARD 비용, SSP발급비, 가디언 비용, 세탁 및
                  청소비용, 주말 엑티비티 비용 (월 2회), 교재비
                  <br />
                  <br />
                  비포함 내역: 항공권, 여행자보험, 용돈, 출국세
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
