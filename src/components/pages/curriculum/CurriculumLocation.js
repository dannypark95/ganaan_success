import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import ssp_permit from '../../../media/ssp_permit.jpeg';
import tesda_permit from '../../../media/tesda_permit.jpeg';

import GanaanSlider from './comp/GanaanSlider';

const CurriculumLocation = () => {
  return (
    <div>
      <Header text={'영어캠프'} sub={'캠프장소소개'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'location'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>캠프장소소개</span>
            </div>
            <div className='aboutDocSchools text-left page-margin-left'>
              <h3>
                <h3>GANAAN Christian International School</h3>
              </h3>

              <div className='currGrid'>
                <div className='curr-g1'>
                  <div className='aboutDocIntro'>
                    필리핀 막탄 세부 국제공항에서 남쪽으로 12km 떨어진 라푸라푸
                    수바 바스바스에 위치한 "가나안 크리스찬 국제학교"는 인천
                    송도 가나안 교회에서 조성한 국제학교 입니다. 2018년도에
                    필리핀 교육청에서 정식 인가 허가를 받은 학교로써 현지
                    학생뿐만 아니라, 외국인 학생들도 수업을 하고 있습니다.
                    <br></br>
                    <br></br>
                    2019년에 Senior High School (한국의 전문대)로도 승인되어
                    수업을 하고 있으며, 필리핀 세부에 최초로 한국의 지원으로
                    설립한 학교입니다.
                  </div>
                </div>
                <div className='curr-g2'>
                  <GanaanSlider />
                </div>
              </div>

              <div className='mobileCurrLocation aboutDocIntro'>
                필리핀 막탄 세부 국제공항에서 남쪽으로 12km 떨어진 라푸라푸 수바
                바스바스에 위치한 "가나안 크리스찬 국제학교"는 인천 송도 가나안
                교회에서 조성한 국제학교 입니다. 2018년도에 필리핀 교육청에서
                정식 인가 허가를 받은 학교로써 현지 학생뿐만 아니라, 외국인
                학생들도 수업을 하고 있습니다.
                <br></br>
                <br></br>
                2019년에 Senior High School (한국의 전문대)로도 승인되어 수업을
                하고 있으며, 필리핀 세부에 최초로 한국의 지원으로 설립한
                학교입니다.
              </div>

              <div className='currPermitPicture permitPicture'>
                <div className='permit'>
                  <img
                    src={ssp_permit}
                    alt='ssp_permit'
                    className='permit rounded imgShadow'
                  />
                  <div className='permitDesc_1 permitDesc'>
                    필리핀 이민국 인증 (SSP)
                  </div>
                </div>
                <div className='permit'>
                  <img
                    src={tesda_permit}
                    alt='tesda_permit'
                    className='permit rounded imgShadow'
                  />
                  <div className='permitDesc_2 permitDesc'>
                    필리핀 교육청 인증 (DEPED)
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

export default CurriculumLocation;
