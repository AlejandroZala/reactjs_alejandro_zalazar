import React, { useState } from "react";
import "./button.css";

function Button({ children }) {
  const [color, setColor] = useState("rgb(108, 204, 79)");

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