// == Import npm
import React from 'react';

// == Import
import Repos from 'src/components/Repos';
import data from '../../data';

// == Composant

const App = () => {
  return (
    <div className="app">
    <Repos liste={data.items} />
  </div>
  );
};


// == Export
export default App;
