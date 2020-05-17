import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ContentSwitch from './components/AppRoutes/index';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ContentSwitch />
        </Switch>
      </div>
    </Router>
  );
}
