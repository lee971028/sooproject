import React, { useState } from 'react';
import '../App.css';
function Writeform({onSave}) {

    const [name,setName]=useState('');
    const [photo,setPhoto]=useState('s1');
    const [blood,setBlood]=useState('A');


    const addDataEvent=()=>{
        onSave({name,photo,blood})
    }


    return (
        <div>
            <b>이름: </b>
            <input type='text' style={{width:'100px'}} 
            onChange={(e)=>{
                setName(e.target.value);
            }}/>

<b style={{marginLeft:'10px'}}>혈액형: </b>
            <select onChange={(e)=>{
                setBlood(e.target.value);
            }}>
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
            </select>

            <b style={{marginLeft:'10px'}}>이미지: </b>
            <select onChange={(e)=>{
                setPhoto(e.target.value);
            }}>
                {
                    [...new Array(10)].map((a,idx)=>(<option>{`s${idx+1}`}</option>))
                }
            </select>

            <button type='button' className='btn btn-info'
            style={{marginLeft:'10px'}}
            onClick={addDataEvent}>추가</button>
        </div>
    );
}

export default Writeform;