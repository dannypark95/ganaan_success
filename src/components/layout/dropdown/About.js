import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='dropdownList dropdownFirst'>
        <Link to='/about/intro'>인사말</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/about/history'>연혁</Link>
      </div>
      <div className='dropdownList dropdownBetween'>
        <Link to='/about/location'>위치</Link>
      </div>
      <div className='dropdownList dropdownLast'>
        <Link to='/about/document'>허가서류</Link>
      </div>
    </div>
  );
};

export default About;
