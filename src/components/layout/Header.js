import React from 'react';

import headerPic from '../../media/philippines_wide.jpeg';

const Header = (props) => {
  return (
    <div>
      <div className='headerPic'>
        <img src={headerPic} alt='Header' />
      </div>

      <div className='headerSection'>
        <div className='headerText'>{props.text}</div>
      </div>
    </div>
  );
};

export default Header;
