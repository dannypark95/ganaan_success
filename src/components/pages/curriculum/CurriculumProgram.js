import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

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
            <div className='text-left'>
              <div className='fs-4 mb-4'>
                일대일 수업 : READING / WRITING / GRAMMAR / VOCABULARY
                <div className='fs-6 mb-3'>
                  1. Reading Class
                  <div>
                    일대일 수업을 통해서 학생 개개인의 레벨에 맞춘 리딩 교재를
                    이용하여 수업합니다. 정확하게 영어를 읽을 수 있도록 발음
                    교정 및 읽기 능력 속도 향상 및 독해 능력을 향상하는데 중점을
                    두고 있습니다.
                  </div>
                </div>
                <div className='fs-6 mb-3'>
                  2. Writing Class
                  <div>
                    일대일 수업을 통한 개개인의 레벨에 맞춘 교재로 수업합니다.
                    매일매일 다양한 주제의 글쓰기를 진행함과 동시에 문법 교정과
                    어휘 실력 향상에 초점을 두고 수업합니다.
                  </div>
                </div>
                <div className='fs-6 mb-3'>
                  3. Grammar Class
                  <div>
                    일대일 수업을 통한 개개인의 레벨에 맞는 교재로 수업을
                    진행합니다. 지루한 그래머 수업이지만 아이들이 흥미를 느낄 수
                    있도록 다양한 방식으로 수업을 진행하며, 좀 더 쉬운 설명으로
                    학생들의 이해를 돕도록 하는 데 중점을 두고 있습니다.
                  </div>
                </div>
                <div className='fs-6'>
                  4. Vocabulary Class
                  <div>
                    일대일 수업을 통한 개개인의 레벨에 맞는 교재로 수업을
                    진행합니다. 단어를 완벽하게 습득함으로써 어디에 단어를
                    활용하는지 공부하고, 독해 능력 향상을 위한 단어를 공부하는
                    것에 중점을 둡니다. 단어가 스토리에 어떻게 이용되는지
                    앎으로서 학생들이 쉽게 단어를 접할 수 있도록 유도합니다.
                  </div>
                </div>
              </div>
              <div className='fs-4'>
                그룹 수업 : SPEAKING / DEBATE / SPEECH / 청강수업
                <div className='fs-6 mb-3'>
                  1. Speaking Class
                  <div>
                    레벨이 맞는 학생들끼리 모여 레벨에 맞는 수업을 진행합니다.
                    필리핀 선생님들과 대화 형식으로 수업을 진행하며, 아이들의
                    눈높이에 맞는 스피킹 수업을 합니다. 스피킹에 자신이 없는
                    학생들에게 편안하게 영어로 말할 기회를 주고 자신감을 가질 수
                    있도록 하는 수업에 중점을 둡니다.
                  </div>
                </div>
                <div className='fs-6 mb-3'>
                  2. Debate Class
                  <div>
                    그룹수업으로 영어 스피킹에 어느 정도 자신이 있는 학생들이
                    모여 수업을 진행합니다. 주제를 가지고 자기 의견을 내세울 수
                    있고 자신감을 가질 수 있게 수업을 진행하며, 자기표현 능력
                    향상과 리더쉽을 키울 수 있는 수업에 중점을 둡니다.
                  </div>
                </div>
                <div className='fs-6 mb-3'>
                  3. Speech Class
                  <div>
                    학생들은 선생님이 알려주는 표현을 배우고, 그 표현을
                    반복적으로 따라 하고 연습하는 훈련을 통해 영어 말하기에
                    자신감을 가지고 말할 수 있습니다. 억지로 영어를 암기하지
                    않아도 상황에 맞게 말하는 연습을 함으로써 학생들이
                    어디에서나 자연스럽게 말할 수 있게 하는 데 초점을 둡니다.
                  </div>
                </div>
                <div className='fs-6'>
                  4. 가나안 국제학교 청강수업 (선택)
                  <div>
                    어느 정도 듣고 말하기가 되는 학생들은 선택에 의해서 가나안
                    국제학교 수업에 참관할 수 있습니다. 가나안 국제학교는 필리핀
                    정식 사립학교로 참관 수업을 통해 필리핀 학교 수업을 경험할
                    수 있습니다.
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

export default CurriculumProgram;
