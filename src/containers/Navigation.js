import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import {NavigationSubmit} from '../actions/navigation';

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
  },
  onPreviousSubmit: (e) => {
    const object = {
      page: e,
    };
    dispatch(NavigationSubmit(object));
  },
  
 
});

export default connect(mapState,mapDispatch)(Navigation);
