import React from 'react';
import ReactDOM from 'react-dom';


// ReactDom.render('kya dekhana ha , kaha dekhana hai, callback function');
ReactDOM.render(

    [
        <h1>Hello world</h1>, //array [] or Div we have both option
        <p> Hey Wassup </p>, //we also use fragment coz its fast <></>
        <h2> Kya baat </h2>
    ],
    document.getElementById('root'));

//pure javascript
// var h1 = document.createElement('h1');
// h1.innerHTML = "Ayush khaskalam";
// document.getElementById('root').appendChild(h1);