import React from 'react'


const SlotM = (props) => {
    // let x ='smile';
    // let y = 'smile';
    // let z = 'semta';


    //let {x , y, z} = props;  //Object Destructuring props ma hume object mil rha ha
    let x =props.x;   
    let y= props.y;
    let z = props.z;
    if ( (x === y) && (y === z) ) {   //&& means both should be true
        return (
        <>
            <div className='slot_inner'>
                 <h1> {x} {y} {z}</h1>

                 <h1> This is Matching </h1>
                 <hr/>
            </div>
         
         
         </>
        );
    }else{

        return (
            <>
                <div className='slot_inner'>
                     <h1> {x} {y} {z}</h1>
    
                     <h1> This is Not Matching </h1>
                     <hr/>
                </div>
             
             
             </>
            );

    }
};

const App = () => {
    return (
        <div>
             <h1 className="heading_style"> :slot machine Welcome to <span style={{ fontWeight: "bold"}}>Slot Game</span>:Slot</h1>
            
             <SlotM x="smile" y='smile' z ='senta' /> now we create props and pass it
             <SlotM x='smile' y='smile' z='smile'/>
             <SlotM x='smile' y='senta' z='cry'/>
         </div>
    )
}

export default App
