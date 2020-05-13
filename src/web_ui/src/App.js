import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import ContentSwitch from './components/AppRoutes/index';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ContentSwitch />
        </Switch>
      </div>
    </Router>
  );
}
