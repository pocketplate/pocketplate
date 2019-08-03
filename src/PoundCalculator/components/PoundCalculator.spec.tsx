import * as React from 'react';
import ReactDOM from 'react-dom';
import { PoundCalculator } from './PoundCalculator';
import { PoundCalculatorStore } from './stores/PoundCalculatorStore';
import { Provider } from 'mobx-react';

describe('PoundCalculator', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    const store: PoundCalculatorStore = new PoundCalculatorStore();

    ReactDOM.render(<Provider poundCalculatorStore={store}><PoundCalculator/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});