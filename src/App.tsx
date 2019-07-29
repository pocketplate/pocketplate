import React from 'react';
import './App.css';
import PoundCalculator from './PoundCalculator/components/PoundCalculator';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Pocket-plate app!</header>
      <div className="main">
        <PoundCalculator></PoundCalculator>
      </div>
    </div>
  );
}

export default App;
