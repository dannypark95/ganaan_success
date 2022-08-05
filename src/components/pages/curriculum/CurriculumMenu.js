import React from 'react';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

import Week4Menu from './comp/Week4Menu';

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
              {/* <div className='currMenuPanel'>
                <div class='wrapper'>
                  <div class='tabs'>
                    <div class='tab'>
                      <input
                        type='radio'
                        name='css-tabs'
                        id='tab-1'
                        class='tab-switch'
                        checked
                      />
                      <label for='tab-1' class='tab-label'>
                        4주
                      </label>
                      <input
                        type='radio'
                        name='css-tabs'
                        id='tab-2'
                        class='tab-switch'
                      />
                      <label for='tab-2' class='tab-label'>
                        6주
                      </label>
                      <input
                        type='radio'
                        name='css-tabs'
                        id='tab-3'
                        class='tab-switch'
                      />
                      <label for='tab-3' class='tab-label'>
                        8주
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}

              <Week4Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMenu;
