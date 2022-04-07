import React, { useEffect, useState } from "react";
import createDFSMaze from "../../../util/createDFSMaze";
import Cell from "../../Cell/Cell";
const DFSMaze = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createDFSMaze(20, 20)
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
          const {x, y, isFinish, isStart, isWall, visited} = singleBlock;
          return <Cell x={x}
                       y={y}
                       isFinish={isFinish}
                       isStart={isStart}
                       isWall={isWall}
					   visited={visited}
                        />;
        })}
      </div>
    );
  });
};

export default DFSMaze;
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
