import React from 'react';
//import TopElements from './components/TopPanel/';
import Panel from './components/Panel/Panel';
import Canvas from './components/Canvas/Canvas';
import "bootswatch/dist/quartz/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className='app'>

    <Panel/>
    <Canvas/>
    </div>
    
  );
}

export default App;