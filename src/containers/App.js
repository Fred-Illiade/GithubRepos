import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRepos } from '../actions/repos';

const mapState = null;

const mapDispatch = (dispatch) => ({
  fetchRepos: () => {
    dispatch(fetchRepos());
  },
});

export default connect(mapState, mapDispatch)(App);
