import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Routes } from './common/router/Routes';

const App: React.FC<any> = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='main-frame'>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
