import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMenu;
