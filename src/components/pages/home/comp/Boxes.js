import React from 'react';
import BoxContent from './BoxContent';
import BoxWebsite from './BoxWebsite';

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
          <BoxWebsite
            icon='fa-coffee'
            heading='카페'
            desc='캠프 기간 중 학생들 사진등 생생한 캠프 내용을 보실 수 있습니다'
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
