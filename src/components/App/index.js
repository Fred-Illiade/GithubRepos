// == Import npm
import React from 'react';

// == Import
import Repos from 'src/components/Repos';
import data from '../../data';

// == Composant

const navList = data.items.map((dataObject) => ({
  name: dataObject.name,
  login: dataObject.owner.login,
  avatar: dataObject.owner.avatar_url,

}));

const App = () => {
  return (
    <div className="app">
    <Repos liste={navList} />
  </div>
  );
};


// == Export
export default App;
