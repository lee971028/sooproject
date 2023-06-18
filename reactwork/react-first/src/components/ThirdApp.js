import React, { useState } from 'react';

function ThirdApp(props) {

    const [message,setMessage]=useState('Happy Day!!!');


    const handleEvent=(e)=>{

        if(e.key=='Enter'){
            setMessage('');
            e.target.value='';
        }
    }


    return (
        <div>
            <h1 className='alert alert-info'>ThirdApp입니다</h1>
            <h3 style={{color:'red'}}>{message}</h3>
            <hr></hr>
            <h4>메세지를 입력해주세요</h4>
            <input type='text' style={{width:'300px',fontSize:'2em'
        }} defaultValue={message} onChange={(e)=>{
            console.log(e.target.value);
            setMessage(e.target.value);
        }}
         onKeyDown={handleEvent}
        />
        </div>
    );
}

export default ThirdApp;