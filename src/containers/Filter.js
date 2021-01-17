import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {FilterSubmit} from '../actions/filter';
import {navLanguageList} from '../reducers/repos';
import {fetchRepos} from '../actions/repos';

const mapState = (state) => ({
  list:navLanguageList(state.repos.list),
});

const mapDispatch = (dispatch) => ({
 
  onFilterSubmit: (e) => {
    const object = {
      languagelist: e,
    };
    dispatch(FilterSubmit(object));
    dispatch(fetchRepos());
  },
  
  
 
});

export default connect(mapState,mapDispatch)(Filter);
