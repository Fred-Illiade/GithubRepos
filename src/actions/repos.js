export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';



export const fetchRepos = () => ({
  type: FETCH_REPOS,
});

export const fetchReposSuccess = (payload) => ({
  type: FETCH_REPOS_SUCCESS,
  payload,
});

export const fetchReposError = () => ({
  type: FETCH_REPOS_ERROR,
});
