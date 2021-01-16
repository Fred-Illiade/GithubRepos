import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {FilterSubmit} from '../actions/filter';
import {navLanguageList} from '../reducers/repos';

const mapState = (state) => ({
  list:navLanguageList(state.repos.list),
});

const mapDispatch = (dispatch) => ({
 
  onFilterSubmit: (e) => {
    const object = {
      languagelist: e,
    };
    dispatch(FilterSubmit(object));
  },
  
  
 
});

export default connect(mapState,mapDispatch)(Filter);
