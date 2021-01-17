import axios from 'axios';
import { FETCH_REPOS, fetchReposSuccess } from '../actions/repos';


export default (store) => (next) => (action) => {
  next(action);
  const { dispatch, getState } = store;
  const state = getState();
  const BaseUrl = 'https://api.github.com/search/repositories?q=';
  const Search = state.searchBar.searchText;
  const Language = state.filter.languagelist === '' ? '' : `+language:${state.filter.languagelist}`;
  const Page = `&page=${state.navigation.page}&per_page=${state.navigation.perpage}`;

  switch (action.type) {
    case FETCH_REPOS:
      axios({
        method: 'get',
        url: `${BaseUrl}${Search}${Language}${Page}`,
      })
        .then((res) => {
          const { data } = res;
          console.log(data.items);
          console.log(Page);
          dispatch(fetchReposSuccess(data.items));
        })
        .catch(() => {

        });
      break;

    default:
      break;
  }
};
