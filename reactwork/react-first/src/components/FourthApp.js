import React, { useState } from 'react';

function FourthApp(props) {

   const [name,setName]=useState('김재승');
   const [age,setAge]=useState(20);

    return (
        <div>
            <h1 className='alert alert-danger'>FourthApp입니다
               <img src='../a.png' className='img-circle'
               style={{width:'100px'}}/>
            </h1>
           
           <b style={{fontSize:'30px',fontFamily:'Jua'}}>
        이름:{name} <br/>
        나이:{age}</b>

        <br/><br/>
       <button type='button' className='btn btn-info'
       style={{marginLeft:'50px'}}
       onClick={()=>{
        setName("강호동");
        setAge(33);
       }}>값변경</button>


<button type='button' className='btn btn-info'
       style={{marginLeft:'50px'}}
       onClick={()=>{
        setName("");
        setAge();
       }}>초기화</button>
        </div>
    );
}


export default FourthApp;