import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import TipCalc from './TipCalc/TipCalc'

function App() {
  return (
    <div className="App">
      <TipCalc />
      <Outlet />
    </div>
  );
}

export default App;