import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import DirectionsSubwayFilledTwoToneIcon from '@mui/icons-material/DirectionsSubwayFilledTwoTone';


function ThreeApp(props) {

    const [names,setNames]=useState(['우형','성웅','지민','예지','예은']);
    const [irum,setIrum]=useState('');

    const btnInsert=()=>{
        setNames(names.concat(irum));
        setIrum('');
    }

    const txtInput=(e)=>{
        setIrum(e.target.value);
    }

    const txtEnter=(e)=>{
        if(e.key==='Enter'){
            btnInsert();
            e.target.value='';
        }
    }


    const dataRemove=(idx)=>{

        console.log("remove:"+idx);

       // setNames(names.filter((item,i)=>i!==idx));
       setNames([
        ...names.slice(0,idx),
        ...names.slice(idx+1,names.length)
       ]);
    }
    return (
        <div>
             <Alert severity="info"><h4>ThreeApp컴포넌트연습
                &nbsp;<DirectionsSubwayFilledTwoToneIcon/></h4></Alert>
            
            <input value={irum} onChange={txtInput} onKeyUp={txtEnter}
            placeholder='이름입력'/>
            <button onClick={btnInsert}>추가</button>
            <br/>
            <h5>이름삭제</h5>
            <ul>
                {
                    names.map((name,index)=>(
                        <li key={index} onDoubleClick={()=>dataRemove(index)}>{name}</li>
                    ))
                }
                
            </ul>
        </div>
    );
}

export default ThreeApp;