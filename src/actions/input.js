export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_SUBMIT = 'INPUT_SUBMIT';

export const InputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const InputSubmit = () => ({
  type: INPUT_SUBMIT,
});
