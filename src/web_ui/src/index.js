import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import App from './App';
import theme from './components/Layout/theme';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';
import store from './store';
import { Auth0Provider } from './utils/Auth0';
import auth0Config from './config/AuthO';

const onRedirectCallback = (appState) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={auth0Config.domain}
        client_id={auth0Config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
