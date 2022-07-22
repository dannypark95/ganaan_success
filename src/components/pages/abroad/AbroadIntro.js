import React from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

const AbroadIntro = () => {
  return (
    <div>
      <Header text={'관리형 조기유학'} sub={'학교소개'} />

      <div className='container'>
        <h4>학교소개</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            <Abroad current={'intro'} />
          </div>
          <div className='page-g2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis similique consequatur nostrum soluta amet quas alias
            quod saepe animi dolor odit magni quia consequuntur, a aspernatur
            cum quisquam vel, tenetur tempore necessitatibus quidem accusamus
            at. Itaque aspernatur quod ratione non consequuntur numquam
            doloribus? Accusantium assumenda recusandae possimus repellendus,
            autem dicta!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadIntro;
