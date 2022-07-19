import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  let navSide = '';
  let intro = '';
  let history = '';
  let location = '';
  let document = '';

  if (props.current) {
    navSide = 'navSide';
  }

  if (props.current === 'intro') {
    intro = 'current';
  } else if (props.current === 'history') {
    history = 'current';
  } else if (props.current === 'location') {
    location = 'current';
  } else if (props.current === 'document') {
    document = 'current';
  }

  return (
    <div>
      <Link to='/about/intro'>
        <div className={`dropdownList dropdownFirst ${navSide} ${intro}`}>
          인사말
        </div>
      </Link>
      <Link to='/about/history'>
        <div className={`dropdownList dropdownBetween ${navSide} ${history}`}>
          연혁
        </div>
      </Link>
      <Link to='/about/location'>
        <div className={`dropdownList dropdownBetween ${navSide} ${location}`}>
          위치
        </div>
      </Link>
      <Link to='/about/document'>
        <div className={`dropdownList dropdownLast ${navSide} ${document}`}>
          허가서류
        </div>
      </Link>
    </div>
  );
};

export default About;
