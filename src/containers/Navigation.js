import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import {NavigationSubmit} from '../actions/navigation';
import {fetchRepos} from '../actions/repos';

const mapState = (state) => ({
  page: state.navigation.page,
  perpage: state.navigation.perpage,
});

const mapDispatch = (dispatch) => ({
 
  onNextSubmit: (e) => {
    const object = {
      page: e,
    };
    dispatch(NavigationSubmit(object));
    dispatch(fetchRepos());
  },
  onPreviousSubmit: (e) => {
    const object = {
      page: e,
    };
    dispatch(NavigationSubmit(object));
    dispatch(fetchRepos());
  },
  
 
});

export default connect(mapState,mapDispatch)(Navigation);
