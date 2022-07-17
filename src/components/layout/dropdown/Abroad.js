import React from 'react';
import { Link } from 'react-router-dom';

const Abroad = () => {
  return (
    <div>
      <div className='dropdownList dropdownFirst'>
        <Link to='/abroad/program'>국제학교 입학 프로그램</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/abroad/intro'>학교소개</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/abroad/schedule'>일일스케줄</Link>
      </div>
      <div className='dropdownList dropdownLast'>
        <Link to='/abroad/procedure'>접수방법</Link>
      </div>
    </div>
  );
};

export default Abroad;
