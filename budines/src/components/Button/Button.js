import React, { useState } from "react";
import "./button.css";

function Button({ children }) {
  let [color, setColor] = useState("purple");

  function handleClick() {
    setColor("yellow");
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
