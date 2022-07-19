import React from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

const AbroadProgram = () => {
  return (
    <div>
      <Header text={'관리형 조기유학'} />

      <div className='container'>
        <h4>국제학교 입학 프로그램</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis similique consequatur nostrum soluta amet quas alias
            quod saepe animi dolor odit magni quia consequuntur, a aspernatur
            cum quisquam vel, tenetur tempore necessitatibus quidem accusamus
            at. Itaque aspernatur quod ratione non consequuntur numquam
            doloribus? Accusantium assumenda recusandae possimus repellendus,
            autem dicta!
          </div>
          <div className='page-g2'>
            <Abroad current={'program'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadProgram;