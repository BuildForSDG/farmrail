import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth, setIsAuthenticated, setUser, setLoading, setPopupOpen } from '../../store/actions/AuthActions';

const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) => {
  const { auth0Client } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      dispatch(setAuth(auth0FromHook));

      if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      dispatch(setIsAuthenticated(isAuthenticated));

      if (isAuthenticated) {
        const userData = await auth0FromHook.getUser();
        dispatch(setUser(userData));
      }

      dispatch(setLoading(false));
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    dispatch(setPopupOpen(true));
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const userResult = await auth0Client.getUser();
    dispatch(setUser(userResult));
    dispatch(setIsAuthenticated(true));
  };

  const handleRedirectCallback = async () => {
    dispatch(setLoading(true));
    await auth0Client.handleRedirectCallback();
    const User = await auth0Client.getUser();
    dispatch(setLoading(false));
    dispatch(setIsAuthenticated(true));
    dispatch(setUser(User));
  };

  return (
    <Auth0Context.Provider
      value={{
        // isAuthenticated,
        // user,
        // loading,
        // popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
