import React from "react";
import './Cell.css'

export default function Cell(props) {
  const {
    x,
    y,
    isFinish,
    isStart,
    isBaseWall,
    onMouseDown, 
    onMouseEnter, 
    onMouseUp, 
    onMouseLeave    
  } = props;
  const className= "cell" + (isStart? " isStart": "") + (isFinish? " isFinish": "") + (isBaseWall? " isBaseWall": "") //+ (visited? " visited": "")
  return <div id={`cell-${y}-${x}`} 
              className={className}
              onMouseDown={() => onMouseDown(y, x)}
              onMouseEnter={() => onMouseEnter(y, x)}
              onMouseUp={() => onMouseUp(y, x)}
              onMouseLeave={() => onMouseLeave(y, x)}></div>;
}


