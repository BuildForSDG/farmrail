import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { localRoutes } from "./store/index";
import App from './App';

test('renders Homepage', () => {
  <BrowserRouter >
    <App />
  </BrowserRouter> ,


    expect(localRoutes.homepage).toBe("/");
});
