import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import program_1 from '../../../media/program_1.jpeg';
import program_2 from '../../../media/program_2.jpg';
import program_3 from '../../../media/program_3.png';
import program_4 from '../../../media/program_4.png';
import program_5 from '../../../media/program_5.png';

const CurriculumProgram = () => {
  return (
    <div>
      <Header text={'영어캠프'} sub={'교육프로그램'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'program'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>교육프로그램</span>
            </div>

            <h3 className='text-center programTitle'>
              SUCCESS ACADEMY + 가나안 국제학교 영어캠프
            </h3>

            <div className='subTitle fs-4 ms-4 mt-4 mb-5 text-left'>
              왜 필리핀 세부 <strong>석쎄스 + 가나안 영어캠프</strong>를
              선택해야 하는가?
            </div>

            <div>
              <div className='programList programGrid'>
                <div className='program-g1 fs-5 fw-bold'>
                  고품격 영어교육과 학습환경 제공
                  <div className='fs-6 fw-light mt-2 mx-3 text-left'>
                    필리핀 세부에서 열리는 고품격 라이프 스타일 캠프! 쾌적한
                    환경과 가나안 국제 학교의 교육 시스템, 그리고 석쎄스 주니어
                    어학원 15년간의 노하우가 접목되어 최고의 영어 교육 환경이
                    제공됩니다.
                  </div>
                </div>
                <div className='text-center'>
                  <img
                    src={program_1}
                    alt='program_pic_1'
                    className='program-g2 img-fluid rounded imgShadow w-75'
                  />
                </div>
              </div>
              <div className='programList programGrid'>
                <div className='text-center'>
                  <img
                    src={program_4}
                    alt='program_pic_4'
                    className='program-g1 img-fluid rounded imgShadow w-75'
                  />
                </div>
                <div className='program-g2 fs-5 fw-bold programHeading'>
                  꼼꼼하고 정확한 평가시스템
                  <div className='fs-6 fw-light mt-2 mx-3 text-left programDisc'>
                    개개인의 학습법, 학습 내용, 학습량, 성적 등을 빈틈없이
                    파악하여, 최적의 난이도 조절을 통해 철저한 개별 관리를
                    합니다.
                  </div>
                </div>
              </div>
              <div className='programList programGrid'>
                <div className='program-g1 fs-5 fw-bold'>
                  영어로 배우는 여러가지 액티비티
                  <div className='fs-6 fw-light mt-2 mx-3 text-left'>
                    자신감 있게 영어로 대화할 수 있고, 놀이를 할 수 있는 다양한
                    영어프로그램이 마련되어있습니다. 선생님들과 여러 가지
                    액티비티를 함께 함으로써 영어로 생활 속에서 자연스럽게 말할
                    수 있고 흥미를 느낄 수 있습니다.
                  </div>
                </div>
                <div className='text-center'>
                  <img
                    src={program_2}
                    alt='program_pic_2'
                    className='program-g2 img-fluid rounded imgShadow w-75'
                  />
                </div>
              </div>
              <div className='programList programGrid'>
                <div className='text-center'>
                  <img
                    src={program_5}
                    alt='program_pic_5'
                    className='program-g1 img-fluid rounded imgShadow w-75 currMarginPic'
                  />
                </div>
                <div className='program-g2 fs-5 fw-bold'>
                  글로벌 인재 양성 캠프
                  <div className='fs-6 fw-light mt-2 mx-3 text-left'>
                    스스로 꿈과 목표 진로를 생각할 수 있도록 많은 체험과 놀이
                    프로그램을 마련하여 자기주도 학습 능력을 배양합니다.
                  </div>
                </div>
              </div>
              <div className='programList programGrid'>
                <div className='program-g1 fs-5 fw-bold'>
                  정식 자격증 갖춘 선생님
                  <div className='fs-6 fw-light mt-2 mx-3 text-left'>
                    정식 자격증을 가진 원어민 교사와 한국인 교사의 팀 티칭을
                    통한 다양한 액티비티 활동과 담임교사가 24시간 케어합니다.
                  </div>
                </div>
                <div className='text-center'>
                  <img
                    src={program_3}
                    alt='program_pic_3'
                    className='program-g2 img-fluid rounded imgShadow w-75'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumProgram;
