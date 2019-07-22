import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from './services/StoreExample';

const store: Store = new Store();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {store.store.test}
        </a>
      </header>
    </div>
  );
}

export default App;
