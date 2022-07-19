import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../../context/navbar/navbarContext';

const About = (props) => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown } = navbarContext;

  const onClick = (e) => {
    setDropdown(false);
  };

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
      <Link to='/about/intro' onClick={onClick}>
        <div className={`dropdownList dropdownFirst ${navSide} ${intro}`}>
          인사말
        </div>
      </Link>
      <Link to='/about/history' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${history}`}>
          연혁
        </div>
      </Link>
      <Link to='/about/location' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${location}`}>
          위치
        </div>
      </Link>
      <Link to='/about/document' onClick={onClick}>
        <div className={`dropdownList dropdownLast ${navSide} ${document}`}>
          허가서류
        </div>
      </Link>
    </div>
  );
};

export default About;
