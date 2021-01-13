import data from '../data';

const initialState = {
  list: data.items,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
