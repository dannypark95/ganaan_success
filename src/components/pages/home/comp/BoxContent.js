import React from 'react';
import { Link } from 'react-router-dom';

const BoxContent = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <i className={`fa ${props.icon} fa-2x boxIcon mb-1`}></i>
      </Link>
      <div className='boxSeperator mt-1 mb-1'></div>

      <div className='mt-2 mb-2 fw-bold fs-5'>{props.heading}</div>
      <div className='mt-1 boxDesc'>{props.desc}</div>
    </div>
  );
};

export default BoxContent;
