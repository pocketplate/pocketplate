import * as React from 'react';
import ReactDOM from 'react-dom';
import { PoundCalculator } from './PoundCalculator';

describe('PoundCalculator', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PoundCalculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});