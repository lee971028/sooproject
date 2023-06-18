import React from 'react';
import Alert from '@mui/material/Alert';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function OneApp(props) {

    const names=['우형','성웅','재석','희준','우진'];
    const nameList=names.map((name)=>(<li>{name}</li>));
    const colors=['red','pink','cyan','gray','tomato'];
    return (
        <div>
            <Alert severity="error"><h4>OneApp컴포넌트연습&nbsp; <AddAPhotoIcon/></h4>
            
            </Alert>
            <div>
                <h3>map반복문 연습</h3>
                 <ol>{nameList}</ol>
                    <hr/>
                    <ul>
                        {
                            names.map((name,idx)=>(<b
                            style={{marginLeft:'50px'}}>{idx}:{name}<br/></b>))
                        }
                    </ul>
                    <hr/>
                    {

                        colors.map((col)=>(<div className='box' style={{backgroundColor:col}}></div>))
                    }
                 
            </div>
        </div>
    );
}

export default OneApp;