import React from 'react';
import ReactDOM from 'react-dom';


//we can only use Expression not Statement inside {curly braces}


const name = 'ayush';
ReactDOM.render(
<>
   <h1>My {name}</h1>
  <p> Mu licky {2+4}</p>
  <p> Mu licky {Math.random()}</p>  
  </>
    ,
    document.getElementById('root')

)