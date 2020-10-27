import React, { useState } from 'react'

//{Function} or ase bhi kr skte ha onclick ke andar "MyFunction()"

const App = () => {

    const purple = "#8e44ad"

    const [recent , setChange] = useState(purple)
     const [name,setName] = useState('click me')     



    const bgChange = () => {
        // console.log('clcik')
        let bgcolor = "#34495e";
        setChange(bgcolor)
        setName("ouch")
       
        
    }

    const bgBack = () => {
        setChange(purple)
        setName('Back to 😁')
    }
    return (
        <div style = {{backgroundColor : recent}}>
            <button onClick = {bgChange} onDoubleClick={bgBack}>{name}</button>
        </div>
    )
}

export default App




























// import React, { useState } from 'react'
// let time =new Date().toLocaleTimeString();

// const App = () => {
//     const Increase = () =>{
//         time =new Date().toLocaleTimeString();
//         setCtime(time)
//     }

//     setInterval(Increase , 1000)

//     const [ctime,setCtime] = useState(time)
//     return (
//         <div>

//             <h1>{ctime}</h1>
//             <button  onClick={Increase}>Update time second</button>
//         </div>
//     )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {


//     let newTime = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(newTime)



//     const UpdateTime = () => {
//         // console.log('or bhai')
//        let newmyTime = new Date().toLocaleTimeString();
//        setCtime(newmyTime)
//     }
//     return (
//         <div>
//             <h1> {ctime} </h1>
//             <button onClick={UpdateTime}>Get Time</button>
//         </div>
//     )
// }

// export default App

























































// const App = () => {

// const state = useState();
// const [count , setCount] = useState(0);  //usestate is an array which return with two items [stateobject ,updated function] or [current dataq , updated data]
// //console.log(state);

// //let count = 1;  //yeh ek state ha jo direct change ni hogs isliye hum hooks use karinge we can change state of anything using  hooks 

// const IncNum =  () =>{
//     setCount(count+1);

// //console.log('clicked'+count++)
// };
//     return (
//         <div>
//            <h1> {count} </h1>
//            <button onClick={IncNum}>Click me</button> 
//         </div>
//     );
// };

// export default App




// import React from 'react'


// const SlotM = (props) => {
//     // let x ='smile';
//     // let y = 'smile';
//     // let z = 'semta';


//     //let {x , y, z} = props;  //Object Destructuring props ma hume object mil rha ha
//     let x =props.x;   
//     let y= props.y;
//     let z = props.z;
//     if ( (x === y) && (y === z) ) {   //&& means both should be true
//         return (
//         <>
//             <div className='slot_inner'>
//                  <h1> {x} {y} {z}</h1>

//                  <h1> This is Matching </h1>
//                  <hr/>
//             </div>


//          </>
//         );
//     }else{

//         return (
//             <>
//                 <div className='slot_inner'>
//                      <h1> {x} {y} {z}</h1>

//                      <h1> This is Not Matching </h1>
//                      <hr/>
//                 </div>


//              </>
//             );

//     }
// };

// const App = () => {
//     return (
//         <div>
//              <h1 className="heading_style"> :slot machine Welcome to <span style={{ fontWeight: "bold"}}>Slot Game</span>:Slot</h1>

//              <SlotM x="smile" y='smile' z ='senta' /> now we create props and pass it
//              <SlotM x='smile' y='smile' z='smile'/>
//              <SlotM x='smile' y='senta' z='cry'/>
//          </div>
//     )
// }

// export default App


// const myprogrmas = ['java','python','c++','c#','js'] //ES6 Array Destructuring
// //  let [top1,top2,top3,top4,top5] = myprogrmas
// // console.log(top1,top2,top3,top4,top5)
// let [top1,,,,toplast] = myprogrmas;
// console.log("my fav programming language is"+ toplast)