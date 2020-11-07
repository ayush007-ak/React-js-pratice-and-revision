import React from 'react'

const About = () => {
    return (
        <div>
            <h1> About PAge is this</h1>
        </div>
    )
}

export default About






























































//Using Pokemon API
//Axios is a package which is used before fetcing API




// import React, { useEffect, useState } from 'react';
// import axios from "axios";


// const ComA = () => {
    
// const [num , setNum] = useState();
// const [name, setName] = useState();
// const [moves , setMove] = useState();

// useEffect(() => {
//    // alert('hi');
//    //asynchronous java script ka use krne ja ra hun ma
//    async function getData(){
//        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//        console.log(res.data.name)
//        setName(res.data.name);
//        setMove(res.data.moves.length);
//    }

//    getData();

// })
//     return (
//         <>
//         <h1> You Choose <span style={{color : "red"}}>  {num} Value  </span></h1>
//         <h1> My Name is  <span style={{color : "red"}}>  {name} </span>  </h1>
//         <h1> You Choose <span  style={{color : "red"}} >  {moves} moves</span>  </h1>
//             <select value={num} onChange={(event) =>{
//                       setNum(event.target.value);
//             }}>
//                 <option value='1'> 1 </option>
//                 <option value='2'> 2 </option>
//                 <option value='3'> 3 </option>
//                 <option value='4'> 4 </option>
//                 <option value='5'> 5 </option>
//             </select>

//         </>
//     );
    
// }

// export default ComA
