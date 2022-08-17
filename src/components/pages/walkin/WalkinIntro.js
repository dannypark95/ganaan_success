import React from 'react';

import Header from '../../layout/Header';
import Walkin from '../../layout/dropdown/Walkin';

import SuccessSlider from './comp/SuccessSlider';

const WalkinIntro = () => {
  return (
    <div>
      <Header text={'WALK-IN'} sub={'학원안내'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>WALK-IN</div>
            <Walkin current={'intro'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>학원안내</span>
            </div>

            <SuccessSlider />

            <div className='walkinIntro text-left m-5'>
              세부 SUCCESS 어학원은 동남아 3대 휴양지의 하나인 필리핀 세부에
              위치한 곳으로, 2003년 5월 한국 브릿지 어학원에서 현지에 직접
              설립한 어학원으로서{' '}
              <span>필리핀 교육부의 정식인가를 받은 교육 법인체입니다.</span>
              <br />
              <br />
              영어를 배우고 있는 학원 학생들에게 영어집중 훈련을 통해 단기간
              영어 실력의 향상을 목표로 만든 장단기 연수프로그램은 물론 미국,
              영국, 캐나다, 호주 등 영어권 국가로의 장기 유학을 위한 연계 연수
              프로그램 및 취학 전 아이들을 대상으로 프리스쿨 (PRE-SCHOOL)
              프로그램 등 다양한 커리큘럼과 프로그램을 운영하고 있습니다.
              <br />
              <br />
              현재 장기유학생 수십 명을 집중적으로 관리하고 있으며, 이들은 모두
              현지 국제학교 재학생으로 이전에 필리핀 단기 연수를 경험하고 자신의
              목표를 국내 특목고 진학 혹은 미국, 영국 등으로의 대학 진학으로
              설정하고 저희 유학원과 모든 준비, 노력을 함께 하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkinIntro;
