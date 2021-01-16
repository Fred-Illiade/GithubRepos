// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
// == Composant

const Repos = ({ list }) => {
 console.log(list);
  return (
    <div className="card-list">
      {list.map((results) => {
        return (
          <div className="card">
          <div>{results.name}</div>  
          <div>{results.language}</div>  
          <div>{results.stars}</div>  
          <img className="card-image" alt="illustration" src={results.avatar} />
         
          </div>
        );
      })}
</div>
  );
};

export default Repos;
