import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import Table from 'react-bootstrap/Table';

import study_pic from '../../../media/child_education.jpg';

const CurriculumGuide = () => {
  return (
    <div>
      <Header text={'영어캠프'} sub={'모집요강'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'guide'} />
          </div>
          <div className='page-g2 sideCurr'>
            <div className='pageTitle'>
              <span className='subTitleNav'>모집요강</span>
            </div>
            <div className='currGuideMain text-left'>
              <div className='currGuideGrid'>
                <div className='currGuide-g1'>
                  <h3> 2023 여름방학 가족 연수 모집 요강</h3>
                </div>
                <div className='currGuide-g2'>
                  <img
                    src={study_pic}
                    alt='studying child'
                    className='currGuideSidePicture rounded imgShadow'
                  />
                </div>
              </div>

              <div className='currGuideBody'>
                <div className='currGuideBodyTitle'>
                  A.{' '}
                  <div className='highlight'>
                    <strong>주니어 수업료 (4주)</strong>
                  </div>
                </div>
                <div className='currPriceTable text-center'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>프로그램</th>
                        <th>내용</th>
                        <th>비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Regular Class</td>
                        <td>1:1 4h, 그룹수업 3h, 액티비티 수업 2h</td>
                        <td>240 만원</td>
                      </tr>
                      <tr>
                        <td>포함내역</td>
                        <td colSpan={2}>
                          <strong>금요일 오후 엑티비티 (1-5pm)</strong>{' '}
                          <br></br>
                          1주차: 필리핀 선생님과 함께하는 필리핀 역사 유적지
                          탐방 <br></br>
                          2주차: 코이카 봉사단과 코피노 고아원 봉사 수업 (붕어빵
                          만들기, 페이스 페인팅, 종이접기) <br></br>봉사 수업후
                          해외 봉사 인증서 발급 (한국 정부 인증 공식서류){' '}
                          <br></br>
                          3주차: 필리핀 선생님들과 함께 워터파크 방문 <br></br>
                          4주차: 스피치 프레젠테이션 발표회
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={4}>
                          선택사항 <br></br> (현지 납부)
                        </td>
                        <td>주니어 골프 레슨 (10회, 1h)</td>
                        <td>15,000 페소</td>
                      </tr>
                      <tr>
                        <td>스쿠버 다이빙</td>
                        <td>10,000 페소</td>
                      </tr>
                      <tr>
                        <td>튜터리얼 수업 (오후 7시-8시)</td>
                        <td>8,000 페소</td>
                      </tr>
                      <tr>
                        <td>수영 강습 (총 10회)</td>
                        <td>6,000 페소</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='currGuideBody'>
                <div className='currGuideBodyTitle'>
                  B.{' '}
                  <div className='highlight'>
                    <strong>보호자 수업료 (4주)</strong>
                  </div>
                </div>

                <div className='currPriceTable text-center'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>프로그램</th>
                        <th>내용</th>
                        <th>비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Course</td>
                        <td>
                          1:1 3h, 2시간 자녀에게 저녁시간 (7-9시) 튜터, 리얼
                          수업으로 양도 가능{' '}
                        </td>
                        <td>180 만원</td>
                      </tr>
                      <tr>
                        <td>포함내역</td>
                        <td colSpan={2}>
                          주 2회 Mall Tour <br></br>주 1회 마사지 (Body Massage){' '}
                          <br></br>주 3회 줌바 수업 <br></br>
                          <br></br>
                          <strong>금요일 오후 엑티비티</strong> <br></br>
                          1주차: 현지 선생님 안내로 방카보트 섬 투어 (올랑고,
                          힐루뚱안, 날루수안)<br></br>
                          2주차: 시티 탑스힐 투어 (레아신전, 포레스트 꽃농원,
                          시라오 가든, 리틀 암스테르담 등)
                          <br></br>
                          3주차: 짝퉁마켓, SM MALL, AYALA MALL투어 <br></br>
                          4주차: 스피치 프레젠테이션
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>프로그램</th>
                        <th>내용</th>
                        <th>비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>수영강습</td>
                        <td>10회</td>
                        <td>6,000 페소</td>
                      </tr>
                      <tr>
                        <td>스쿠버 다이빙</td>
                        <td>
                          오픈워터 자격증 <br></br>픽업-드랍
                        </td>
                        <td>20,000 페소</td>
                      </tr>
                      <tr>
                        <td>초보 골프레슨</td>
                        <td>총10회 (1h) - 가나안 내부 연습장</td>
                        <td>15,000 페소</td>
                      </tr>
                      <tr>
                        <td>전문 골프 레슨</td>
                        <td>
                          주2회 숙소 레슨 <br></br> 주1회 필드 레슨 (Alta Vista
                          Golf & Country Club Golf) 무제한 Window 사용 <br></br>{' '}
                          2회 필드 투어 전문 레슨 <br></br> 점심, 픽업-드랍
                        </td>
                        <td>60,000 페소</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='currGuideBodyTitle'>
                  C.{' '}
                  <div className='highlight'>
                    <strong>현지 납부 비용</strong>
                  </div>
                  <div className='currGuidePriceSale'>
                    <strong>
                      **2023 여름캠프 특별 혜택 : SSP발급비용 무료 지원 ! ! ! **
                    </strong>
                  </div>
                </div>
                <div className='currPriceTable text-center'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>보증금</td>
                        <td>6,000 페소</td>
                      </tr>
                      <tr>
                        <td>
                          <s>SSP (Special Study Permit) 비용</s>
                        </td>
                        <td>
                          <s>6,800 페소</s>
                        </td>
                      </tr>
                      <tr>
                        <td>전기세</td>
                        <td>6,000 페소</td>
                      </tr>
                      <tr>
                        <td>교재비</td>
                        <td>한권당 150-350 페소</td>
                      </tr>
                      <tr>
                        <td>주말 엑티비티 비용</td>
                        <td>
                          <strong>오슬롭</strong>,{' '}
                          <strong>모알보알 투어</strong>,{' '}
                          <strong>호핑투어</strong>,{' '}
                          <strong>리조트 투어</strong>, 현지도착시 투어에 따라
                          가격 책정
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='currGuideExtra'>
                  <div>
                    <strong>포함 내역</strong> : 숙소, 식사, 청소, 세탁, 수업,
                    관리비, 수도세, 보호자엑티비티 셔틀, 공학픽업 샌딩, ID,
                    티셔츠 (학생)
                  </div>

                  <div>
                    <strong>비 포함 내역</strong> : 왕복 항공권, 여행자 보험,
                    교재비, 전기세
                  </div>
                </div>

                <hr></hr>

                <div className='currGuideSummary'>
                  <div>
                    <strong>모집 대상</strong> : 보호자, 자녀 (7세 이상)
                  </div>
                  <div>
                    <strong>연수기간</strong> : 4주 (2023년 7월 24일 – 8월 18일)
                  </div>
                  <div>
                    <strong>수업 장소</strong> : 세부 가나안 국제 학교 내
                  </div>
                  <div>
                    <strong>숙소</strong> :{' '}
                    <a
                      href='https://goo.gl/maps/3Nrbc4W3HFAS27TW8'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      가나안 국제학교 기숙사
                    </a>
                  </div>
                  <div>
                    <strong>모집 인원</strong> : 가나안 기숙사 (16 가족) -
                    선착순 모집
                  </div>
                </div>

                {/* <div className='currGuideSummary'>
                  <div>
                    <strong>모집 대상</strong> : 초등학교 3학년, 중학교 3학년
                  </div>
                  <div>
                    <strong>캠프 기간</strong> : 2023년 7월 17일 - 8월 11일
                    (1차)
                    <br></br>
                    2023년 7월 24일 - 8월 18일 (2차)
                  </div>
                  <div>
                    <strong>기숙 형태</strong> : 필리핀 선생님 상주, 학생 4-6명
                    배정
                  </div>
                  <div>
                    <strong>모집 마감</strong> :선착순 (예약금 100만원
                    입슴순으로 선착순 모집)
                  </div>
                  <div>
                    <strong>캠프 장소</strong> : 필리핀 세부 막탄 가나안
                    크리스찬 국제학교
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumGuide;
