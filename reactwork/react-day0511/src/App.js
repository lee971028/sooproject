import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';
import NineApp from './components/NineApp';
import TenApp from './components/TenApp';
import SixApp from './components/SixApp';

function App() {

  const [idx,setIdx]=useState(1);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  }


  return (
    <div>
      <label>
          <input type='radio' name='comp' defaultValue='1'
          onClick={selectComponent} defaultChecked/>OneApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='2'
          onClick={selectComponent} />TwoApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='3'
          onClick={selectComponent}/>ThreeApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='4'
          onClick={selectComponent}/>FourApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='5'
          onClick={selectComponent}/>FiveApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='6'
          onClick={selectComponent}/>SixApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='7'
          onClick={selectComponent}/>SevenApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='8'
          onClick={selectComponent}/>EightApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='9'
          onClick={selectComponent}/>NineApp
      </label>
      &nbsp;
      <label>
          <input type='radio' name='comp' defaultValue='10'
          onClick={selectComponent}/>TenApp
      </label>
      &nbsp;
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:
      idx===5?<FiveApp/>:idx===6?<SixApp/>:idx===7?<SevenApp/>:idx===8?<EightApp/>:
      idx===9?<NineApp/>:<TenApp/>}
    </div>
  );
}

export default App;
