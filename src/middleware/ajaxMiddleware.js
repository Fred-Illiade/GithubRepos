import axios from 'axios';
import { FETCH_REPOS, fetchReposSuccess } from '../actions/repos';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    case FETCH_REPOS:
      axios({
        method: 'get',
        url: 'https://api.github.com/search/repositories?q=react',
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
