import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {add , Sub , Multi , Divide} from './Calc';

ReactDOM.render(
  <>
 <ul>
   <li>{add(40 , 4)}</li>
   <li>{Sub(40 , 4)}</li>
   <li>{Multi(40 , 4)}</li>
   <li>{Divide(40 , 4)}</li>
 </ul>
  </>,
  document.getElementById('root')
)