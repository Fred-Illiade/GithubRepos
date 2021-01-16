import axios from 'axios';
import { FETCH_REPOS, fetchReposSuccess } from '../actions/repos';
import { INPUT_SUBMIT } from '../actions/input';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch, getState } = store;
  const state = getState();
  console.log(state.searchBar.searchText);
  switch (action.type) {
    case FETCH_REPOS:
      axios({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${state.searchBar.searchText}`,
      })
        .then((res) => {
          const { data } = res;
          console.log(data.items);
          dispatch(fetchReposSuccess(data.items));
        })
        .catch(() => {

        });
      break;
      case INPUT_SUBMIT:
        axios({
          method: 'get',
          url: `https://api.github.com/search/repositories?q=${state.searchBar.searchText}`,
        })
          .then((res) => {
            const { data } = res;
            console.log(data.items);
            dispatch(fetchReposSuccess(data.items));
          })
          .catch(() => {
  
          });
      break;
    default:
      break;
  }
};
