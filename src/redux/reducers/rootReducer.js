import { combineReducers } from 'redux';
import nav from './nav';

const rootReducer = combineReducers({
  nav: nav,
});

export default rootReducer;
