import React, { useEffect, useState } from "react";
import createBoard from "../../util/createBoard";
import "./Canvas.css";

const Canvas = () =>{
  const [grid, setGrid] = useState([]);

  useEffect(()=>{
    function freshBoard(){
      const newBoard = createBoard(5, 5);
      console.log(newBoard);
    }
    freshBoard();
  })



    return <h1>Canvas</h1>;
            
    };

export default Canvas;
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258