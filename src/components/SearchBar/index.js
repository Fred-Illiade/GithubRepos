import React from 'react';

const SearchBar = ({
changeField,onSearchSubmit,value,
}) => (
<form onSubmit={(e)=> {
e.preventDefault();
onSearchSubmit();
}}
>
  <input
  value={value}
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
