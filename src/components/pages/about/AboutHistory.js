import React from 'react';

import Header from '../../layout/Header';

import About from '../../layout/dropdown/About';

const AboutHistory = () => {
  return (
    <div>
      <Header text={'학원소개'} sub={'연혁'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>학원소개</div>
            <About current={'history'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>연혁</span>
            </div>

            <div className='historyContent'>
              <ul>
                <li className='history'>
                  <div className='historyYear'>2013</div>
                  <div className='historyMonth'>
                    <li>03</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제4회 임직원대상 교육관리 프로그램 진행예정</li>
                    <li>
                      제5회 국제학교 유학생 대상 학업관리 프로그램 진행예정
                    </li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2012</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>05</li>
                    <li>02</li>
                    <li className='mobile_489'>&nbsp;</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제6회 방학캠프 진행(유치부, 초등, 중학생, 성인)</li>
                    <li>제5회 방학캠프 진행(초등, 중학생 대상)</li>
                    <li>제4회 교육관리 프로그램 진행(티쳐대상)</li>
                    <li>
                      제4회 국제학교, 사립학교 유학생 대상 학원관리 프로그램
                      진행
                    </li>
                    <li>한국 수학특강반 및 화상영어 학습반 개설</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2011</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>05</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제4회 방학캠프 진행(초등, 중학생 대상)</li>
                    <li>제3회 방학캠프 진행(유치부, 초등학생 대상)</li>
                    <li>제3회 임직원대상 교육관리 프로그램 진행</li>
                    <li>
                      제3회 국제학교, 사립학교 유학생 대상 학원관리 프로그램
                      진행
                    </li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2010</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>05</li>
                    <li>02</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제2회 방학캠프 진행(유치부, 초등학생 대상)</li>
                    <li>제1회 방학캠프 진행(초등, 중학생 대상)</li>
                    <li>제2회 전학원 임직원대상 교육관리 프로그램 진행</li>
                    <li>제2회 국제학교, 유학생 학원관리 프로그램 진행</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2009</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>05</li>
                    <li>03</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제2회 국제학교, 유학생 학원관리 프로그램 진행</li>
                    <li>제1회 티처대상 교육관리 프로그램 진행</li>
                    <li>제1회 국제학교 유학생 학업관리 프로그램 진행</li>
                    <li>
                      Cebu Banilard에 학원 설립(현지 국제학교, 사립학교, 유학생
                      대상)
                    </li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2008</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제11회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>제10회 초중고 대상 단기연수 프로그램 진행</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2007</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>02</li>
                    <li>02</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제9회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>제8회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>석세스 프리스쿨 프로그램 (SPP) 과정 실시</li>
                    <li>
                      관리 조기유학 진행 (초중고생 10명 필리핀 국제학교에
                      장기유학중)
                    </li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2006</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>07</li>
                    <li>06</li>
                    <li>01</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제7회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>제6회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>제4회 국내영어캠프 진행</li>
                    <li>제5회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>3차 교환학생 파견 (3명, 펜실베니아 지역)</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2005</div>
                  <div className='historyMonth'>
                    <li>10</li>
                    <li>09</li>
                    <li>06</li>
                    <li>05</li>
                    <li className='mobile_446'>&nbsp;</li>
                    <li>03</li>
                    <li>01</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>제3회 국내영어캠프 진행 (주한외국인들과 함께)</li>
                    <li>2차 교환학생 파견 (미국 동부지역 공립학교)</li>
                    <li>제4회 초중고 대상 단기연수 프로그램 진행</li>
                    <li>
                      제2회 국내영어캠프 진행(강원도 평창 그량샤리오캠프장)
                    </li>
                    <li>호주 Uniworld College와 업무 제휴</li>
                    <li>1차 교환학생 파견 (미국 동부지역 공립학교)</li>
                    <li>제3회 초중고 대상 단기연수 프로그램 진행</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2004</div>
                  <div className='historyMonth'>
                    <li>12</li>
                    <li>09</li>
                    <li className='mobile_426'>&nbsp;</li>
                    <li>06</li>
                    <li>06</li>
                    <li>05</li>
                    <li>01</li>
                    <li className='mobile_426'>&nbsp;</li>
                    <li>01</li>
                  </div>
                  <div className='historyDesc'>
                    <li>세부현지 Cebu Eastern College와 업무 제휴</li>
                    <li>
                      건국대학교 학생복지위원회와 대학생 모집관련 업무제휴
                    </li>
                    <li>큰샘유학원과 업무협력 제휴</li>
                    <li>제2회 초중고 학생 대상 단기연수 프로그램 실시</li>
                    <li>제1회 국내 영어캠프 진행 (남양주시 수동캠프장)</li>
                    <li>
                      초등학교 원어민교회 {'<'}참에듀잉글리쉬{'>'} 업무협력 제휴
                    </li>
                    <li>제1회 초중등 학생 대상 단기연수 프로그램 실시</li>
                  </div>
                </li>
                <li className='history'>
                  <div className='historyYear'>2003</div>
                  <div className='historyMonth'>
                    <li>12</li>
                  </div>
                  <div className='historyDesc'>
                    <li>필리핀 세부에 정식인가 설립</li>
                    <li>
                      법인체등록번호 : <strong>CS200427256</strong>
                    </li>
                    <li>
                      SSP인가 번호 : <strong>NO.AFF-05-089</strong>
                    </li>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
