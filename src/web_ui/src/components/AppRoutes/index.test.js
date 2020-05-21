import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentSwitch from './index';
import localRoutes from '../AppRoutes/routes';

it('checks redirects to specified page', () => {
  (
    <BrowserRouter>
      <ContentSwitch />
    </BrowserRouter>
  ),
    expect(localRoutes.dashboard).toBe('/dashboard');
  expect(localRoutes.signup).toBe('/signup');
  expect(localRoutes.login).toBe('/login');
});

const searchParams = new URLSearchParams(localRoutes.search);

it('checks if the route requested is not available', () => {
  (
    <BrowserRouter>
      <ContentSwitch />
    </BrowserRouter>
  ),
    expect(searchParams.has('id')).toBe(false);
});
