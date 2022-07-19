import React, { useContext } from 'react';

import NavbarContext from '../../context/navbar/navbarContext';

const Hamburger = () => {
  const navbarContext = useContext(NavbarContext);

  const { setDropdown, dropdownStatus } = navbarContext;

  const onClick = (e) => {
    setDropdown(!dropdownStatus);
  };

  return (
    <div className='menuIcon'>
      {!dropdownStatus && (
        <i className='fa fa-bars fa_custom' onClick={onClick}></i>
      )}
      {dropdownStatus && (
        <i className='fa fa-bars fa_custom dropdownX' onClick={onClick}></i>
      )}
    </div>
  );
};

export default Hamburger;
