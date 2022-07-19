import React from 'react';
import { Link } from 'react-router-dom';

const Walkin = (props) => {
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
    apply = 'current';
  } else if (props.current === 'intro') {
    intro = 'current';
  } else if (props.current === 'pickdrop') {
    pickdrop = 'current';
  } else if (props.current === 'tour') {
    tour = 'current';
  } else if (props.current === 'afterschool') {
    afterschool = 'current';
  }

  return (
    <div>
      <Link to='/walkin/apply'>
        <div className={`dropdownList dropdownFirst ${navSide} ${apply}`}>
          접수신청
        </div>
      </Link>
      <Link to='/walkin/intro'>
        <div className={`dropdownList dropdownBetween ${navSide} ${intro}`}>
          학원안내
        </div>
      </Link>
      <Link to='/walkin/pickdrop'>
        <div className={`dropdownList dropdownBetween ${navSide} ${pickdrop}`}>
          픽-드랍 서비스
        </div>
      </Link>
      <Link to='/walkin/tour'>
        <div className={`dropdownList dropdownBetween ${navSide} ${tour}`}>
          투어신청
        </div>
      </Link>
      <Link to='/walkin/afterschool'>
        <div className={`dropdownList dropdownLast ${navSide} ${afterschool}`}>
          방과후 수업
        </div>
      </Link>
    </div>
  );
};

export default Walkin;
