import { FILTER_SUBMIT} from '../actions/filter';

const initialState = {
  languagelist: 'javascript',
};

const filter = (state = initialState, action = {}) => {
  switch (action.type) {
    case FILTER_SUBMIT:
      return{
        ...state,
        ...action.payload,
      };
    default:
      return state;
}
};


export default filter;
