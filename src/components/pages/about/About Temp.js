import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

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

            <div className='docMain'>
              <h4>미성년자 여권발급</h4>
              <div className='docSubHeading'>
                기존에 여권이 있는 어린이는 최소 6개월 이상 여권상 유호기간이
                남아있어야 합니다.
              </div>
              <div className='docItems'>
                <ul>
                  <li className='docList'>1. 여권발급신청서</li>
                  <li className='docList'>
                    2. 여권용 사진 1매 (6개월 이내에 촬영한 사진. 단, 전자여권이
                    아닌 경우 2매)
                  </li>
                  <li className='docList'>
                    3. 여권 발급동의서 : 동의자가 직접 신청하는 경우는 생략
                    (동의자 신분증 필요)
                    <li className='docListItem'>
                      - 동의자란 : 부모, 친권자, 후견인 등 법정대리인을 말함
                    </li>
                    <li className='docListItem'>
                      - 부모동의서로써 본인에 대한 신분 확인 과정을 거친 것으로
                      인정하므로 해당 미성년자의 신분증을 제출하지 않아도
                      됩니다.
                    </li>
                  </li>
                  <li className='docList'>
                    4. 동의자의 인감증명서 (여권 발급동의서에 날인된 인감과
                    동일여부 확인)
                    <li className='docListItem'>
                      - 동의자(=부모,친권자)가 집접 신청시는 동의자 신분증 필요
                    </li>
                  </li>
                  <li className='docList'>
                    5. 기본증명서 및 가족관계증명서 (행정전산망으로 확인
                    불가능시) : 동의자(=부모,친권자)가 직접 신청시는 생략
                  </li>
                </ul>
                <div className='docExtra'>
                  <div>
                    <i className='fa fa-angle-right' /> 여권발급수수료는
                    전자여권기준 복수여권(5년초과 10년이내) : 5만5천원
                  </div>
                  <div>
                    <i className='fa fa-angle-right' /> 여권발급관련 세부내용은
                    아래 외교통상부 여권안내 홈페이지를 참고하세요!
                  </div>
                </div>
                <div className='docExtraLink'>
                  <a href='www.passport.go.kr' target='_blank' rel='noreferrer'>
                    www.passport.go.kr
                  </a>
                </div>
              </div>
              <h4 className='docParent'>부모님 동의서(영문) 공증</h4>
              <div className='docItems'>
                <ul>
                  <li className='docParentHeading'>
                    <div className='docStrong'>
                      <i class='fa fa-circle docCircle' /> 반드시 국내에서
                      공증사무소의 공증을 받아야 합니다.
                    </div>

                    <li>
                      <i className='fa fa-angle-right' /> 각 여권과 동일한 영문
                      이름 철자의 영문 주민등록등본상 이름을 부모님
                      동의서(영문)에 영문으로 기재하시고 공증받으셔야 합니다.
                      <li className='docListItem'>
                        - 인솔자(=만 20세 이상의 동반자, 혼자 가는 어린이의 경우
                        필리핀 인계자)또안 여권과 동일할 영문 이름을 기재해야
                        함.
                      </li>
                      <li className='docListItem'>
                        - 필리핀 이민국에서 한글을 모르는 직원이 서류를 확인하는
                        방법은 가족관계 영문주민등록등본과 영문부모님 동의서와
                        어린이와 인솔자의 여권상의 영문 이름의 철자를 확인하는
                        방법뿐이기 때문에 영문 이름 철자가 매우 중요합니다.
                      </li>
                      <li className='docListItem'>
                        - 부모님 동의서에는 날짜를 비워두시고 출력하셔서
                        공증받으세요!
                      </li>
                    </li>
                  </li>
                  <li className='docParentHeading'>
                    <div className='docStrong'>
                      <i class='fa fa-circle docCircle' /> 부모님 동의서
                      공증사무소에서 공증시 필요서류 및 관련사항
                    </div>
                    <li>
                      <i className='fa fa-angle-right' /> 부모님 두분이
                      공증사무소에 직접가는 경우
                      <li className='docListItem'>
                        - 부모님 두 분 다 신분증 및 도장을 지참하시고 부모님
                        동의서(영문, 한글) 각 1부씩을 작정 지참하시어 방문하시면
                        됩니다.
                      </li>
                      <li className='docListItem'>
                        - 공증사무소에서는 여권 영문 이름과 영문주민등록등본을
                        비교하여 공증해주는 것은 아니므로 여권과
                        영문주민등록등본이 필요한 것은 아닙니다. 하지만 공증받는
                        서류상의 모든 내용을 정확하게 작성하시고 확인하셔서
                        공증은 받으세요!
                      </li>
                      <li className='docListItem'>
                        - 공증 비용은 공증사무실마다 차이는 있겠지만 부모님
                        동의서(영문, 한글) 각 1부씩을 의뢰하면 51,500원의
                        수수료를 받습니다.
                      </li>
                      <li className='docListItem'>
                        - 공증 처리 시간은 20분 정도 소요된다고 합니다.
                      </li>
                    </li>
                    <li>
                      <i className='fa fa-angle-right' /> 부모님중 한분이
                      공증사무소에 가시는 경우
                      <li className='docListItem'>
                        - 방법은 동일하지만, 부모님 중 한 분만 가신다면 직접
                        가시는 부모님은 신분증 및 도장을 지참하시고 못가시는
                        분의 인감증명서 1통과 인감도장을 지참하셔야 합니다.
                      </li>
                    </li>
                    <li>
                      <i className='fa fa-angle-right' /> 부모님중 한분도
                      안가시고 대리인이 공증사무소에 가시는경우
                      <li className='docListItem'>
                        - 방법은 동일하시만, 부모님 두분의 인감증명서 각1통과
                        두분의 인감도장 그리고 대리인은 신분증을 지참하시고
                        방문해야 함.
                      </li>
                    </li>
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

export default AboutDocument;
