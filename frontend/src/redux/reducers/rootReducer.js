import { combineReducers } from 'redux';
import nav from './nav';
import ordering from './ordering'

const rootReducer = combineReducers({
  nav: nav,
  ordering: ordering,
});

export default rootReducer;
