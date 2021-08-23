import React from 'react';
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={({ isAuthenticated }, ...restProps ) => (
    isAuthenticated === true
      ? <Component {...restProps} />
      : <Redirect to="/login" />
    )}
  />
);

export default PrivateRoute;