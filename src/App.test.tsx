import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Container } from 'inversify';

it('renders without crashing', () => {
  const container = {
    resolve: () => {}
  } as unknown as Container;

  shallow(<App container={container} />);
});
