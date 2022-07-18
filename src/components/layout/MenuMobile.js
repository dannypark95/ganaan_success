import React from 'react';

import About from './dropdown/About';
import Abroad from './dropdown/Abroad';
import Walkin from './dropdown/Walkin';
import Curriculum from './dropdown/Curriculum';
import Community from './dropdown/Community';

const MenuMobile = () => {
  return (
    <div className='menuMobile'>
      <ul>
        <li className='navItems'>
          <div className='navTitle navFirst'>학원소개</div>
          <div className='navItemsMenu'>
            <About />
          </div>
        </li>
        <li className='navItems'>
          <div className='navTitle'>영어캠프</div>
          <div className='navItemsMenu'>
            <Curriculum />
          </div>
        </li>
        <li className='navItems'>
          {' '}
          <div className='navTitle'>WALK-IN</div>
          <div className='navItemsMenu'>
            <Walkin />
          </div>
        </li>
        <li className='navItems'>
          {' '}
          <div className='navTitle'>관리형 조기유학</div>
          <div className='navItemsMenu'>
            <Abroad />
          </div>
        </li>
        <li className='navItems'>
          {' '}
          <div className='navTitle navLast'>커뮤니티</div>
          <div className='navItemsMenu'>
            <Community />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
