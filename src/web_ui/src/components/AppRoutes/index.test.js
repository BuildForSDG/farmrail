import React from 'react';
import { Router } from 'react-router';
import ContentSwitch from './index';
import { localRoutes } from "../../store/index";




test("redirects to specified page", () => {


  <Router >
    <ContentSwitch />
  </Router> ,


    expect(localRoutes.dashboard).toBe("/dashboard");
  expect(localRoutes.signup).toBe("/signup");
  expect(localRoutes.login).toBe("/login");

});

