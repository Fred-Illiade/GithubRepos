
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';
import {InputChange, InputSubmit} from '../actions/input';

const mapState = (state) => ({
  searchText: state.repos.searchText,
});

const mapDispatch = (dispatch) => ({
  changeField: (value) => {
    const object = {
      searchText: value,
    };
    dispatch(InputChange(object));
  },
  onSearchSubmit: () => {
    dispatch(InputSubmit());
  },

});

export default connect(mapState, mapDispatch)(SearchBar);
