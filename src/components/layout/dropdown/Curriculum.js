import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = (props) => {
  let navSide = '';
  let guide = '';
  let apply = '';
  let program = '';
  let schedule = '';
  let location = '';
  let menu = '';

  if (props.current) {
    navSide = 'navSide';
  }

  if (props.current === 'guide') {
    guide = 'current';
  } else if (props.current === 'apply') {
    apply = 'current';
  } else if (props.current === 'program') {
    program = 'current';
  } else if (props.current === 'schedule') {
    schedule = 'current';
  } else if (props.current === 'location') {
    location = 'current';
  } else if (props.current === 'menu') {
    menu = 'current';
  }

  return (
    <div>
      <Link to='/curriculum/guide'>
        <div className={`dropdownList dropdownFirst ${navSide} ${guide}`}>
          모집요강
        </div>
      </Link>
      <Link to='/curriculum/apply'>
        <div className={`dropdownList dropdownBetween ${navSide} ${apply}`}>
          접수신청
        </div>
      </Link>
      <Link to='/curriculum/program'>
        <div className={`dropdownList dropdownBetween ${navSide} ${program}`}>
          교육프로그램
        </div>
      </Link>
      <Link to='/curriculum/schedule'>
        <div className={`dropdownList dropdownBetween ${navSide} ${schedule}`}>
          주간 일과표
        </div>
      </Link>
      <Link to='/curriculum/location'>
        <div className={`dropdownList dropdownBetween ${navSide} ${location}`}>
          캠프장소소개
        </div>
      </Link>
      <Link to='/curriculum/menu'>
        <div className={`dropdownList dropdownLast ${navSide} ${menu}`}>
          식단표
        </div>
      </Link>
    </div>
  );
};

export default Curriculum;
