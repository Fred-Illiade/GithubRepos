export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_SUBMIT = 'INPUT_SUBMIT';
export const INPUT_LOGOUT = 'INPUT_LOGOUT';

export const InputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const InputSubmit = () => ({
  type: INPUT_SUBMIT,
});

export const InputLogout = () => ({
  type: INPUT_LOGOUT,
});
