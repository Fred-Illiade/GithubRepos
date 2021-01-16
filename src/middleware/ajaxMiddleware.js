import axios from 'axios';
import { FETCH_REPOS, fetchReposSuccess } from '../actions/repos';
import { INPUT_SUBMIT } from '../actions/input';
import { NAVIGATION_SUBMIT } from '../actions/navigation';
import { FILTER_SUBMIT } from '../actions/filter';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch, getState } = store;
  const state = getState();
  console.log(state.searchBar.searchText);
  switch (action.type) {
    case FETCH_REPOS:
      axios({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${state.searchBar.searchText}?page=${state.navigation.page}&per_page=${state.navigation.perpage}`,
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
          case NAVIGATION_SUBMIT:
            axios({
              method: 'get',
              url: `https://api.github.com/search/repositories?q=${state.searchBar.searchText}?page=${state.navigation.page}&per_page=${state.navigation.perpage}`,
            })
              .then((res) => {
                const { data } = res;
                console.log(data.items);
                dispatch(fetchReposSuccess(data.items));
              })
              .catch(() => {
      
              });
              break;
              case FILTER_SUBMIT:
            axios({
              method: 'get',
              url: `https://api.github.com/search/repositories?q=${state.searchBar.searchText}+${state.filter.languagelist}?page=${state.navigation.page}&per_page=${state.navigation.perpage}`,
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
