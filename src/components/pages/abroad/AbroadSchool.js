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

  let cis = '';
  let cie = '';
  let bright = '';
  let ssc = '';
  let ateneo = '';
  let mmis = '';
  let woodridge = '';

  switch (school) {
    case 'cis':
      cis = 'currentBtn';
      break;
    case 'cie':
      cie = 'currentBtn';
      break;
    case 'bright':
      bright = 'currentBtn';
      break;
    case 'ssc':
      ssc = 'currentBtn';
      break;
    case 'ateneo':
      ateneo = 'currentBtn';
      break;
    case 'mmis':
      mmis = 'currentBtn';
      break;
    case 'woodridge':
      woodridge = 'currentBtn';
      break;
    default:
      break;
  }

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
              <div className='mb-3 d-flex flex-wrap text-center justify-content-center'>
                <button
                  className={`schoolBtn btn btn-secondary ${cis}`}
                  onClick={() => {
                    setSchool('cis');
                  }}
                >
                  CIS
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${cie}`}
                  onClick={() => {
                    setSchool('cie');
                  }}
                >
                  CIE
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${bright}`}
                  onClick={() => {
                    setSchool('bright');
                  }}
                >
                  BRIGHT ACADEMY
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${ssc}`}
                  onClick={() => {
                    setSchool('ssc');
                  }}
                >
                  SSC
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${ateneo}`}
                  onClick={() => {
                    setSchool('ateneo');
                  }}
                >
                  Ateneo
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${mmis}`}
                  onClick={() => {
                    setSchool('mmis');
                  }}
                >
                  MMIS
                </button>
                <button
                  className={`schoolBtn btn btn-secondary ${woodridge}`}
                  onClick={() => {
                    setSchool('woodridge');
                  }}
                >
                  Woodrige
                </button>
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
