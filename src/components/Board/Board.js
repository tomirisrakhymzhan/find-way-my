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
import pathfinderDijkstra from "../../util/pathfinderDijkstra";
import pathfinderAstar from "../../util/pathfinderAstar";
//styles
import "./Board.css";

//constants
const WIDTH = 31; 
const HEIGHT = 21;
const START = {x: 1, y: 0}
const FINISH = {x: (WIDTH-2), y: (HEIGHT-1)}

const Board = () => {
  const speedOptions=["Slow", "Medium", "Fast"]
  const [dropdownSpeedHeader, setdropdownSpeedHeader] = useState("Speed: Fast");
  const [speed, setSpeed] = useState(10)
  const [grid, setGrid] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const timeoutID = useRef(null);

  useEffect(()=>{
    // set an empty board when the component mounts
    freshBoard();
    // clear the timer when the component unmounts
    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
    };
  }, [])

  function freshBoard() {
		const newBoard = createBoard(HEIGHT, WIDTH, START, FINISH);
		setGrid(newBoard);
	}
//-------------------------------------------------Pathfinders related functionality-------------------------------------------------------//
  function visualizeDijkstraPathfinder(){
    if(!isVisualizing){
      showMessage("Pathfinding Algorithm : Dijkstra")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply Dijkstra pathfinder
      let visitedCellsInOrder = pathfinderDijkstra(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //update the grid state
      setGrid(newGrid);
      //visualize the algorithm
      visualize(visitedCellsInOrder, shortestPathCells);

    }
  }

  function visualizeAstarPathfinder(){
    if(!isVisualizing){
      showMessage("Pathfinding Algorithm : A-star")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply a-star pathfinder
      let visitedCellsInOrder = pathfinderAstar(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //update the grid state
      setGrid(newGrid);
      //visualize the algorithm
      visualize(visitedCellsInOrder, shortestPathCells);
    }
  }

  function visualizeBreadthFirstSearchPathfinder(){
    if(!isVisualizing){
      showMessage("Pathfinding Algorithm : Breadth-First-Search");
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply bfs pathfinder
      let visitedCellsInOrder = pathfinderBFS(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //update the grid state
      setGrid(newGrid);
      //visualize the algorithm
      visualize(visitedCellsInOrder, shortestPathCells);
    }
  }

  function prepareGridForAlgorithms(newGrid){
    for (const row of newGrid) {
      for (const cell of row) {
        //clear distance property of a cell
        cell.distance = Infinity;
        // explicitly clear visited cells
        if(cell.visited){
          cell.visited = false;
          document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell";          
        }
        // start and finish cells are marked as visited, which in the above check got colored plain, therefore
        //they need to be explicitly colored back to "isStart" and "isFinish" colors respectively
        if(cell.isStart) document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell isStart";  
        if(cell.isFinish) document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell isFinish"; 
        // if a wall was destroyed in dfs maze generation (i.e. it is both BaseWall and WallToDestroy), then remove the 
        // isBaseWall property
        if(cell.isBaseWall && cell.isWallToDestroy) cell.isBaseWall = false;
      }
    }
  }

  function visualize(visitedCellsInOrder, shortestPathCells){
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
        if(!cell.isStart && !cell.isFinish) document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell visited';
      }, speed * i)
    }
  }

  function visualizeShortestPath(shortestPathCells){
    for(let i=1; i<shortestPathCells.length-1; i++){
      let cell = shortestPathCells[i]
      timeoutID.current = setTimeout(() => {
        document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell shortestPath';
      }, speed * i)
    }
  }

  function getStart(grid){
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j].isStart) return grid[i][j];
      }
    }
    return null;
  }

  function getFinish(grid){
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j].isFinish) return grid[i][j];
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

