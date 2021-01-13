import {connect} from 'react-redux';
import Repos from '../components/Repos';
import {navList} from '../reducers/repos';

const mapState =(state) => ({
  list:navList(state.repos.list),
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Repos);
