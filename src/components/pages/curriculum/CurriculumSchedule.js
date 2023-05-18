import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import Table from 'react-bootstrap/Table';

const CurriculumSchedule = () => {
  return (
    <div>
      <Header text={'영어캠프'} sub={'주간 일간표'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'schedule'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>주간 일간표</span>
            </div>
            <div className='currSchedule'>
              <div className='currGuideBodyTitle'>
                <h3 className='highlight'>
                  <strong>주니어 시간표</strong>
                </h3>
              </div>
              <div className='currTable text-center'>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>시간</th>
                      <th>월-목</th>
                      <th>금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>07:20 ~ 08:20</td>
                      <td>아침 식사</td>
                      <td>아침 식사</td>
                    </tr>
                    <tr>
                      <td>08:30 ~ 09:15</td>
                      <td>1:1 수업</td>
                      <td>1:1 수업</td>
                    </tr>
                    <tr>
                      <td>09:25 ~ 10:10</td>
                      <td>그룹수업</td>
                      <td>그룹수업</td>
                    </tr>
                    <tr>
                      <td>10:20 ~ 11:05</td>
                      <td>1:1 수업</td>
                      <td>1:1 수업</td>
                    </tr>
                    <tr>
                      <td>11:15 ~ 12:00</td>
                      <td>그룹수업</td>
                      <td>그룹수업</td>
                    </tr>
                    <tr>
                      <td>12:00 ~ 12:50</td>
                      <td>점심 식사</td>
                      <td>점심 식사</td>
                    </tr>
                    <tr>
                      <td>12:50 ~ 13:35</td>
                      <td>1:1 수업</td>
                      <td rowSpan={4}>
                        <strong>금요일 엑티비티</strong> <br></br> 역사 탐방
                        <br></br>해외 봉사 활동 <br></br>워터파크 <br></br>
                        스피치 프리젠테이션
                      </td>
                    </tr>
                    <tr>
                      <td>13:45 ~ 14:20</td>
                      <td>그룹수업</td>
                    </tr>
                    <tr>
                      <td>14:30 ~ 15:15</td>
                      <td>1:1 수업</td>
                    </tr>
                    <tr>
                      <td>15:25 ~ 17:00</td>
                      <td>필리핀 선생님과 함께하는 엑티비티 활동</td>
                    </tr>
                    <tr>
                      <td>17:00 ~ 18:00</td>
                      <td>자유시간/줌바/수영</td>
                      <td>자유시간/줌바/수영</td>
                    </tr>
                    <tr>
                      <td>18:00 ~ 19:00</td>
                      <td>저녁 식사</td>
                      <td>저녁 식사</td>
                    </tr>
                    <tr>
                      <td>19:00 ~ 21:00</td>
                      <td>자유시간/튜터리얼/숙제</td>
                      <td>자유시간/튜터리얼/숙제</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className='currGuideBodyTitle'>
                <h3 className='highlight'>
                  <strong>학부모 시간표</strong>
                </h3>
              </div>
              <div className='currTable text-center'>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>시간</th>
                      <th>스케줄</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>07:20 ~ 08:20</td>
                      <td>아침 식사</td>
                    </tr>
                    <tr>
                      <td>08:30 ~ 09:15</td>
                      <td>자유시간</td>
                    </tr>
                    <tr>
                      <td>09:25 ~ 10:10</td>
                      <td>1:1 수업</td>
                    </tr>
                    <tr>
                      <td>10:20 ~ 11:05</td>
                      <td>1:1 수업</td>
                    </tr>
                    <tr>
                      <td>11:15 ~ 12:00</td>
                      <td>그룹수업</td>
                    </tr>
                    <tr>
                      <td>12:00 ~ 12:50</td>
                      <td>점심 식사</td>
                    </tr>
                    <tr>
                      <td>13:00 ~ 17:00</td>
                      <td>
                        <h5>
                          <strong>오후 Activities</strong>
                        </h5>{' '}
                        <br></br> Mon, Wed - Mall tour
                        <br></br>Tue, Thu - 마사지 (주 1회 무료) <br></br>Fri -
                        외부 엑티비티 <br></br> <br></br>
                        수영강습, 골프레슨, 스쿠버 다이빙 (유로)
                      </td>
                    </tr>
                    <tr>
                      <td>17:00 ~ 18:00</td>
                      <td>자유시간/줌바/수영</td>
                    </tr>
                    <tr>
                      <td>18:00 ~ 19:00</td>
                      <td>저녁 식사</td>
                    </tr>
                    <tr>
                      <td>19:00 ~ 21:00</td>
                      <td>자유시간</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSchedule;
