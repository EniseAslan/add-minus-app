import React, { useState } from "react";
import ButtonQuantity from "./buttonQuantity";

export const AddMinus = ({ title }) => {
  const [count, setCount] = useState(0);
  const Up = () => {
    setCount((up) => up + 1);
  };
  const Down = () => {
    setCount((down) => down - 1);
  };

  return (
    <>
      <div>
        <h1>
          {" "}
          {title}:{count}
        </h1>
      </div>

      <div class="card">
        <ButtonQuantity
          onClick={Down}
          innerText={"-"}
          className="left-btn"
          disabled={count === 0}
        />
        <h6 class="text"> {count} </h6>
        <ButtonQuantity onClick={Up} innerText={"+"} className="right-btn" />
      </div>
    </>
  );
};
