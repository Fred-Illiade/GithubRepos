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
  name: dataObject.name,
  login: dataObject.owner.login,
  avatar: dataObject.owner.avatar_url,

}));

export default reducer;
