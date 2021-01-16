export const NAVIGATION_CHANGE = 'NAVIGATION_CHANGE';
export const NAVIGATION_SUBMIT = 'NAVIGATION_SUBMIT';
export const NAVIGATION_LOGOUT = 'NAVIGATION_LOGOUT';

export const NavigationChange = () => ({
  type: NAVIGATION_CHANGE,

});

export const NavigationSubmit = (payload) => ({
  type: NAVIGATION_SUBMIT,
  payload,
});

export const NavigationLogout = () => ({
  type: NAVIGATION_LOGOUT,
});
