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
import pathfinderDFS from "../../util/pathfinderDFS";
//styles
import "./Board.css";

//constants
const WIDTH = 31; 
const HEIGHT = 21;
const START = {x: 1, y: 0}
const FINISH = {x: (WIDTH-2), y: (HEIGHT-1)}

const Board = () => {
  const speedOptions=["Slow", "Medium", "Fast", "Extra-Fast"]
  const [dropdownSpeedHeader, setdropdownSpeedHeader] = useState("Speed: Extra-Fast");
  const [message, setMessage] = useState("Maze Generator and Pathfinder Tool!");
  const [extraMessage, setExtraMessage] = useState('');
  const [boardVisualizationMessage, setBoardVisualizationMessage] = useState('');
  const [speed, setSpeed] = useState(5)
  const [grid, setGrid] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [mainIsPressed, setMainIsPressed] = useState("");
  const [start, setStart] = useState([START.y, START.x]);
  const [finish, setFinish] = useState([FINISH.y, FINISH.x]);
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

  useEffect(()=>{
    //when isVisualizing state is changed, change extra message accordingly
    isVisualizing?setBoardVisualizationMessage("Board is being visualized..."):setBoardVisualizationMessage('');
  }, [isVisualizing])

  function freshBoard() {
		const newBoard = createBoard(HEIGHT, WIDTH, START, FINISH);
		setGrid(newBoard);
	}
//-------------------------------------------------Pathfinders related functionality-------------------------------------------------------//
  function visualizeBreadthFirstSearchPathfinder(){
    if(!isVisualizing){
      setMessage("Pathfinding Algorithm : Breadth-First-Search");
      setExtraMessage("Breadth-First-Search is unweighted and guarantees shortest path")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  

      // try{
      //   //apply bfs pathfinder
      //   let visitedCellsInOrder = pathfinderBFS(newGrid, getStart(newGrid), getFinish(newGrid));
      //   //get nodes of shortest path backtracking from finish node
      //   let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      // }catch{

      // }
      //apply bfs pathfinder
      let visitedCellsInOrder = pathfinderBFS(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //check if path is possible
      if(visitedCellsInOrder === undefined){
        setExtraMessage("Path is not possible...");
        setIsVisualizing(false);
        return;
      }else{
        //update the grid state
        setGrid(newGrid);
        //visualize the algorithm
        visualize(visitedCellsInOrder, shortestPathCells);
      } 
    }
  }
  function visualizeDepthFirstSearchPathfinder(){
    if(!isVisualizing){
      setMessage("Pathfinding Algorithm : Depth-First-Search");
      setExtraMessage("Depth-First-Search is unweighted and does NOT guarantee shortest path")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply bfs pathfinder
      let visitedCellsInOrder = pathfinderDFS(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //check if path is possible
      if(visitedCellsInOrder === undefined){
        setExtraMessage("Path is not possible...");
        setIsVisualizing(false);
        return;
      }else{
        //update the grid state
        setGrid(newGrid);
        //visualize the algorithm
        visualize(visitedCellsInOrder, shortestPathCells);
      }
    }
  }

  function visualizeDijkstraPathfinder(){
    if(!isVisualizing){
      setMessage("Pathfinding Algorithm : Dijkstra")
      setExtraMessage("Dijkstra is weighted and guarantees shortest path")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply Dijkstra pathfinder
      let visitedCellsInOrder = pathfinderDijkstra(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //check if path is possible
      if(visitedCellsInOrder === undefined){
        setExtraMessage("Path is not possible...");
        setIsVisualizing(false);
        return;
      }else{
        //update the grid state
        setGrid(newGrid);
        //visualize the algorithm
        visualize(visitedCellsInOrder, shortestPathCells);
      }
    }
  }

  function visualizeAstarPathfinder(){
    if(!isVisualizing){
      setMessage("Pathfinding Algorithm : A-star")
      setExtraMessage("A-star is weighted and guarantees shortest path")
      setIsVisualizing(true);
      //prepare grid for the algorithm application
      const newGrid = grid.slice();
      prepareGridForAlgorithms(newGrid);  
      //apply a-star pathfinder
      let visitedCellsInOrder = pathfinderAstar(newGrid, getStart(newGrid), getFinish(newGrid));
      //get nodes of shortest path backtracking from finish node
      let shortestPathCells = getNodesInShortestPathOrder(getFinish(newGrid));
      //check if path is possible
      if(visitedCellsInOrder === undefined){
        setExtraMessage("Path is not possible...");
        setIsVisualizing(false);
        return;
      }else{
        //update the grid state
        setGrid(newGrid);
        //visualize the algorithm
        visualize(visitedCellsInOrder, shortestPathCells);
      }
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
        // explicitly change wall colors
        if(cell.isBaseWall) document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell isBaseWall"
        if(cell.isWallToDestroy) document.getElementById(`cell-${cell.y}-${cell.x}`).className = "cell"
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
      setMessage("Maze Generation Algorithm : Depth-First-Search");
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

  function handleSpeed(dropdownInfo){
		setdropdownSpeedHeader(`Speed: ${dropdownInfo.option}`);
		if(dropdownInfo.option === "Slow") setSpeed(700);
		if(dropdownInfo.option === "Medium") setSpeed(50);
		if(dropdownInfo.option === "Fast") setSpeed(10);
    if(dropdownInfo.option === "Extra-Fast") setSpeed(5);

  }
//-------------------------------------------------Mouse events functionality-------------------------------------------------------//

  function handleMouseDown(y, x){
    const cell = grid[y][x];
    if (cell.isStart === true && cell.isFinish === false) {
      setMainIsPressed("start")      
      cell.isStart = false;
    }
    if (cell.isStart === false && cell.isFinish === true) {
      setMainIsPressed("finish")      
      cell.isFinish = false;
    }
    if (mainIsPressed === "") {
      const newGrid = gridWithWallToggled(grid, y, x);
      setGrid(newGrid);
      setMouseIsPressed(true);
    }
  }
  function handleMouseEnter(y, x){
    if (mainIsPressed === "start") {
      const newGrid = gridDynamicNodes(grid, y, x, "start");
      setGrid(newGrid);
    }
    if (mainIsPressed === "finish") {
      const newGrid = gridDynamicNodes(grid, y, x, "finish");
      setGrid(newGrid);
    }
    if (mouseIsPressed && mainIsPressed === "") {
        const newGrid = gridWithWallToggled(grid, y, x);
        setGrid(newGrid);
        setMouseIsPressed(true);
    }
  }

  function handleMouseUp(y, x){
    if (mainIsPressed === "start") {
      setMainIsPressed("");
      const newGrid = gridDynamicNodes(grid, y, x, "start");
      setMainIsPressed("");
      setStart([y, x]);
      setGrid(newGrid);
    }
    if (mainIsPressed === "finish") {
      const newGrid = gridDynamicNodes(grid, y, x, "finish");
      setMainIsPressed("");
      setFinish([y, x]);
      setGrid(newGrid);
    }
    setMouseIsPressed(false);
  }

  function handleMouseLeave(y, x){
    if (mainIsPressed === "")
        return;
    let newGrid = grid.slice();
    const cell = newGrid[y][x];
    if (mainIsPressed === "start") {
        const newCell = {
            ...cell,
            isStart: false,
            isBaseWall: false
        }
        newGrid[y][x] = newCell;
    }
    if (mainIsPressed === "finish") {
        const newCell = {
            ...cell,
            isFinish: false,
            isBaseWall: false
        }
        newGrid[y][x] = newCell;
    }
    setGrid(newGrid);
  }
  
  // updating the grid, when the walls are tiggered
  function gridWithWallToggled(grid, y, x){
    let newGrid = grid.slice();
    const cell = newGrid[y][x];
    const newCell = {
        ...cell,
        isBaseWall: !cell.isBaseWall
    }
    newGrid[y][x] = newCell;
    return newGrid;
  }
  function gridDynamicNodes(grid, y, x, pos){
    let newGrid = grid.slice();
    const cell = newGrid[y][x];
    if (pos === "start") {
        const newCell = {
            ...cell,
            isStart: true
        }
        newGrid[y][x] = newCell;
    }
    if (pos === "finish") {
        const newCell = {
            ...cell,
            isFinish: true
        }
        newGrid[y][x] = newCell;
    }
    return newGrid;
}


//-------------------------------------------------Returned component rendering-------------------------------------------------------//
  if (!grid) {
    return <div>Loading</div>;
  }
  return( 
        <div className="board">
          <ButtonGroup>
            <GenerateMazeDropdown handleDFSMaze={visualizeDepthFirstSearchMaze}
                                  handleRandomMaze={visualizeRandomMaze}/>
            <PathfindingAlgorithmDropdown handleBFSPathfinder={visualizeBreadthFirstSearchPathfinder}
                                          handleDFSPathfinder={visualizeDepthFirstSearchPathfinder}
                                          handleAstarPathfinder={visualizeAstarPathfinder}
                                          handleDijkstraPathfinder={visualizeDijkstraPathfinder} />
            <Dropdown header={dropdownSpeedHeader}
                      options={speedOptions}
                      handleDropdown={handleSpeed}/>
            <Button className={isVisualizing?"disabled":""} color="info" onClick={()=>clearGrid()}>Clear Grid</Button>
          </ButtonGroup>
          <h1 id="board-message-h1">{message}</h1>
          <h4>{extraMessage}</h4>
          <h4>{boardVisualizationMessage}</h4>
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
                              isBaseWall={isBaseWall} 
                              mouseIsPressed={mouseIsPressed}
                              onMouseDown={(y, x) => handleMouseDown(y, x)}
                              onMouseEnter={(y, x) => handleMouseEnter(y, x)}
                              onMouseUp={(y,x) => handleMouseUp(y, x)}
                              onMouseLeave={(y, x) => handleMouseLeave(y, x)}/>;
                })}
              </div>);
            })}
          </div>
        </div>);
};

export default Board;