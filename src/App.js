import React, { useState, useEffect } from 'react';
//import TopElements from './components/TopPanel/';
import Board from "./components/Board/Board";
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
