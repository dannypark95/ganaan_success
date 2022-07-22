import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div className='headerBanner'>
        <img
          className='headerPic'
          src={'https://i.imgur.com/JEFQI0y.png'}
          alt='Header'
        />
        <div className='bannerOverlay'></div>
        <div className='headerText'>
          {props.text}
          <div className='subHeader'>
            Home <i className='fa fa-angle-right' /> {props.text}{' '}
            <i className='fa fa-angle-right' /> {props.sub}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
