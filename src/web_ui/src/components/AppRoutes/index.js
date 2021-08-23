import React from 'react';
import { Route, Switch } from 'react-router-dom';
import localRoutes from '../common/Globals/routes';
import Homepage from '../Pages/Homepage';
import Dashboard from '../Pages/Dashboard';
import Signup from '../Pages/SignUp';
import Login from '../Forms/Login/Login';
import ResetPassword from '../Pages/ResetPassword';
import NoMatch from '../Pages/NoMatch';
import PrivateRoute from '../AppRoutes/PrivateRoute';

const ContentSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <PrivateRoute path={localRoutes.dashboard} component={Dashboard} />
      <Route path={localRoutes.signup} component={Signup} />
      <Route path={localRoutes.login} component={Login} />
      <Route path={localRoutes.resetPassword} component={ResetPassword} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ContentSwitch;
