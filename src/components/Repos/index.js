// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant

const Repos = ({ list }) => {
 console.log(list);
  return (
      list.map((results) => {
        return (
          <div>
          <div>{results.name}</div>  
          <div>{results.login}</div>  
          <img className="card-image" alt="illustration" src={results.avatar} />
         
          </div>
        );
      })

  );
};

export default Repos;
