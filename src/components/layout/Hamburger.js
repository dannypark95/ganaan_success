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
        <i class='fa fa-bars fa_custom fa-2x' onClick={onClick}></i>
      )}
      {dropdownStatus && (
        <i class='fa fa-bars fa_custom fa-2x dropdownX' onClick={onClick}></i>
      )}
    </div>
  );
};

export default Hamburger;
