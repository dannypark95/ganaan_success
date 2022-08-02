import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import Table from 'react-bootstrap/Table';

const CurriculumMenu = () => {
  return (
    <div>
      <Header text={'영어캠프'} sub={'식단표'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'menu'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>식단표</span>
            </div>
            <div className='currMenu'>
              <div className='currMenuPanel'>
                <div className='weekTitle'>4주</div>
                <div className='weekTitle'>6주</div>
                <div className='weekTitle'>8주</div>
              </div>
              <div className='currMenuTable'>
                <div className='currMenuWeek'>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>1주</th>
                        <th>1/1 (일)</th>
                        <th>1/2 (월)</th>
                        <th>1/3 (화)</th>
                        <th>1/4 (수)</th>
                        <th>1/5 (목)</th>
                        <th>1/6 (금)</th>
                        <th>1/7 (토)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>아침</td>
                        <td>07:00</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                      </tr>
                      <tr>
                        <td>점심</td>
                        <td>07:00</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                      </tr>
                      <tr>
                        <td>저녁</td>
                        <td>07:00</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>체조,세면</td>
                        <td>{''}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMenu;
