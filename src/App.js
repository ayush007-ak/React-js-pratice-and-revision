import React, { createContext } from 'react';

import ComA from './ComA';
// import ComB from './ComB';


const FirstName = createContext();

//CONTEXT API - React context API allows you to easily access data at different levels of the component tree without passing prop to every level.
//3 steps
//1 createContext() . 2. provider . 3. consumer

//HUME PROPS NI PASS KRNA PADTA CONTEXT API MA

const App = () => {
   
    return (
        <>

        <FirstName.Provider value={"vinod"}>  
        <ComA/>    
     </FirstName.Provider>
     </>

    );
}

export default App;
export {FirstName};




















































// import React, { useState } from 'react';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddIcon from '@material-ui/icons/Add';


// const App = () => {

//     const [num ,setNum] = useState(0);

//     const incNum = () =>{
//         setNum(num+1)  //num = num+1
//     }

//     const dicNum =() =>{

//         if(num > 0){
//        setNum(num-1);
//     }else{
//         setNum(0);
//     }
//     }
//     return (
//         <div className='main_div'>
//             <div className='center_div'>

//                 <h1> {num} </h1>   

//                 <div className='btn_div'>
//                     <button onClick={incNum}> <AddIcon/> </button>
//                     <button onClick={dicNum}>  <AddIcon/> </button>
//                 </div>

//             </div>


//         </div>
//     )
// }

// export default App




















// import React, { useState } from 'react'

// const App = () => {

//     const [fullName, setfullName] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         number: '',
//     }); //useState ke andar hum object or function bhi pass kr skte ha

//     const inputEvent = (event) => {
//         // console.log(event.target.value)
//         // console.log(event.target.name)



//         const {name, value} = event.target;//Destructuring
//         // const value = event.target.value;
//         // const name = event.target.name;

//         setfullName( (preValue) => {
//             console.log(preValue)
//             if(name === 'firstname'){
//                 return {
//                     firstname: value,
//                     lastname: preValue.lastname,
//                     email:preValue.email,
//                     number:preValue.number,
//                 }

//             }else if(name === "lastname"){
//                 return{
//                     firstname: preValue.firstname,
//                     lastname: value,
//                     email: preValue.email,
//                     number: preValue.number,
//                 }
//             }
//             else if(name === "email"){
//                 return{
//                     firstname: preValue.firstname,
//                     lastname: preValue.lastname,
//                     email: value,
//                     number:preValue.number,
//                 }
//             }
//             else if(name === "number"){
//                 return{
//                     firstname: preValue.firstname,
//                     lastname: preValue.lastname,
//                     email: preValue.email,
//                     number: value,
//                 }
//             }
//         })
//         //setName(event.target.value)
//     }

//     const onSubmit = (event) => {
//         event.preventDefault(); //har event ka ek object hota ha (e) or event.preventdefault bina refresh kr value leta ha mt kro refresh mtb
//         // setFullName(name);
//         // setnewLast(lastName )
//         alert('form submitted')
//     }


//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>Hello {fullName.firstname} {fullName.lastname} </h1>
//                         <input type='text' placeholder='Enter your firstname' name='firstname' onChange={inputEvent} value={fullName.firstname} /><br/>
//                         <input type='text' placeholder='Enter your lastname' name='lastname' onChange={inputEvent} value={fullName.lastname} />
//                         <input type='text' placeholder='Enter your email' name='email' onChange={inputEvent} value={fullName.email} />
//                         <input type='text' placeholder='Enter your number' name='number' onChange={inputEvent} value={fullName.number} />
//                         <button type='submit' >Submit </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// //IN REact WE have to types of component Controlled and Uncontrolled
// export default App








// import React, { useState } from 'react'

// //{Function} or ase bhi kr skte ha onclick ke andar "MyFunction()"

// const App = () => {

//     const purple = "#8e44ad"

//     const [recent , setChange] = useState(purple)
//      const [name,setName] = useState('click me')     



//     const bgChange = () => {
//         // console.log('clcik')
//         let bgcolor = "#34495e";
//         setChange(bgcolor)
//         setName("ouch")


//     }

//     const bgBack = () => {
//         setChange(purple)
//         setName('Back to 😁 ')
//     }
//     return (
//         <div style = {{backgroundColor : recent}}>
//             <button onClick = {bgChange} onDoubleClick={bgBack}>{name}</button>
//         </div>
//     )
// }

// export default App





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