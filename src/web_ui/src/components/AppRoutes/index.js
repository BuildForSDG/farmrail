import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import localRoutes from './routes';
import Homepage from '../Pages/Homepage';
import Dashboard from '../Pages/Dashboard';
import Signup from '../Pages/SignUp';
import Login from '../Forms/Login/Login';
import ResetPassword from '../Pages/ResetPassword';
import NoMatch from '../Pages/NoMatch';

const ContentSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path={localRoutes.dashboard} component={Dashboard} />
      <Route path={localRoutes.signup} component={Signup} />
      <Route path={localRoutes.login} component={Login} />
      <Route path={localRoutes.resetPassword} component={ResetPassword} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ContentSwitch;
