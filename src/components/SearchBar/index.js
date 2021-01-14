import React from 'react';

const SearchBar = ({
changeField,onSearchSubmit,
}) => (
<form onSubmit={(e)=> {
e.preventDefault();
onSearchSubmit();
}}
>
  <input
  onChange={(e) => {
    changeField(e.target.value);
  }}
  />
  <button
            type="submit"
            
          >
            OK
          </button>
  </form>
);


export default SearchBar;
