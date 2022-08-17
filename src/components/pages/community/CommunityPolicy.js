import React from 'react';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';

const CommunityPolicy = () => {
  return (
    <div>
      <Header text={'커뮤니티'} sub={'학원규정'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>커뮤니티</div>
            <Community current={'policy'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav '>학원규정</span>
            </div>
            <div className='text-left p-3'>
              <div>
                <div className='fs-4 fw-bold mb-2'>
                  <p>
                    <u>캠프 규정 및 환불 조치</u>
                  </p>
                </div>
                <div className='mb-3'>
                  SUCCESS 어학원 (이하 '당사' 라 한다) 과 영어 캠프 참가
                  학생간에 관하여 적용되는 기본적 사항을 정하기 위하여 다음과
                  같이 기본 계약을 체결한다. 참가자는 미성년자이므로 서명은
                  보호자가 하기로 한다.
                </div>
              </div>
              <div>
                <div className='policyTitle'>
                  {'<'}참가자 준수사항{'>'}
                </div>
                <ul>
                  <li>
                    - 참가자는 캠프 시작에서 종료까지 성실하게 규칙을 준수한다.
                  </li>
                  <li>
                    - 참가자는 현지 생활에 관하여 참가 신청 동의서에 정한 내용을
                    준수하여야 한다.
                  </li>
                  <li>
                    - 참가자는 캠프 지침서와 필리핀의 법을 이해하고 따르기로
                    한다.
                  </li>
                  <li>
                    - 당사는 참가자의 캠프 기간내 성실한 관리자로서 의무를
                    다한다.
                  </li>
                  <li>
                    - 당사는 참가자가 원활한 현지 생활을 할수 있도록 관리한다.
                  </li>
                </ul>
              </div>
              <div>
                <div className='policyTitle'>
                  {'<'}예약금 납입 및 캠프 비용 납입{'>'}
                </div>
                <ul>
                  <li>
                    - 참가자는 캠프 신청서 제출후 당사에서 지정한 날짜 이내에
                    선수금을 납입하여야 하며, 또한 당사가 지정한 나머지 잔금
                    납입일까지 모든 캠프 금액을 입금하기로 한다.
                  </li>
                </ul>
              </div>
              <div>
                <div className='policyTitle'>
                  {'<'}환불규정{'>'}
                </div>
                <ul>
                  <li>
                    - 환불규정 미숙지로 인하여 취소시 당사는 책임지지 않습니다.
                  </li>
                  <li>- 예약금 입금 후 취소시 예약금은 환불되지 않습니다.</li>
                  <li>
                    - 캠프 참가 후 취소시에는 캠프 금액 전액 환불이 불가합니다.
                  </li>
                  <li>
                    - 캠프 시작 2주전까지 취소시 캠프 금액의 50% 환불이
                    가능하며, 그 이후에 취소시 캠프 금액은 환불되지 않습니다.
                  </li>
                  <li>
                    - 캠프 기간내에 당사가 아닌 개인적인 사유로 인하여 귀국할 시
                    캠프 금액은 환불 되지 않으며, 그로 인해 생기는 소요 경비는
                    참가자가 부담한다.
                  </li>
                  <li>
                    - 현지 자체 사정에 의해 캠프 시작이 불가능할 경우 전액
                    환불한다.
                  </li>
                </ul>
              </div>
              <div>
                <div className='policyTitle'>
                  {'<'}환불불가{'>'}
                </div>
                <ul>
                  <li>
                    - 어학원의 규정에 위배되어 퇴교 처리시 환불이 되지 않습니다.
                    ( 필리핀 법규 위반, 음주, 흡연, 도의로 수업 방해시, 학생간의
                    폭력, 캠프 내 이성교재). 퇴교시 발생되는 소요 비용은
                    참가자가 부담합니다.
                  </li>
                  <li>
                    - 천재 지변으로 캠프 진행이 어려운 경우 환불이 되지
                    않습니다.
                  </li>
                  <li>
                    - 개인적인 사유나 실수로 인하여 캠프 진행이 어려운 경우
                    환불이 되지 않습니다.
                  </li>
                </ul>
              </div>
              <div>
                <div className='policyTitle'>
                  {'<'}기타사항{'>'}
                </div>
                <ul>
                  <li>
                    - 천재지변, 정부의 명령, 잔병 등 당사에 귀책되지 않는 이유로
                    발생한 참가자의 피해는 당사가 책임지지 않습니다.
                  </li>
                  <li>
                    - 참가자의 귀중품은 참가자 본인이 관리하여야 하며, 당사는
                    이에 책임지지 않습니다.
                  </li>
                  <li>
                    - 병원비 : 부모님과 상의 한후, 귀국 후 여행자 보험 약관에
                    다라 처리합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPolicy;
