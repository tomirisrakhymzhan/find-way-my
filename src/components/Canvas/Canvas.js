import React, { useEffect, useState } from "react";
import createBoard from "../../util/createBoard";
import Cell from "../Cell/Cell";
import "./Canvas.css";

const Canvas = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(20, 20);
      console.log(newBoard);
      setGrid(newBoard);
    }
    freshBoard();
  }, []);

  if (!grid) {
    return <div>Loading</div>;
  }

  return grid.map((singleRow) => {
    return (
      <div style={{ display: "flex" }}>
        {singleRow.map((singleBlock) => {
          return <Cell details={singleBlock} />;
        })}
      </div>
    );
  });
};

export default Canvas;
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
