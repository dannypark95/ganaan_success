import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../../context/navbar/navbarContext';

const Community = (props) => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown } = navbarContext;

  const onClick = (e) => {
    setDropdown(false);
  };

  let navSide = '';
  let announcement = '';
  let items = '';
  let entry = '';
  let policy = '';
  let refund = '';
  let forum = '';
  let review = '';

  if (props.current) {
    navSide = 'navSide';
  }

  if (props.current === 'announcement') {
    announcement = 'current';
  } else if (props.current === 'items') {
    items = 'current';
  } else if (props.current === 'entry') {
    entry = 'current';
  } else if (props.current === 'policy') {
    policy = 'current';
  } else if (props.current === 'refund') {
    refund = 'current';
  } else if (props.current === 'forum') {
    forum = 'current';
  } else if (props.current === 'review') {
    review = 'current';
  }

  return (
    <div>
      <Link to='/community/announcement' onClick={onClick}>
        <div
          className={`dropdownList dropdownFirst ${navSide} ${announcement}`}
        >
          공지사항
        </div>
      </Link>
      <Link to='/community/items' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${items}`}>
          연수준비물
        </div>
      </Link>
      <Link to='/community/entry' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${entry}`}>
          출입국 정보
        </div>
      </Link>
      <Link to='/community/policy' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${policy}`}>
          어학원규정
        </div>
      </Link>
      <Link to='/community/refund' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${refund}`}>
          환불규정
        </div>
      </Link>
      <Link to='/community/forum' onClick={onClick}>
        <div className={`dropdownList dropdownBetween ${navSide} ${forum}`}>
          상담게시판
        </div>
      </Link>
      <Link to='/community/review' onClick={onClick}>
        <div className={`dropdownList dropdownLast ${navSide} ${review}`}>
          연수후기
        </div>
      </Link>
    </div>
  );
};

export default Community;
