import React from 'react';
import ReactDOM from 'react-dom';



const CurrentDate = new Date().toLocaleDateString();

const Time = new Date().toLocaleTimeString()
ReactDOM.render(
  <>
  <h1>
    Hello  my name is ayush
  </h1>
  <p> current date is = {CurrentDate}</p>
  <p>CurrentTime {Time}</p>
  
  </>
  , 
  document.getElementById('root')
)