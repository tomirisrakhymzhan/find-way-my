import React from 'react';
import Board from "./components/Board/Board";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Board />
      <Footer/>
    </div>
  );
}

export default App;
