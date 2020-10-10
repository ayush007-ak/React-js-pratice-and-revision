import React from 'react';
import ReactDOM from 'react-dom';


//we can only use Expression not Statement inside {curly braces}


const fname = 'ayush';
const lname  = 'khaskalam';

//console.log(`This is template litrals ${fname}`)

ReactDOM.render(
<>
   <h1> {`My name is ${fname } ${lname}`}</h1>
  <p> Mu licky {2+4}</p>
  <p> Mu licky {Math.random()}</p>  
  </>
    ,
    document.getElementById('root')

)