import React from 'react';
import Table from 'react-bootstrap/Table';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';

const CommunityAnnouncement = () => {
  return (
    <div>
      <Header text={'커뮤니티'} sub={'공지사항'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>커뮤니티</div>
            <Community current={'announcement'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>공지사항</span>
            </div>
            <div className='announceTable'>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAnnouncement;
