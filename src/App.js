import logo from './logo.svg';
import './App.css';
import { AddMinus } from './components/addMinus';
import {buttonQuantity} from './components/buttonQuantity';
import { useState,useEffect } from 'react'

function App() {

  const [sayi,setCount] = useState(0)
const myFunction=()=>{setCount((up) => up + 1)}
  return (
    <>
    <h1><div > Sayı: {sayi}</div></h1>
    <div className="App">
     <AddMinus/>
  <buttonQuantity/>
     <button >-</button>
     <text>   </text>
     <button onClick={myFunction}>+</button>
    </div>
   </>
  )
} 

export default App;
