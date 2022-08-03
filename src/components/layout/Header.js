import React from 'react';
import { Link } from 'react-router-dom';

import banner02 from '../../media/banner02.png';

const Header = (props) => {
  return (
    <div>
      <div className='headerBanner'>
        <img className='headerPic' src={banner02} alt='Header' />
        {/* <div className='bannerOverlay'></div> */}
        <div className='headerText'>
          <div className='bannerText'>{props.text}</div>
          <div className='subHeader'>
            <Link to='/'>
              <i className='fa fa-home homeImg' />
            </Link>{' '}
            <i className='fa fa-angle-right' /> {props.text}{' '}
            <i className='fa fa-angle-right' /> {props.sub}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
