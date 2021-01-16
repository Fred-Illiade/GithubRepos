import React from 'react';

const Navigation = ({
onNextSubmit, page,onPreviousSubmit}) => {


  console.log(page);
return(
  <div>
  <form onSubmit={(e)=> {
  e.preventDefault();
  onNextSubmit(page+1);
  console.log(e.target.value);
  }}
  >
    <button type="submit">Next</button>
    </form>

<form onSubmit={(e)=> {
  e.preventDefault();
  onPreviousSubmit(page-1);
  console.log(e.target.value);
  }}
  >
    <button type="submit">Previous</button>
    </form>
    </div>
  );
}



export default Navigation;
