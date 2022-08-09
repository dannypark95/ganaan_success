import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

import ssp_permit from '../../../media/ssp_permit.jpeg';
import tesda_permit from '../../../media/tesda_permit.jpeg';

const AboutDocument = () => {
  return (
    <div>
      <Header text={'학원소개'} sub={'허가서류'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>학원소개</div>
            <About current={'document'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>허가서류</span>
            </div>

            <div className='aboutDocSchools text-left page-margin-left'>
              <h3>SUCCESS English Learning Academy</h3>
              <div className='aboutDocIntro'>
                SUCCESS 어학원은 동남아 3대 휴양지인 필리핀 세부에 위치한
                학원으로, 2003년 한국 브릿지 어학원에서 설립한 필리핀 정식인가를
                받은 교육 법인체입니다. 영어를 배우고 있는 학생들에게 영어 집중
                훈련을 통해 단기간에 영어 실력 향상을 목표로 하고 있는
                학원으로서, 영어 캠프, 국제학교 입학 프로그램, 화상영어, 단기
                영어 집중 코스등 다양한 커리큘럼을 운영중입니다.
              </div>

              <div className='permitPicture'>
                <div className='permit'>
                  <img
                    src={ssp_permit}
                    alt='ssp_permit'
                    className='permit rounded imgShadow'
                  />
                  <div className='permitDesc_1 permitDesc '>
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
                    필리핀 교육청 인증 (TESDA)
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

export default AboutDocument;
