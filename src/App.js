import React from 'react';
//import TopElements from './components/TopPanel/';
import Panel from './components/Panel/Panel';
import Canvas from './components/Canvas/Canvas';
import "bootswatch/dist/slate/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
    <Panel/>
    <Canvas/>
    </div>
    
  );
}

export default App;