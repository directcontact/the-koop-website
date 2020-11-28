import { combineReducers } from 'redux';
import button from './button';

const rootReducer = combineReducers({
  button: button,
});

export default rootReducer;
