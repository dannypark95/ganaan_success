import React from 'react';
import BoxContent from './BoxContent';

const Boxes = () => {
  return (
    <div className='container'>
      <div className='boxGrid'>
        <div className='box-g1 p-4 box m-3'>
          <BoxContent
            link='/community/announcement'
            icon='fa-newspaper-o'
            heading='공지사항'
            desc='SUCCESS ACADEMY 의 최신 소식을 한눈에 확인 하세요'
          />
        </div>
        <div className='box-g2 p-4 box m-3'>
          <BoxContent
            link='/curriculum/intro'
            icon='fa-info-circle'
            heading='영어캠프'
            desc='SUCCESS + GANAAN 영어캠프소개'
          />
        </div>
        <div className='box-g3 p-4 box m-3'>
          <BoxContent
            link='/community/forum'
            icon='fa-envelope'
            heading='상담문의'
            desc='무엇이든 물어보세요'
          />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
