import React from 'react';
import ReactDOM from 'react-dom';


const name = 'Ayush';
const img1 = "https://picsum.photos/id/1/367/267"
ReactDOM.render(
  <>
    <h1 contentEditable="true">My  name is {name}</h1>
    <img src="https://picsum.photos/id/10/367/267" alt="img" />
    <img src={img1}/>
  </>
  , document.getElementById('root')

)