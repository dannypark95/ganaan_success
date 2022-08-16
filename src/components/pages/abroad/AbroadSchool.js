import React, { useState } from 'react';

import Header from '../../layout/Header';
import Abroad from '../../layout/dropdown/Abroad';

import CISSlider from './comp/CISSlider';
import CIESlider from './comp/CIESlider';
import BrightSlider from './comp/BrightSlider';
import SSCSlider from './comp/SSCSlider';
import AteneoSlider from './comp/AteneoSlider';
import MMISSlider from './comp/MMISSlider';
import WoodridgeSlider from './comp/WoodridgeSlider';

const AbroadSchool = () => {
  const [school, setSchool] = useState('cis');

  return (
    <div>
      <Header text={'관리형 조기유학'} sub={'학교소개'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>관리형 조기유학</div>
            <Abroad current={'school'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>학교소개</span>
            </div>
            <div className='text-left'>
              <div className='mb-3'>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('cis');
                  }}
                >
                  CIS (Cebu International School)
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('cie');
                  }}
                >
                  CIE (Centre for International Education)
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('bright');
                  }}
                >
                  BRIGHT ACADEMY
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('ssc');
                  }}
                >
                  SSC (Singapore School Cebu)
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('ateneo');
                  }}
                >
                  Ateneo De Cebu
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('mmis');
                  }}
                >
                  MMIS (Maria Montessori International School)
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    setSchool('woodridge');
                  }}
                >
                  Woodrige International School
                </div>
              </div>

              {school === 'cis' && <CISSlider />}
              {school === 'cie' && <CIESlider />}
              {school === 'bright' && <BrightSlider />}
              {school === 'ssc' && <SSCSlider />}
              {school === 'ateneo' && <AteneoSlider />}
              {school === 'mmis' && <MMISSlider />}
              {school === 'woodridge' && <WoodridgeSlider />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadSchool;
