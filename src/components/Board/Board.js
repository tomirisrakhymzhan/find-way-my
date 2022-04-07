import React, { useEffect, useState } from "react";
import createBoard from "../../util/createBoard";
import Cell from "../Cell/Cell";
import "./Board.css";

const Board = () => {
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
          const {x, y, isFinish, isStart, isWall} = singleBlock;
          return <Cell x={x}
                       y={y}
                       isFinish={isFinish}
                       isStart={isStart}
                       isWall={isWall}
                        />;
        })}
      </div>
    );
  });
};

export default Board;