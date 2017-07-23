import * as React from 'react';

export interface AppProps {
  compiler: string;
  framework: string;
}

export const App = () =>
  <h1>Hello World!</h1>;
