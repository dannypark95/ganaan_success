import React, { useContext } from 'react';

import xmark from '../../media/xmark-solid.svg';

import About from './dropdown/About';
import Abroad from './dropdown/Abroad';
import Walkin from './dropdown/Walkin';
import Curriculum from './dropdown/Curriculum';
import Community from './dropdown/Community';

import NavbarContext from '../../context/navbar/navbarContext';

const MenuMobile = () => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown, dropdownStatus } = navbarContext;

  const onClick = (e) => {
    setDropdown(!dropdownStatus);
  };

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className='menuMobile'>
      <div className='innerMenu'>
        <ul>
          <li>
            <div className='xmark_align'>
              <img
                src={xmark}
                className='xmarkNav'
                alt='xmarkMenu'
                onClick={onClick}
              ></img>
            </div>
          </li>
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

        <div className='copyright'>
          &copy; {year} SUCCESS ACADEMY. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
