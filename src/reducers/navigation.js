import { NAVIGATION_SUBMIT} from '../actions/navigation';

const initialState = {
  page: 1,
  perpage: 30,
};

const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
    case NAVIGATION_SUBMIT:
      return{
        ...state,
        ...action.payload,
      };
    default:
      return state;
}
};


export default navigation;
