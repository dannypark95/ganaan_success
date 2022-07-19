import React from 'react';
import { Link } from 'react-router-dom';

const Abroad = (props) => {
  let navSide = '';
  let intro = '';
  let program = '';
  let schedule = '';
  let procedure = '';

  if (props.current) {
    navSide = 'navSide';
  }

  if (props.current === 'intro') {
    intro = 'current';
  } else if (props.current === 'program') {
    program = 'current';
  } else if (props.current === 'schedule') {
    schedule = 'current';
  } else if (props.current === 'procedure') {
    procedure = 'current';
  }

  return (
    <div>
      <Link to='/abroad/program'>
        <div className={`dropdownList dropdownFirst ${navSide} ${program}`}>
          국제학교 입학 프로그램
        </div>
      </Link>
      <Link to='/abroad/intro'>
        <div className={`dropdownList dropdownBetween ${navSide} ${intro}`}>
          학교소개
        </div>
      </Link>
      <Link to='/abroad/schedule'>
        <div className={`dropdownList dropdownBetween ${navSide} ${schedule}`}>
          일일스케줄
        </div>
      </Link>
      <Link to='/abroad/procedure'>
        <div className={`dropdownList dropdownLast ${navSide} ${procedure}`}>
          접수방법
        </div>
      </Link>
    </div>
  );
};

export default Abroad;
