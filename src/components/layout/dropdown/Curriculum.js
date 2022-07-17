import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  return (
    <div>
      <div className='dropdownList dropdownFirst'>
        <Link to='/curriculum/guide'>모집요강</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/curriculum/apply'>접수신청</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/curriculum/program'>교육프로그램</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/curriculum/schedule'>주간 일과표</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/curriculum/location'>캠프장소소개</Link>
      </div>
      <div className='dropdownList dropdownLast'>
        <Link to='/curriculum/menu'>식단표</Link>
      </div>
    </div>
  );
};

export default Curriculum;
