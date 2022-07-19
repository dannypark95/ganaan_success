import React from 'react';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';

const CommunityItems = () => {
  return (
    <div>
      <Header text={'커뮤니티'} />

      <div className='container'>
        <h4>연수준비물</h4>

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
            <Community current={'items'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityItems;
