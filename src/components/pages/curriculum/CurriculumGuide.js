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
                  <h3>석쎄스 - 가나안 겨울 영어 캠프 모집 요강</h3>
                  <div className='currGuideTitleSub'>
                    주니어 영어 캠프는 부모님이 동반하지 않는 영어 어학
                    프로그램입니다.
                  </div>
                </div>
                <div className='currGuide-g2'>
                  <img
                    src={study_pic}
                    alt='studying child'
                    className='currGuideSidePicture'
                  />
                </div>
              </div>

              <div className='currGuideBody'>
                <div className='currGuideBodyTitle'>
                  A. <div className='highlight'>캠프 비용</div>
                </div>
                <div className='currGuidePriceSale'>
                  <div>
                    조기 등록시 5% 할인 (2022년 10월 15일까지 예약금 100만원
                    입금시)
                  </div>
                  <div>무료 화상 영어 혜택 (4주간 25분씩 수업, 총 20회)</div>
                </div>
                <div className='currPriceTable text-center'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>과정</th>
                        <th>조기 등록 할인후 비용</th>
                        <th>비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4주</td>
                        <td>3,705,000 원</td>
                        <td>3,900,000 원</td>
                      </tr>
                      <tr>
                        <td>6주</td>
                        <td>4,655,000 원</td>
                        <td>4,900,000 원</td>
                      </tr>
                      <tr>
                        <td>8주</td>
                        <td>5,605,000 원</td>
                        <td>5,900,000 원</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='currGuideBodyTitle'>
                  B. <div className='highlight'>캠프 일정</div>
                </div>
                <div className='currPriceTable text-center'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>과정</th>
                        <th>출발</th>
                        <th>기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4주 1차</td>
                        <td>인천 출발 / 부산 출발</td>
                        <td>2023년 1월 1일 ~ 1월 28일</td>
                      </tr>
                      <tr>
                        <td>4주 2차</td>
                        <td>인천 출발</td>
                        <td>2023년 1월 15일 ~ 2월 11일</td>
                      </tr>
                      <tr>
                        <td>6주</td>
                        <td>인천 출발 / 부산 출발</td>
                        <td>2023년 1월 1일 ~ 2월 11일</td>
                      </tr>
                      <tr>
                        <td>8주</td>
                        <td>인천 출발 / 부산 출발</td>
                        <td>2023년 1월 1일 ~ 2월 25일</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='currGuideExtra'>
                  <div>
                    <strong>포함 내역</strong> : 수업료, 기숙사비용, 교재비,
                    엑티비티 비용, SSP 발급비, 비동반 소아 입국세, 공항세, 비자
                    연장비, 티셔츠, 픽업 샌딩비, 신분증
                  </div>

                  <div>
                    <strong>비 포함 내역</strong> : 항공료, 여행자 보험, 개인
                    용돈, 수학 교재
                  </div>
                </div>

                <hr></hr>

                <div className='currGuideSummary'>
                  <div>
                    <strong>모집 대상</strong> : 초등학교 3학년 ~ 중학교 3학년
                  </div>
                  <div>
                    <strong>모집 마감</strong> : 선착순 (예약금 100만원
                    입금순으로 선착순 모집)
                  </div>
                  <div>
                    <strong>캠프 장소</strong> :
                    <a
                      href='https://goo.gl/maps/3Nrbc4W3HFAS27TW8'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      필리핀 세부 막탄 가나안 크리스찬 국제 학교
                    </a>
                  </div>
                  <div>
                    <strong>기숙 형태</strong> : 필리핀 선생님 상주, 학생
                    4~6명씩 배정{' '}
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

export default CurriculumGuide;
