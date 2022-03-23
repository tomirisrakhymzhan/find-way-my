import React from 'react';
//import TopElements from './components/TopPanel/';
import Panel from './components/Panel/Panel';
import Canvas from './components/Canvas/Canvas';
import "bootswatch/dist/quartz/bootstrap.min.css";
import './App.css';

function App() {
  const [dropdownClickInfo, setdropdownClickInfo]=React.useState({})
  return (
    <div className='app'>

    <Panel handleDropdown={setdropdownClickInfo}/>
    <Canvas/>
    {dropdownClickInfo.header == "Generate maze" && dropdownClickInfo.option == "Depth-First-Search" && (<div>DFS</div>)}
    {dropdownClickInfo.header == "Choose Algorithm" && (<div>ChhooseeAlggooo</div>)}
    {dropdownClickInfo.header == "Speed" && (<div>Speeeeeed</div>)}
    </div>
    
  );
}

export default App;