import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

function Card(props){
  //console.log(props)
  return(
    <div className="cards">
    <div className="card">
   <img src={props.imgsrc} alt='my pic' className='card_img'/>
   <div className='card_info'>
   <span className='card_category'> A Netflix Original Series </span>
   <h3 className='card_title'> {props.sname}</h3>
   <a href={props.link} target='_blank'>
     <button>watch now</button>
   </a>
   </div>
    </div>
   </div>
  )
}


ReactDOM.render(<>

<Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
  title="A Netflix Original Series"
  sname='Stranger'
  link='https://www.imdb.com/title/tt4574334/'
/>


<Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
  title="A Netflix Original Series"
  sname='Stranger'
  link='https://www.imdb.com/title/tt4574334/'
/>


<Card  imgsrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg'
  title="A Netflix Original Series"
  sname='Stranger'
  link='https://www.imdb.com/title/tt4574334/'
/>
</>,
  document.getElementById('root')
)