import React, { useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth0, setIsAuthenticated, checkIfNoError, setPopupOpen, setLoading } from '../store/actions/LoginAction';

const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) => {
  const { isAuthenticated, user, auth0Client, loading, popupOpen } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      dispatch(setAuth0(auth0FromHook));

      if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const getAuthentication = await auth0FromHook.isAuthenticated();

      dispatch(setIsAuthenticated(getAuthentication));

      if (isAuthenticated) {
        const userData = await auth0FromHook.getUser();
        return dispatch(checkIfNoError(userData));
      }
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    const loginFunction = await auth0Client.loginWithPopup(params);
    dispatch(setPopupOpen(loginFunction));
    const User = await auth0Client.getUser();
    dispatch(checkIfNoError(User));
    dispatch(setIsAuthenticated(true));
  };

  const handleRedirectCallback = async () => {
    dispatch(setLoading(true));
    await auth0Client.handleRedirectCallback();
    const UserData = await auth0Client.getUser();
    dispatch(setLoading(false));
    dispatch(setIsAuthenticated(true));
    dispatch(checkIfNoError(UserData));
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {' '}
      {console.log(isAuthenticated)}
      {children}
    </Auth0Context.Provider>
  );
};
