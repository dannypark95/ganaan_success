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
              <h3 className='currTitle text-left'>
                석쎄스 어학원 + 가나안 국제학교 DAILY SCHEDULE
              </h3>
              <div className='currTable text-center'>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th colSpan={2}> 시간</th>
                      <th>수업 형태</th>
                      <th>월-금</th>
                      <th>토</th>
                      <th>일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>기상</td>
                      <td>07:00</td>
                      <td>{''}</td>
                      <td>체조,세면</td>
                      <td>{''}</td>
                      <td>{''}</td>
                    </tr>
                    <tr>
                      <td>아침식사</td>
                      <td>07:30</td>
                      <td>{''}</td>
                      <td>아침식사</td>
                      <td>체조,세면</td>
                      <td>체조,세면</td>
                    </tr>
                    <tr>
                      <td>1교시</td>
                      <td>08:00</td>
                      <td>1:1 수업</td>
                      <td>Listening 수업</td>
                      <td>아침식사</td>
                      <td>아침식사</td>
                    </tr>
                    <tr>
                      <td>2교시</td>
                      <td>09:00</td>
                      <td>1:1 수업</td>
                      <td>Speaking 수업</td>
                      <td>안전교육</td>
                      <td rowSpan={3} className='tableRowSpan'>
                        <div className='rowSpanText'>주말 TEST</div>
                      </td>
                    </tr>
                    <tr>
                      <td>3교시</td>
                      <td>10:00</td>
                      <td>1:1 수업</td>
                      <td>Reading 수업</td>
                      <td rowSpan={7} className='tableRowSpan'>
                        <div className='rowSpanText'>주말 액티비티 & 외식 </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4교시</td>
                      <td>11:00</td>
                      <td>1:1 수업</td>
                      <td>Writing 수업</td>
                    </tr>
                    <tr>
                      <td>점심식사</td>
                      <td>12:00</td>
                      <td>{''}</td>
                      <td>점심식사</td>
                      <td>점심식사</td>
                    </tr>
                    <tr>
                      <td>5교시</td>
                      <td>13:00</td>
                      <td>그룹 수업</td>
                      <td>Grammer 수업</td>
                      <td rowSpan={4} className='tableRowSpan'>
                        <div className='rowSpanText'>
                          {' '}
                          프리젠테이션, 영화감상{' '}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6교시</td>
                      <td>14:00</td>
                      <td>그룹 수업</td>
                      <td>Debate & Discussion</td>
                    </tr>
                    <tr>
                      <td>7교시</td>
                      <td>15:00</td>
                      <td>학년별 수업</td>
                      <td>한국 수학 수업</td>
                    </tr>
                    <tr>
                      <td>8교시</td>
                      <td>16:00</td>
                      <td>그룹 수업</td>
                      <td>Speech 수업</td>
                    </tr>
                    <tr>
                      <td>9교시</td>
                      <td>17:00</td>
                      <td>개별활동</td>
                      <td>체육활동(수영,농구)</td>
                      <td>휴식</td>
                      <td>휴식</td>
                    </tr>
                    <tr>
                      <td>{''}</td>
                      <td>18:00</td>
                      <td>{''}</td>
                      <td>저녁식사</td>
                      <td>저녁식사</td>
                      <td>저녁식사</td>
                    </tr>
                    <tr>
                      <td>10교시</td>
                      <td>19:00</td>
                      <td>그룹 수업</td>
                      <td>영어 일기쓰기, 숙제, 단어암기</td>
                      <td>영어 일기쓰기, 일주일간 단어 확인</td>
                      <td>개인별 학습</td>
                    </tr>
                    <tr>
                      <td>점호준비</td>
                      <td>21:00</td>
                      <td>{''}</td>
                      <td colSpan={3}>세면, 점호, 일기검사</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>취침</td>
                      <td>{''}</td>
                      <td colSpan={3}>취침</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>특별수업</td>
                      <td>{''}</td>
                      <td colSpan={3}>단어테스트 불합격자 재테스트</td>
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
