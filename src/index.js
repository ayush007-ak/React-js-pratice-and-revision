import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


let CurDate = new Date();
CurDate = CurDate.getHours(2020, 10, 10, 20);

let Greeting = '';
const cssStyle = {};

if (CurDate >= 1 && CurDate < 12) {
  Greeting = 'Good Morning';
  cssStyle.color = "red";
} else if (CurDate >= 12 && CurDate < 19) {
  Greeting = 'Good Afternoon';
  cssStyle.color = "blue";
} else {
  Greeting = 'Goodnight';
  cssStyle.color = "yellow";
}

ReactDOM.render(
  <>
  <div>
<h1>Hello sir 
 <span style={cssStyle}>  {Greeting} </span>
 </h1>
 </div>
 </>, 
 document.getElementById('root'))