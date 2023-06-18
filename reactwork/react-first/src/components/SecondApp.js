import React, { Component, useState } from 'react';
import img1 from '../image/icon02.png';



class SecondApp extends Component {
    
    constructor(){
        super();
        console.log("생성자호출");
    }
    

    render() {

        const imgStyle={
               border:'5px solid pink',
               borderRadius:'50px',
               width:'130px'
        }

        

        let helloElement=<h1>HelloElement!!!</h1>

        helloElement=<h6>안녕하시오</h6>
        return (
            <div>
                <h1 style={{fontFamily:'Jua',fontSize:'3em'}}>SecondApp입니다</h1>
              <img src={img1} style={imgStyle}></img>
              {helloElement}
              {helloElement}
              {helloElement}
            </div>
        );
    }
}

export default SecondApp;