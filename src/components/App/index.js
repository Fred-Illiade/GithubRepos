// == Import npm
import React, {useEffect} from 'react';

// == Import
import Repos from 'src/containers/Repos';
import SearchBar from 'src/components/SearchBar';
import data from '../../data';


// == Composant

const App = ({fetchRepos}) => {
  useEffect(fetchRepos, []);
  return (
    <div className="app">
    <Repos />
    <SearchBar 
    changeField={() => {
      console.log('changeField');
   
    }}
    onSearchSubmit={() => {
      console.log('onSearchSubmit');
   
    }}
    />
  </div>
  );
};

// == Export
export default App;
