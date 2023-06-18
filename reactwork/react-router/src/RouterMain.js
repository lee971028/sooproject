import React from 'react';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';





function RouterMain(props) {
    return (
        <div>
            <h1 className='alert alert-info'>React Router공부하기</h1>
           <Menu/>
           <img src='image/1.jpg' className='main_photo'/>
           <hr/>
           <div className='main_comp'>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
           </Routes>
           </div>
        </div>
    );
}

export default RouterMain;