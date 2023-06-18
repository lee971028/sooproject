import React, { useState } from 'react';

function SixApp(props) {

    const [inputs,setInputs]=useState({

        name:'강호동',
        addr:'경기도 수원시',
        age:22
    });


    const changeData=(e)=>{
        console.log("name: "+e.target.value);
        console.log("value: "+e.target.value);

        const {name,value}=e.target;

        setInputs({
            ...inputs,
            [name]:value
        })
    }
    return (
        <div>
            <h4 className='alert alert-info'>6_state를 객체로</h4>
            <h3>이름: <input type='text' name='name'
            defaultValue={inputs.name}
            onChange={changeData}/></h3>


<h3>주소: <input type='text' name='addr'
            defaultValue={inputs.addr}
            onChange={changeData}/></h3>

<h3>나이: <input type='text' name='age'
            defaultValue={inputs.age}
            onChange={changeData}/></h3>



            <hr/>
            <h2>이름: {inputs.name},{inputs['name']}</h2>
            <h2>조수: {inputs.addr},{inputs['addr']}</h2>
            <h2>나이: {inputs.age},{inputs['age']}</h2>
        </div>
    );
}

export default SixApp;