import { SET_DROPDOWN } from '../../types';

const App = (state, action) => {
  switch (action.type) {
    case SET_DROPDOWN:
      return {
        ...state,
        dropdownStatus: action.payload,
      };
    default:
      return state;
  }
};

export default App;
