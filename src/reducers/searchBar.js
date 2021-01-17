import { INPUT_CHANGE, INPUT_SUBMIT} from '../actions/input';

const initialState = {
  searchText: '',
};

const SearchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return{
        ...state,
        ...action.payload,
      };

      case INPUT_SUBMIT:
        return{
          ...state,
        };
    
    default:
      return state;
}
};


export default SearchBar;
