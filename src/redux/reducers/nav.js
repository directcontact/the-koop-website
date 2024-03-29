import * as t from '../types';

const nav = (
  state = {
    active: '',
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

export default nav;
