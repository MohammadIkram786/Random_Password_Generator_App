import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [upperCase, setUpperCase]=useState(false);
  let [lowerCase, setLowerCase]=useState(false);
  let [number, setNumber]=useState(false);
  let [symbol, setSymbol]=useState(false);
  let [passwordLength, setPasswordLength]=useState(10)
  let [showPassword, setShowPassword]=useState('');

  function createPassword(){
    let charSet = '';
    let finalPass = '';
    if(upperCase || lowerCase || number || symbol){
      if(upperCase) charSet+=UC
      if(lowerCase) charSet+=LC
      if(number) charSet+=NC
      if(symbol) charSet+=SC
      //console.log(charSet, charSet.length)
      for(let i=0;i<passwordLength;i++){
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length));
      }
      setShowPassword(finalPass)
    }
    else{
      alert("Please be sure to check at least one checkbox!")
    }
  }

  let copyPassword = ()=>{
    navigator.clipboard.writeText(showPassword)
  }
  return (
    <div>
      <div className='passBox'>
        <h3>Password Generator</h3>
        <div className='inputBox'>
          <input type='text' value={showPassword}/>
          <button onClick={copyPassword}>Copy</button>
        </div>

        <div className='passLenght'>
          <label>Password Lenght</label>
          <input type='number' max={20} min={10} value={passwordLength} 
          onChange={(event)=>setPasswordLength(event.target.value)}/>
        </div>

        <div className='passLenght'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
        </div>

        <div className='passLenght'>
          <label>Include Lowercase Letters</label>
          <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
        </div>

        <div className='passLenght'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className='passLenght'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>

        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
