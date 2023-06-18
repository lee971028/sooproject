import React, { useState } from 'react';
import '../App.css';
import RowItemApp from './RowItemApp';
import Writeform from './Writeform';


function EightApp(props) {

    const [board,setBoard]=useState([

        {
            name:'재승',
            photo:'s2',
            blood:'AB',
            today:new Date()
        },
        {
            name:'은지',
            photo:'s3',
            blood:'A',
            today:new Date()
        },
        {
            name:'민지',
            photo:'s4',
            blood:'B',
            today:new Date()
        }

    ]);

    const dataSave=(data)=>{
        setBoard(board.concat({
            // name:data.name,
            // photo:data.photo,
            // blood:data.blood,
            ...data,
            today:new Date()
        }))
    }
   
    return (
        <div>
           <h4>부모자식간 테이블 작성</h4> 


            <Writeform  onSave={dataSave}/>
            
           <table className='table table-bordered' style={{width:'700px',marginLeft:'100px'}}>
                <caption><b>Board배열출력</b></caption>
                  <thead>
                    <tr style={{backgroundColor:'orange'}}>
                        <th width='100'>이름</th>
                        <th width='110'>사진</th>
                        <th width='80'>혈액형</th>
                        <th width='180'>날짜</th>
                        <th width='100'>식제</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                        board.map((row,index)=>(<RowItemApp row={row} key={index}/>))
                    }
                  </tbody>
           </table>
        </div>
    );
}

export default EightApp;