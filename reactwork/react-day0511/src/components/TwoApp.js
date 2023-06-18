import React from 'react';
import Alert from '@mui/material/Alert';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import img1 from "../image2/acc02.png";
import img2 from "../image2/acc03.png";
import img3 from "../image2/bag01.png";
import img4 from "../image2/bag02.png";
import img5 from "../image2/bag03.png";
import img6 from "../image2/bag04.png";
import  "../App.css";

function TwoApp(props) {

    const imgarr=[img1,img2,img3,img4,img5,img6];
    const imgArr2=[11,12,13,14,15];
    return (
        <div>
            <Alert severity="warning"><h4>TwoApp컴포넌트연습
                &nbsp;<AirplanemodeActiveIcon/></h4></Alert>
            <h4>src배열로 이미지 넣기</h4>
            {
                imgarr.map((myimg)=>(<img src={myimg} style={{width:'100px'}}/>))
            }

            <h4>public배열로 이미지 넣기</h4>
            {
                imgArr2.map((photo)=>(<img src={`../image/${photo}.jpg`}
                className='photo'/>))
            }
        </div>
    );
}

export default TwoApp;