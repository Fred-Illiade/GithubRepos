
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';
import {InputChange, InputSubmit} from '../actions/input';
import {fetchRepos} from '../actions/repos';

const mapState = (state) => ({
  searchText: state.searchBar.searchText,
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
    dispatch(fetchRepos());
  },

});

export default connect(mapState, mapDispatch)(SearchBar);
