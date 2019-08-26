import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from 'inversify';
import { Provider } from 'inversify-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider container={new Container()}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