//-------------------------------------------------Maze related functionality-------------------------------------------------------//

  function visualizeDepthFirstSearchMaze(){
		if(!isVisualizing){
      showMessage("Maze Generation Algorithm : Depth-First-Search");
			setIsVisualizing(true);
      clearGrid();

      // applying dfs maze generation algorithm
      const newGrid = mazeDFS.createInitialBoardForDFS(HEIGHT, WIDTH, START, FINISH);
			let visitedCellsInOrder = mazeDFS.getVisitedCellsFromDFS(newGrid);

      // explicitly color BaseWall cells
      for(let i=0;i<newGrid.length;i++){
        for(let j=0;j<newGrid[0].length;j++){
            if(newGrid[i][j].isBaseWall) document.getElementById(`cell-${i}-${j}`).className = "cell isBaseWall";
        }
      }
      //update the grid state
			setGrid(newGrid);
      //animation of the maze is here
			for(let i=0; i<visitedCellsInOrder.length; i++){
				let cell = visitedCellsInOrder[i];
        if (visitedCellsInOrder[i] === "end") {
          timeoutID.current = setTimeout(() => {
            setIsVisualizing(false);
          }, speed * i);
        } 
				timeoutID.current = setTimeout(()=>{
					if(cell.visited || cell.isWallToDestroy ) document.getElementById(`cell-${cell.y}-${cell.x}`).className = 'cell visited'
				}, speed * i);
			}
		}
	}

  function visualizeRandomMaze() {

  }

//-------------------------------------------------General functionality-------------------------------------------------------//
  function clearGrid(){
    if(!isVisualizing){
      const newGrid = grid.slice();
      for(let i=0;i<newGrid.length;i++){
        for(let j=0;j<newGrid[0].length;j++){
          if(i===START.y && j===START.x)  {
            newGrid[i][j].isStart = true;
            document.getElementById(`cell-${i}-${j}`).className = "cell isStart";
          }
          else if(i===FINISH.y && j===FINISH.x)  {
            newGrid[i][j].isFinish = true;
            document.getElementById(`cell-${i}-${j}`).className = "cell isFinish";
          }
          else{
            newGrid[i][j].isStart = false;
            newGrid[i][j].isFinish = false;
            newGrid[i][j].isBaseWall = false;
            newGrid[i][j].visited = false;
            newGrid[i][j].isWallToDestroy = false;
            newGrid[i][j].previousNode = null;
            newGrid[i][j].distance = Infinity;
            document.getElementById(`cell-${i}-${j}`).className = "cell";
          } 
        }
      }
      setGrid(newGrid);
    }
  }

  function showMessage(message){
    document.getElementById("board-message").innerHTML = message;
  }

  function handleSpeed(dropdownInfo){
		setdropdownSpeedHeader(`Speed: ${dropdownInfo.option}`);
		if(dropdownInfo.option === "Slow") setSpeed(700);
		if(dropdownInfo.option === "Medium") setSpeed(50);
		if(dropdownInfo.option === "Fast") setSpeed(10);
  }

  if (!grid) {
    return <div>Loading</div>;
  }
  return( 
        <div className="board">
          <ButtonGroup>
            <GenerateMazeDropdown handleDFSMaze={visualizeDepthFirstSearchMaze}
                                  handleRandomMaze={visualizeRandomMaze}/>
            <PathfindingAlgorithmDropdown handleBFSPathfinder={visualizeBreadthFirstSearchPathfinder}
                                          handleAstarPathfinder={visualizeAstarPathfinder}
                                          handleDijkstraPathfinder={visualizeDijkstraPathfinder} />
            <Dropdown header={dropdownSpeedHeader}
                      options={speedOptions}
                      handleDropdown={handleSpeed}/>
            <Button className={isVisualizing?"disabled":""} color="info" onClick={()=>clearGrid()}>Clear Grid</Button>
          </ButtonGroup>
          <h1 id="board-message"> Maze Generator and Pathfinder Tool!</h1>
          {isVisualizing?<h4>Board is being visualized...</h4>:<></>}
          <div className="grid">
            {grid.map((singleRow) => {
              return (
              <div className="grid-row">
                {singleRow.map((singleBlock) => {
                const {x, y, isFinish, isStart, isBaseWall} = singleBlock;
                return <Cell  x={x}
                              y={y}
                              isFinish={isFinish}
                              isStart={isStart}
                              isBaseWall={isBaseWall} />;
                })}
              </div>);
            })}
          </div>
        </div>);
};

export default Board;