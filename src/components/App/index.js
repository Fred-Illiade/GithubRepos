// == Import npm
import React, {useEffect} from 'react';

// == Import
import Repos from 'src/containers/Repos';
import SearchBar from 'src/containers/SearchBar';
import Navigation from 'src/containers/Navigation';
import Filter from 'src/containers/Filter';
import data from '../../data';



// == Composant

const App = ({fetchRepos}) => {
  useEffect(fetchRepos, []);
  return (
    <div className="app">
    <Repos />
    <SearchBar />
   <Navigation/>
   <Filter/>
  </div>
  );
};

// == Export
export default App;
