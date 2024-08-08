import logo from "./logo.svg";
import "./App.css";
import { AddMinus } from "./components/addMinus";

import { useState, useEffect } from "react";
import ButtonQuantity from "./components/buttonQuantity";

function App() {
  const [sayi, setCount] = useState(0);
  const Up = () => {
    setCount((up) => up + 1);
  };
  const Down = () => {
    setCount((down) => down - 1);
  };

  return (
    <>
      <h1>
        <div> Sayı: {sayi}</div>
      </h1>
      <body>
<div class= "general">
      <ButtonQuantity onClick={Down} innerText={"-"} className="left-btn" />
      <text class="text"> {sayi} </text>
      <ButtonQuantity onClick={Up} innerText={"+"} className="right-btn"/>
      
      </div>
      </body>
    </>
  );
}

export default App;
