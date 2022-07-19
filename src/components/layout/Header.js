import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div className='headerPic'>
        <img src={'https://i.imgur.com/viPCWjY.jpg'} alt='Header' />
      </div>

      <div className='headerSection'>
        <div className='headerText'>{props.text}</div>
      </div>
    </div>
  );
};

export default Header;
