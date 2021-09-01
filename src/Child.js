import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  const newColor = getRandomColor();
  
  return (
  <div 
  onClick={() => onChangeColor(newColor) }
  className="child"
   style={{ backgroundColor: color }}>
  </div> 
  )
}

export default Child;
