import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const Filter = ({
list,onFilterSubmit}) => {


  console.log(list);

  var flags = [], output = [], l = list.length, i;
  for( i=0; i<l; i++) {
      if( flags[list[i].language]) continue;
      flags[list[i].language] = true;
      output.push(list[i].language);
  }
console.log(output);

return(
  <div>
  <Dropdown text='File'>
<Dropdown.Menu>

    {output.map((results) => {
        return (
       

<Dropdown.Item text={results} onClick={(e)=> {
            e.preventDefault();
            onFilterSubmit(results);
            console.log(results);
            }}/>

          
        );
      })}
      </Dropdown.Menu>
</Dropdown>




  
 



    </div>
  );
}



export default Filter;
