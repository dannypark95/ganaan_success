import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../../context/navbar/navbarContext';

const Family = (props) => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown } = navbarContext;

  const onClick = (e) => {
    setDropdown(false);
  };

  let navSide = '';
  let guide = '';
  let apply = '';
  let program = '';
  let schedule = '';
  let location = '';
  let menu = '';
  let intro = '';

  if (props.current) {
    navSide = 'navSide';
  }

  switch (props.current) {
    case 'guide':
      guide = 'current';
      break;
    case 'apply':
      apply = 'current';
      break;
    case 'program':
      program = 'current';
      break;
    case 'schedule':
      schedule = 'current';
      break;
    case 'location':
      location = 'current';
      break;
    case 'menu':
      menu = 'current';
      break;
    case 'intro':
      intro = 'current';
      break;
    default:
      break;
  }

  return (
    <div>
      <Link to='/family/intro' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${intro}`}>
          캠프소개
        </div>
      </Link>
      <Link to='/family/guide' onClick={onClick}>
        <div className={`dropdownList dropdownFirst ${navSide} ${guide}`}>
          모집요강
        </div>
      </Link>
      <Link to='/family/apply' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${apply}`}>
          접수신청
        </div>
      </Link>
      <Link to='/family/program' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${program}`}>
          교육프로그램
        </div>
      </Link>
      <Link to='/family/schedule' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${schedule}`}>
          주간 일과표
        </div>
      </Link>
      <Link to='/family/location' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${location}`}>
          캠프장소소개
        </div>
      </Link>
      <Link to='/family/menu' onClick={onClick}>
        <div className={`dropdownList dropdownLast ${navSide} ${menu}`}>
          식단표
        </div>
      </Link>
    </div>
  );
};

export default Family;
