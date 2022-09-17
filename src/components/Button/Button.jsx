import React, { useState } from "react";
import "./button.css";

function Button({ children }) {
  let [color, setColor] = useState("blue");

  function handleClick() {
    setColor("lightblue");
  }

  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="btn"
    >
      {children}
    </button>
  );
}

export default Button;