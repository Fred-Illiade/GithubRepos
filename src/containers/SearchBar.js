
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';

const mapState = (state) => ({
  searchText: state.repos.searchText,
});

const mapDispatch = () => ({
  changeField: () => {
    console.log('changeField');
  },
  onSearchSubmit: () => {
    console.log('onSearchSubmit');
  },

});

export default connect(mapState, mapDispatch)(SearchBar);
