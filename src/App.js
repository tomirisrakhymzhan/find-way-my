import React from "react";
//import TopElements from './components/TopPanel/';
import Panel from "./components/Panel/Panel";
import Board from "./components/Board/Board";
import DFSMaze from "./components/Board/MazeGeneration/DFSMaze";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";

function App() {
  const [dropdownClickInfo, setdropdownClickInfo] = React.useState({});

  
  return (
    <div className="app">
      <Panel handleDropdown={setdropdownClickInfo} />
      {/* <Board /> */}
      {dropdownClickInfo.header == "Generate maze" &&
        dropdownClickInfo.option == "Depth-First-Search" && <DFSMaze/>}
      {dropdownClickInfo.header == "Choose Algorithm" && (
        <div>ChhooseeAlggooo</div>
      )}
      {dropdownClickInfo.header == "Speed" && <div>Speeeeeed</div>}
    </div>
  );
}

export default App;
