// == Import npm
import React from 'react';

// == Import
import Repos from 'src/containers/Repos';
import SearchBar from 'src/containers/SearchBar';
import Navigation from 'src/containers/Navigation';
import Filter from 'src/containers/Filter';

// == Composant

const App = () => {
  return (
    <div className="app">
    
    <SearchBar />
   <Navigation/>
   <Filter/>
   <Repos />
  </div>
  );
};

// == Export
export default App;
