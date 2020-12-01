import * as t from '../types';

const button = (
  state = {
    active: false,
  },
  action
) => {
  switch (action.type) {
    case t.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return { ...state };
  }
};

export default button;
