import React from 'react';
import { Router } from 'react-router';
import Homepage from '../Homepage';
import Dashboard from "../Dashboard";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";
import ContentSwitch from './index';





test("redirects to specified page", () => {
  
  render(
    <Router >
      <ContentSwitch />
    </Router>,
    node
  );
  expect(Homepage.location.pathname).toBe("/");
  expect(Dashboard.location.pathname).toBe("/dashboard");
  expect(Signup.location.pathname).toBe("/signup");
  expect(Login.location.pathname).toBe("/login");
 
});

