import React from 'react';

function SevenSubApp2({flower,price}) {
    console.log(flower,price);
    return (
        <div>
             <div>{flower}1단의 가격은 {price}운 입니다</div>
        </div>
    );
}

export default SevenSubApp2;