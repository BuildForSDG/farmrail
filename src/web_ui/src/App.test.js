import React from 'react';
import { Router } from 'react-router';
import { localRoutes } from "./store/index";
import App from './App';

test('renders Homepage', () => {
    <Router >
    <App />
  </Router> ,


    expect(localRoutes.homepage).toBe("/");
});
