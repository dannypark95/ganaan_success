import React from 'react';
import { Link } from 'react-router-dom';

const Community = (props) => {
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
      <Link to='/community/announcement'>
        <div
          className={`dropdownList dropdownFirst ${navSide} ${announcement}`}
        >
          공지사항
        </div>
      </Link>
      <Link to='/community/items'>
        <div className={`dropdownList dropdownBetween ${navSide} ${items}`}>
          연수준비물
        </div>
      </Link>
      <Link to='/community/entry'>
        <div className={`dropdownList dropdownBetween ${navSide} ${entry}`}>
          출입국 정보
        </div>
      </Link>
      <Link to='/community/policy'>
        <div className={`dropdownList dropdownBetween ${navSide} ${policy}`}>
          어학원규정
        </div>
      </Link>
      <Link to='/community/refund'>
        <div className={`dropdownList dropdownBetween ${navSide} ${refund}`}>
          환불규정
        </div>
      </Link>
      <Link to='/community/forum'>
        <div className={`dropdownList dropdownBetween ${navSide} ${forum}`}>
          상담게시판
        </div>
      </Link>
      <Link to='/community/review'>
        <div className={`dropdownList dropdownLast ${navSide} ${review}`}>
          연수후기
        </div>
      </Link>
    </div>
  );
};

export default Community;
