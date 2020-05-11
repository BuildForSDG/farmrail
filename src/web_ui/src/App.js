import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import ContentSwitch from "./components/AppRoutes/index";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ContentSwitch />
          <Route path="/">
            <Homepage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


