import React from "react";
import './Cell.css'

export default function Cell(props) {
  const {
    x,
    y,
    isFinish,
    isStart,
    isWall,
    visited
    
  } = props;
  const className= "cell" + (isStart? " isStart": "") + (isFinish? " isFinish": "") + (isWall? " isWall": "") + (visited? " visited": "")
  return <div className={className}></div>;
}


