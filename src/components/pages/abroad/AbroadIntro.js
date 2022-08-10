import React from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

const AbroadIntro = () => {
  return (
    <div>
      <Header text={'관리형 조기유학'} sub={'학교소개'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>관리형 조기유학</div>
            <Abroad current={'intro'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>학교소개</span>
            </div>
            <div className='text-left'>
              <div>
                <div className='fs-3 mb-3'>CIS (Cebu International School)</div>
                <div className='mb-3'>
                  1924년에 설립된 세부 최고의 유일한 국제학교인 CIS는
                  PRE-SCHOOL~ G12까지 재학 중이며 대략 400명의 학생이 수업하고
                  있습니다. 한 반의 정원은 약 16명이며, WASC 학력 인증 기관이자
                  IB (PYP, MYP, IBDP) 학교 입니다. 국제학교 이기 때문에 필리핀
                  교육 과정인 필리핀 교육 과정인 타갈로그어와 필리핀 사회과목이
                  필수가 아닙니다. 제2외국어는 중국어와 스페인어를 제공하고
                  있으며 강사진도 원어민 선생님의 비율이 높습니다. 영어, 수학,
                  과학을 기본 입학시험으로 하며 합격 후 영어 인터뷰가
                  주어집니다. 세부 지역에서뿐만 아니라 필리핀 전체에서도 가장
                  명문 국제학교에 속하는 CIS 국제학교입니다. 연간 학비는 1,400만
                  원 ~2,600만 원 정도 됩니다.
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>
                  CIE (Centre for International Education)
                </div>
                <div className='mb-3'>
                  1995년에 설립된 CIE는 세부에서 가장 오래되고 인지도 있는
                  사립학교 중의 하나입니다. K~G12까지 모든 학년이 재학 중이며 총
                  480명 정원에 한 학급당 20명 내외의 학생들이 수업받고 있습니다.
                  한국 학생 비율은 외국인 국적 비율 30% 중의 5% 정도의 국적
                  비율을 보이고 있습니다. 영국계 학교 (IGCSE 채택 가능) 이며
                  과제량과 공부량이 많은 학교이기도 합니다. 연간 학비는 500만 원
                  ~800만 원 입니다.
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>BRIGHT ACADEMY</div>
                <div className='mb-3'>
                  1992년에 설립되었으며 세부 지역의 사립학교 중에서도 가성비가
                  높은 학교로 학부모님들의 사이에 인지도가 많은 학교 중에
                  하나입니다. 필리핀 사립학교에 맞게 1년 4쿼터 제로 학사일정이
                  운영되고 있으며 전체 학년이 모두 있으나 유아부와 유치부는
                  플레이 하우스로 따로 운영되고 있습니다. 주니어는 12학년까지
                  있으며 1년 학비는 대략 $2,000~ $4,500 정도 예상하시면 됩니다.
                  입학 시험은 영어인터뷰 통과 후 영어, 수학 시험을 치르게
                  됩니다.
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>SSC (Singapore School Cebu)</div>
                <div className='mb-3'>
                  2010년에 설립된 싱가포르 스쿨은 마닐라, 세부, 클락 캠퍼스까지
                  3개의 캠퍼스가 운영되고 있으며, 학교 이름에서 알 수 있듯이
                  싱가포르 수업 방식을 채택하고 있습니다. 기본 필리핀 커리큘럼을
                  진행하고 있으며 고학년에서 IGCSE와 IB를 수료하게 되며 영어,
                  중국어, 타갈로그어를 배워야 합니다. K~G12까지 운영하고 있으며,
                  연간 학비는 800만 원에서 1,100만 원 정도 됩니다.
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>Ateneo De Cebu</div>
                <div className='mb-3'>
                  1995년에 설립된 Ateneo de Cebu는 pre K ~ G12까지 2,000여 명의
                  학생이 수업하고 있습니다. 세부 지역의 필리핀 학부모님들이 가장
                  선호하는 명문 사립학교이기도 합니다. 카톨릭계 화교 학교이기
                  때문에 영어, 중국어, 수학이 필수이며 세부 지역에서 가장 큰
                  규모를 자랑하는 사립학교입니다. 입학 조건이 까다로운 편이며,
                  학교 수업면에서도 어려운 학교 중에 하나입니다. 국제 학생의
                  비율은 10% 내외로 비교적 적은 편이고, 캠퍼스 내에서는 시설이
                  잘 갖추어져 있어 다양한 클럽 활동이 가능합니다. 반 인원은 대략
                  30명에서 25명 사이이며 연간 학비는 대략 300만 원에서 ~400만 원
                  사이입니다.
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>
                  MMIS (Maria Montessori International School)
                </div>
                <div className='mb-3'>
                  1984년 설립된 MMIS는 몬테소리 교육법을 기본으로 운영하는
                  학교이며 규모는 800여 명의 학생이 수업하고 있으며 초, 중,
                  고등부는 전통적인 필리핀 사립학교에 가깝습니다. 학년별로
                  차이는 있지만 입학 테스트는 영어, 수학, 과학을 기본으로
                  합니다. 한 반 정원은 약 30명 정도이며, 가성비가 좋은 학교중의
                  하나입니다. 수업료가 다른 사립학교에 비해 저렴하고 높은 수업의
                  질을 장점으로 뽑을 수 있습니다. 연간 학비는 USD 1,800
                  ~3,500입니다
                </div>
              </div>
              <div>
                <div className='fs-3 mb-3'>Woodrige International School</div>
                <div className='mb-3'>
                  2001년 설립된 Woodrige School은 세부 유학을 준비하시는
                  학생들이 많이 들어본 학교 중의 하나일 것입니다. 소규모 학교에
                  속하며 300~400명의 학생 수와 20명 내외의 학생들이 한 반에서
                  수업하고 있습니다. Cambridge International School 멤버에
                  등록된 학교이지만, 입학시험은 까다롭지 않고 영어로 수업하기에
                  아직 준비가 덜 되어 있는 학생들이 처음에 다니기에 좋은
                  학교입니다. 입학시험은 인터뷰와 간단한 영어와 수학 테스트를
                  치릅니다. 중국어 수업과 중고등부 비즈니스 클래스 추가됩니다.
                  학비는 연간 300~400만원 정도입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadIntro;
