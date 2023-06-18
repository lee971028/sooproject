import React, { useState } from 'react';
import '../MyStyle.css';
import img01 from '../a02.png';
import img02 from '../image/icon02.png';


function FirstApp(props) {

   const styleImag1={
        width:'200px',
        border:'5px inset gray',
        marginLeft:'100px',
        marginTop:'20px'
   }

  
    return (
        <div className='alert alert-danger'>
            <h1 style={{
                fontFamily:'Nanum Pen Script'
                


            }}>리액트 첫번째예제</h1>
            <div style={{fontSize:'25px',color:'green',marginLeft:'100px',
        fontFamily:'Nanum Pen Script'}}>
                안녕 반갑다!!!
            </div>

            <img src={img01} style={styleImag1}></img>
            <img src={img02} style={{width:'200px',border:'3px solid green',
        borderRadius:'50px',marginLeft:'20px'}}></img>

          <h3>public영역의 이미지는 직접호출가능</h3>
           <img src='../a.png'></img>
        </div>
        
        
        
    );

    
}



export default FirstApp;

