import { FETCH_REPOS_SUCCESS } from '../actions/repos';

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
}
};

export const navList = (listerepos) => listerepos.map((dataObject) => ({
  name: dataObject.full_name,
  language: dataObject.language,
  avatar: dataObject.owner.avatar_url,
  stars: dataObject.stargazers_count,

}));

export const navLanguageList = (listerepos) => listerepos.map((dataObject) => ({

  language: dataObject.language,


}));

export default reducer;
