import { combineReducers } from 'redux';
import repos from './repos';
import searchBar from './searchBar';
import navigation from './navigation';
import filter from './filter';

export default combineReducers({
  repos,
  searchBar,
  navigation,
  filter,
});
