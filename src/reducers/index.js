import { combineReducers } from 'redux';
import counter from './counter';
import repos from './repos';

export default combineReducers({
  counter,
  repos,
});
