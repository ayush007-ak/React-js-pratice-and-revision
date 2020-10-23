//CONDITIONAL RENDERING TERNARY OPERATOR IN  REACT

// CONDITION ? EXPRIFTRUE : EXPRIFFALSE
//                                   if true    if false
// EX = {favSeries === "netflix" ? <Netflix/> : <Amazon/>}




































// const myarr = ['ayush', 'khas', 'kalam']

// console.log(myarr[0])
// console.log(myarr[1])
// console.log(myarr[2])




// const newarr = myarr.map(function(cvalues , i){   //As a loop access kr skte ha array ko map method use krke
//   return cvalues + ' : '+ i;  //currentvalue , i=index
// })
// console.log(newarr)



// <p id='showdata'></p>//to show in html

// //EXAMPLE-
// const StudentData = [
//   {
//     id: 1,
//     name: 'ayush',
//     lastname: 'khaskalam'

//   },
//   {
//     id:2,
//     name: 'Trisha',
//     lastname:'sur'
//   },
//   {
//     id:3,
//     name:'aditi',
//     lastname: 'khaskalam'
//   },
// ];


// const maparr = StudentData.map( (cvalue) => {
  
// return `my name is ${cvalue.name}. my last name is ${cvalue.lastname}`
// } )

// console.log(maparr)
// document.getElementById('showdata').innerHTML=maparr;
 










 
// import React from 'react'
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// function Card(props){
//   //console.log(props)
//   return(
//     <div className="cards">
//     <div className="card">
//    <img src={props.imgsrc} alt='my pic' className='card_img'/>
//    <div className='card_info'>
//    <span className='card_category'> A Netflix Original Series </span>
//    <h3 className='card_title'> {props.sname}</h3>
//    <a href={props.link} target='_blank'>
//      <button>watch now</button>
//    </a>
//    </div>
//     </div>
//    </div>
//   )
// }


// ReactDOM.render(<>

// <Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
//   title="A Netflix Original Series"
//   sname='Stranger'
//   link='https://www.imdb.com/title/tt4574334/'
// />


// <Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
//   title="A Netflix Original Series"
//   sname='Stranger'
//   link='https://www.imdb.com/title/tt4574334/'
// />


// <Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
//   title="A Netflix Original Series"
//   sname='Stranger'
//   link='https://www.imdb.com/title/tt4574334/'
// />
// </>,
//   document.getElementById('root')
// )