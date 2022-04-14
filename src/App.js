import React, { useState, useEffect } from 'react';
//import TopElements from './components/TopPanel/';
import { Button,  ButtonGroup,} from 'reactstrap'
import GenerateMazeDropdown from "./components/Panel/GenerateMazeDropdown";
import PathfindingAlgorithmDropdown from "./components/Panel/PathfindingAlgorithmDropdown";
import Panel from "./components/Panel/Panel";
import Board from "./components/Board/Board";
import Dropdown from "./components/Panel/Dropdown";
import DFSMaze from "./components/Board/MazeGeneration/DFSMaze";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";

function App() {

  
 
  return (
    <div className="app">
      
      <Board />
    </div>
  );
}

export default App;
