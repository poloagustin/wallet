import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

test('renders withour crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App compiler="TypeScript" framework="React"/>, div);
});
