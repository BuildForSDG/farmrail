import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import localRoutes from './components/AppRoutes/routes';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders Homepage', () => {
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
    expect(localRoutes.homepage).toBe('/');
});
