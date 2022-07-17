import React from 'react';
import { Link } from 'react-router-dom';

const Walkin = () => {
  return (
    <div>
      <div className='dropdownList dropdownFirst'>
        <Link to='/walkin/apply'>접수신청</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/walkin/intro'>학원안내</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/walkin/pickdrop'>픽-드랍 서비스</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/walkin/tour'>투어신청</Link>
      </div>
      <div className='dropdownList dropdownLast'>
        <Link to='/walkin/afterschool'>방과후 수업</Link>
      </div>
    </div>
  );
};

export default Walkin;
