export const FILTER_CHANGE = 'FILTER_CHANGE';
export const FILTER_SUBMIT = 'FILTER_SUBMIT';
export const FILTER_LOGOUT = 'FILTER_LOGOUT';

export const FilterChange = () => ({
  type: FILTER_CHANGE,

});

export const FilterSubmit = (payload) => ({
  type: FILTER_SUBMIT,
  payload,
});

export const FilterLogout = () => ({
  type: FILTER_LOGOUT,
});
