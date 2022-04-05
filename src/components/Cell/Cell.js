import React from "react";
import './Cell.css'

export default function Cell(props) {
  const {
    x,
    y,
    isFinish,
    isStart,
    isWall,
    
  } = props;
  const className= "cell" + (isStart? " isStart": "") + (isFinish? " isFinish": "") + (isWall? " isWall": "")
  return <div className={className}></div>;
}


