import React, { useEffect, useState, useRef } from "react";
import { Button, ButtonGroup,} from "reactstrap";
//components
import GenerateMazeDropdown from "../Panel/GenerateMazeDropdown";
import PathfindingAlgorithmDropdown from "../Panel/PathfindingAlgorithmDropdown";
import Cell from "../Cell/Cell";
import Dropdown from "../Panel/Dropdown";
//utils
import createBoard from "../../util/createBoard";
import mazeDFS from "../../util/mazeDFS";
import pathfinderBFS from "../../util/pathfinderBFS";
//styles
import "./Board.css";

//constants
const WIDTH = 11;
const HEIGHT = 11;

const Board = () => {
  const speedOptions=["Slow", "Medium", "Fast"]
  const [dropdownSpeedHeader, setdropdownSpeedHeader] = useState("Speed: Fast");
  const [speed, setSpeed] = useState(10)
  const [grid, setGrid] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const timeoutID = useRef(null);

  useEffect(()=>{
    freshBoard();
    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
    };
  }, [])

  function freshBoard() {
		const newBoard = createBoard(HEIGHT, WIDTH);
		setGrid(newBoard);
	}

  function visualizeBreadthFirstSearchPathfinder(){

    //check if maze was generated, return if it was not
    if(!getStartNode(grid) && !getFinishNode(grid)) {
      showMessage("First, generate maze...");
      return;
    }
    if(!isVisualizing){
      setIsVisualizing(true);
      //clear visited cells
      const newGrid = grid.slice();
      for (const row of newGrid) {
        for (const cell of row) {
          if(cell.visited || cell.isWallToDestroy){
            cell.visited = false;
            document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell";          
          }
        }
      }

      //apply bfs pathfinder
      let visitedCellsInOrder = pathfinderBFS(newGrid, getStartNode(newGrid), getFinishNode(newGrid))
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinishNode(newGrid))

      setGrid(newGrid)

      //animate visited cells
      for(let i=0; i<visitedCellsInOrder.length; i++){
				let cell = visitedCellsInOrder[i]

        //after all visited cells been visualized, visualize shortest path
        if (i===visitedCellsInOrder.length-1) {
          timeoutID.current = setTimeout(() => {
            visualizeShortestPath(shortestPathCells);
            setIsVisualizing(false);
          }, speed * i);
        } 
				timeoutID.current = setTimeout(() => {
					if(!cell.isStart && !cell.isFinish) document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell visited'
				}, speed * i)
			}
    }
  }

  function visualizeShortestPath(shortestPathCells){
    for(let i=1; i<shortestPathCells.length-1; i++){
      let cell = shortestPathCells[i]
      timeoutID.current = setTimeout(() => {
        document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell shortestPath'
      }, speed * i)
    }
  }
  
  function getStartNode(grid){
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j].isStart) return grid[i][j]

      }
    }
    return null;
  }

  function getFinishNode(grid){
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j].isFinish) return grid[i][j]

      }
    }
    return null;
  }

  // backtracks from the finishNode to find the shortest path
  // only works when called *after* the algorithm function is executed
  function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }


  function visualizeDepthFirstSearchMaze(){
		if(!isVisualizing){
      showMessage("Maze Generation Algorithm : Depth-First-Search")
			setIsVisualizing(true)

      //setting up board and applying dfs maze generation algorithm
      clearGrid()
      const newBoard = mazeDFS.createInitialBoardForDFS((HEIGHT-1)/2, (WIDTH-1)/2)
			let visitedCellsInOrder =mazeDFS.getVisitedCellsFromDFS(newBoard)
      for(let i=0;i<newBoard.length;i++){
        for(let j=0;j<newBoard[0].length;j++){
            if(newBoard[i][j].isBaseWall) document.getElementById(`cell-${i}-${j}`).className = "cell isBaseWall"
            if(newBoard[i][j].isStart) document.getElementById(`cell-${i}-${j}`).className = "cell isStart"
            if(newBoard[i][j].isFinish) document.getElementById(`cell-${i}-${j}`).className = "cell isFinish"
            if(newBoard[i][j].isBaseWall && newBoard[i][j].isWallToDestroy) newBoard[i][j].isBaseWall = false;
            if(newBoard[i][j].isBaseWall && !newBoard[i][j].isWallToDestroy) newBoard[i][j].isBaseWall = true;
            
        }
      }
			setGrid(newBoard)

      //animation is here
			for(let i=0; i<visitedCellsInOrder.length; i++){
				let cell = visitedCellsInOrder[i]
        if (visitedCellsInOrder[i] === "end") {
          timeoutID.current = setTimeout(() => {
            setIsVisualizing(false)
          }, speed * i);
        } 
				timeoutID.current = setTimeout(()=>{
					if(cell.visited || cell.isWallToDestroy ) document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell visited'
				}, speed * i)
			}
		}
	}

  function clearGrid(){
    if(!isVisualizing){
      const newGrid = grid.slice();
      for (const row of newGrid) {
        for (const cell of row) {
          cell.isStart = false;
          cell.isFinish = false;
          cell.isBaseWall = false;
          cell.visited = false;
          cell.isWallToDestroy = false;
          document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell";
        }
      }
    }
  }

  function showMessage(message){
    document.getElementById("board-message").innerHTML = message
  }

  function handleSpeed(dropdownInfo){
		setdropdownSpeedHeader(`Speed: ${dropdownInfo.option}`);
		if(dropdownInfo.option === "Slow") setSpeed(1000) 
		if(dropdownInfo.option === "Medium") setSpeed(50)
		if(dropdownInfo.option === "Fast") setSpeed(10)

  }

  if (!grid) {
    return <div>Loading</div>;
  }
  return( 
        <div className="board">
          <ButtonGroup>
            <GenerateMazeDropdown handleDFSMaze={visualizeDepthFirstSearchMaze}/>
            <PathfindingAlgorithmDropdown handleBFSPathfinder={visualizeBreadthFirstSearchPathfinder} />
            <Dropdown header={dropdownSpeedHeader}
                      options={speedOptions}
                      handleDropdown={handleSpeed}/>
            <Button className={isVisualizing?"disabled":""} color="info" onClick={()=>clearGrid()}>Clear Grid</Button>

          </ButtonGroup>
          <h1 id="board-message"> Maze Generator and Pathfinder Tool!</h1>
          {/* <h1>{timeoutID.current}</h1> */}
          {isVisualizing?<h4>Board is being visualized...</h4>:<h4></h4>}
          <div className="grid">
            {grid.map((singleRow) => {
              return (
              <div style={{ display: "flex" }}>
                {singleRow.map((singleBlock) => {
                const {x, y, isFinish, isStart, isBaseWall} = singleBlock;
                return <Cell x={x}
                      y={y}
                      isFinish={isFinish}
                      isStart={isStart}
                      isBaseWall={isBaseWall}
                      //visited={visited}
                        />;
                })}
              </div>);
            })}
          </div>
        </div>);
};

export default Board;