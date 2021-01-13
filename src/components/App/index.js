// == Import npm
import React, {useEffect} from 'react';

// == Import
import Repos from 'src/containers/Repos';
import data from '../../data';

// == Composant

const App = ({fetchRepos}) => {
  useEffect(fetchRepos, []);
  return (
    <div className="app">
    <Repos />
  </div>
  );
};

// == Export
export default App;
