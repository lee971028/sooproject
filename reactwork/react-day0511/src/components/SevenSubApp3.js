import React from 'react';

function SevenSubApp3(props) {
    return (
        <div>
            <button type='button' className='btn btn-info'
            style={{marginLeft:'50px'}}
            onClick={()=>{
                props.decre();
            }}>감소</button>

<button type='button' className='btn btn-info'
            style={{marginLeft:'50px'}}
            onClick={()=>{
                props.incre();
            }}>증가</button>
        </div>
    );
}

export default SevenSubApp3;