import React , {useContext} from 'react'
import ComC from './ComC';
import {FirstName} from './App';


const ComB = () => {   //ek hi default export rehti ha ek se zda ho to hume {} as a object leke chalna rehta ha

const fname = useContext(FirstName);



    return (
        
     <h1> MY name is {fname} </h1>
     
    );
};

export default ComB;
