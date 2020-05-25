import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentSwitch from './components/AppRoutes/index';

export default function App() {
  const { loading } = useSelector((state) => state);
  if (loading) {
    return <div>Farmrail Loading...</div>;
  }
  return (
    <Router>
      <Switch>
        <ContentSwitch />
      </Switch>
    </Router>
  );
}
