import React from 'react';

function RowItemApp(props) {

    console.dir(props);
    return (
        <tr>
            <td>{props.row.name}</td>
            <td>
                <img src={`../image/${props.row.photo}.JPG`} style={{widows:'50px',height:'50px',
            border:'1px solid gray'}}/>
            </td>
            <td>{props.row.blood}형</td>
            <td>{props.row.today.toLocaleDateString('ko-kr')}</td>
            <td>
                <button type='button' className='btn btn-danger'>삭제</button>
            </td>
        </tr>
    );
}

export default RowItemApp;