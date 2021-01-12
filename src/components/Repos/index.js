// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant

const Repos = ({ liste }) => {
 
  return (
      liste.map((results) => {
        return (
          <div>{results.name}</div>
        );
      })

  );
};

export default Repos;
