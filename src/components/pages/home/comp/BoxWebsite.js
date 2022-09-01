import React from 'react';

const BoxWebsite = (props) => {
  return (
    <div>
      <a
        href='https://cafe.naver.com/selaacademy'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className={`fa ${props.icon} fa-2x boxIcon mb-1`}></i>
      </a>
      <div className='boxSeperator mt-1 mb-1'></div>

      <div className='mt-2 mb-2 fw-bold fs-5'>{props.heading}</div>
      <div className='mt-1 boxDesc'>{props.desc}</div>
    </div>
  );
};

export default BoxWebsite;
