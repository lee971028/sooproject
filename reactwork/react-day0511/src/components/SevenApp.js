import React, { useState } from 'react';
import SevenSubApp from './SevenSubApp';
import SevenSubApp2 from './SevenSubApp2';
import SevenSubApp3 from './SevenSubApp3';

function SevenApp(props) {

    const [number,setNumber]=useState(10);

    const numberIncre=()=>{
        setNumber(number+1);
    }

    const numberDecre=()=>{
        setNumber(number-1);
    }
    return (
        <div>
           <h4>부모 자식 컴포넌트 간의 통신</h4> 
           <SevenSubApp name="예은" age="22"/>
           <SevenSubApp name="보현" age="23"/>
           <SevenSubApp name="환라" age="24"/>
           <br/><br/>
           <SevenSubApp2 flower="장미" price="23000"/>
           <SevenSubApp2 flower="수국" price="53000"/>
           <br/><br/>
           <div>{number}</div>
           <SevenSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    );
}

export default SevenApp;