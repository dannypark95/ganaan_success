import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../../context/navbar/navbarContext';

const Walkin = (props) => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown } = navbarContext;

  const onClick = (e) => {
    setDropdown(false);
  };

  let navSide = '';
  let apply = '';
  let intro = '';
  let pickdrop = '';
  let tour = '';
  let afterschool = '';

  if (props.current) {
    navSide = 'navSide';
  }

  if (props.current === 'apply') {
    // eslint-disable-next-line
    apply = 'current';
  } else if (props.current === 'intro') {
    intro = 'current';
  } else if (props.current === 'pickdrop') {
    // eslint-disable-next-line
    pickdrop = 'current';
  } else if (props.current === 'tour') {
    // eslint-disable-next-line
    tour = 'current';
  } else if (props.current === 'afterschool') {
    // eslint-disable-next-line
    afterschool = 'current';
  }

  return (
    <div>
      {/* <Link to='/walkin/apply' onClick={onClick}>
        <div className={`dropdownList dropdownFirst ${navSide} ${apply}`}>
          접수신청
        </div>
      </Link> */}
      <Link to='/walkin/intro' onClick={onClick}>
        <div className={`dropdownList dropdownLast ${navSide} ${intro}`}>
          학원안내
        </div>
      </Link>
      {/* <Link to='/walkin/pickdrop' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${pickdrop}`}>
          픽-드랍 서비스
        </div>
      </Link>
      <Link to='/walkin/tour' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${tour}`}>
          투어신청
        </div>
      </Link>
      <Link to='/walkin/afterschool' onClick={onClick}>
        <div className={`dropdownList dropdownLast ${navSide} ${afterschool}`}>
          방과후 수업
        </div>
      </Link> */}
    </div>
  );
};

export default Walkin;
