import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Ayush';
const img1 = "https://picsum.photos/id/1/367/269"
const img2 = "https://picsum.photos/id/2/368/268"
const img3 = "https://picsum.photos/id/3/369/265"
ReactDOM.render(
  <>
    <h1 className="heading">My  name is {name}</h1>
    
    <div className="img">
    <img src="https://picsum.photos/id/10/367/267" alt="img" />
    <img src={img1}/>
    <img src={img2}/>
    <img src={img3}/>
    </div>
  </>
  , document.getElementById('root')

)