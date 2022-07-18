import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer';

import { SET_DROPDOWN } from '../../types';

const NavbarState = (props) => {
  const initialState = {
    dropdownStatus: false,
  };

  const [state, dispatch] = useReducer(navbarReducer, initialState);

  // Set dropdown status
  const setDropdown = (bool) => {
    dispatch({ type: SET_DROPDOWN, payload: bool });
  };

  return (
    <NavbarContext.Provider
      value={{
        setDropdown,
        dropdownStatus: state.dropdownStatus,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
