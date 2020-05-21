import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ContentSwitch from './components/AppRoutes/index';
import { useAuth0 } from './context/auth0.context';

export default function App() {
  const { loading,  } = useAuth0();
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
