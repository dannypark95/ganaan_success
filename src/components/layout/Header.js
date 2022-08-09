import React from 'react';
import { Link } from 'react-router-dom';

import headerPic_1 from '../../media/headerPic_1.png';
import headerPic_2 from '../../media/headerPic_2.png';
import headerPic_3 from '../../media/headerPic_3.png';
import headerPic_4 from '../../media/headerPic_4.png';
import headerPic_5 from '../../media/headerPic_5.png';

const Header = (props) => {
  var headerPic;

  if (props.text === '학원소개') {
    headerPic = headerPic_2;
  } else if (props.text === '영어캠프') {
    headerPic = headerPic_1;
  } else if (props.text === 'WALK-IN') {
    headerPic = headerPic_5;
  } else if (props.text === '관리형 조기유학') {
    headerPic = headerPic_4;
  } else {
    headerPic = headerPic_3;
  }

  return (
    <div>
      <div className='headerBanner'>
        <img className='headerPic' src={headerPic} alt='Header' />
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
