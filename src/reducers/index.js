import { combineReducers } from 'redux';

import numbers from './numbers';
import operators from './operators';
import display from './display';

export default combineReducers({
  numbers,
  operators,
  display
})