import React, { useState } from 'react';
import "../App.css"

function OneApp(props) {

    const [number,setNumber]=useState(0);

   const numberIncre=()=>{
    if(number===10){
        alert("10까지만 증가");
        return;
    }

    setNumber(number+1);
   }

   const numberDecre=()=>{
    if(number===0){
        alert("0까지만 감소");
        return;
    }

    setNumber(number-1);
   }


    return (
        <div >
            <h1 className='alert alert-info'>OneApp</h1>
            <div className='number'>{number}</div>
            <button type='button' className='btn btn-info'
            onClick={numberIncre} style={{marginLeft:'50px'}}>증가</button>&nbsp;

<button type='button' className='btn btn-info'
            onClick={numberDecre} style={{marginLeft:'20px'}}>감소</button>
        </div>
    );
}

export default OneApp;