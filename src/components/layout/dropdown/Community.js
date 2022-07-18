import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div>
      <div className='dropdownList dropdownFirst'>
        <Link to='/community/anouncement'>공지사항</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/community/items'>연수준비물</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/community/entry'>출입국 정보</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/community/policy'>어학원규정</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/community/refund'>환불규정</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/community/forum'>상담게시판</Link>
      </div>
      <div className='dropdownList dropdownLast'>
        <Link to='/community/review'>연수후기</Link>
      </div>
    </div>
  );
};

export default Community;
