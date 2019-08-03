import React from 'react';
import './App.css';
import PoundCalculator from './PoundCalculator/components/PoundCalculator';
import { PoundCalculatorStore } from './PoundCalculator/components/stores/PoundCalculatorStore';
import { Provider } from 'mobx-react';

const poundCalculatorStore: PoundCalculatorStore = new PoundCalculatorStore();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Pocket-plate app!</header>
      <div className="main">
        <Provider poundCalculatorStore={poundCalculatorStore}>
          <PoundCalculator />
        </Provider>
      </div>
    </div>
  );
}

export default App;
