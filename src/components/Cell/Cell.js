import React from "react";
import './Cell.css'

export default function Cell(props) {
  const {
    x,
    y,
    isFinish,
    isStart,
    isBaseWall,
    //visited,
    
  } = props;
  const className= "cell" + (isStart? " isStart": "") + (isFinish? " isFinish": "") + (isBaseWall? " isBaseWall": "") //+ (visited? " visited": "")
  return <div id={`cell-${y}-${x}`} className={className}></div>;
}


