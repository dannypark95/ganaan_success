import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../media/logo.png';
import mainSeal from '../../media/seal.png';

import About from './dropdown/About';
import Abroad from './dropdown/Abroad';
import Walkin from './dropdown/Walkin';
import Curriculum from './dropdown/Curriculum';
import Community from './dropdown/Community';

import Hamburger from './Hamburger';
import MenuMobile from './MenuMobile';

const Navbar = () => {
  return (
    <div>
      <div className='navGrid'>
        <nav className='navbar nav-g1'>
          <div className='logo'>
            <Link to='/'>
              <div className='navLogo'>
                <ul>
                  <li>
                    <img
                      src={mainSeal}
                      alt='navSeal'
                      className='mainLogo'
                    ></img>
                  </li>
                  <li>
                    <img
                      src={mainLogo}
                      alt='navLogo'
                      className='mainLogo'
                    ></img>
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </nav>
        <div className='navList navbar nav-g2'>
          <ul>
            <li className='navItems'>
              <div className='navTitle'>학원소개</div>
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
              <div className='navTitle'>공지사항</div>
              <div className='navItemsMenu'>
                <Community />
              </div>
            </li>
          </ul>
        </div>
        <Hamburger />
      </div>
      <MenuMobile />
    </div>
  );
};

export default Navbar;
