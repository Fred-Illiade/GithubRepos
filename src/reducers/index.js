import { combineReducers } from 'redux';
import counter from './counter';
import repos from './repos';
import searchBar from './searchBar';

export default combineReducers({
  counter,
  repos,
  searchBar,
});
