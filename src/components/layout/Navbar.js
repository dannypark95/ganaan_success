import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import mainLogo from '../../media/logo.png';
import mainSeal from '../../media/seal.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='navLogo'>
          <ul>
            <li>
              <img src={mainSeal} alt='navSeal' className='mainLogo'></img>
            </li>
            <li>
              <img src={mainLogo} alt='navLogo' className='mainLogo'></img>
            </li>
          </ul>
        </div>
      </Link>
      <div className='navList'>
        <ul>
          <li>
            <Link to='/about'>학원소개</Link>
          </li>
          <li>
            <Link to='/curriculum'>프로그램</Link>
          </li>
          <li>
            <Link to='/schedule'>영어캠프</Link>
          </li>
          <li>
            <Link to='/community'>커뮤니티</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
