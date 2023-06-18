import React from 'react';

function SevenSubApp(props) {

    console.log(props);
    return (
        <div>
            <div>{props.name}님의 나이은 {props.age}세 입니다</div>
        </div>
    );
}

export default SevenSubApp;