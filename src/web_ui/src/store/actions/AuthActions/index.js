import { USER_LOGOUT, UPDATE_AUTH } from '../../../components/common/Globals';

let Auth0Client;

const loginWithRedirect = (...p) => (auth0) => {
  return ;
};

export const setAuth = (auth0Client) => (dispatchEvent) => {
  const data = {};
  Auth0Client = auth0Client;
  data.auth0Client = auth0Client;
  data.loginWithRedirect = (...p) => auth0Client.loginWithRedirect(...p);
  data.logout = (...p) => auth0Client.logout(...p);
  dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};

export const setIsAuthenticated = (isAuthenticated) => (dispatchEvent) => {
  const data = {};
  data.isAuthenticated = isAuthenticated;
  dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};

export const setUser = (user) => (dispatchEvent) => {
  if (!user) {
    console.log(user);
  }
  const data = {};
  const userObject = { data: user, isLoggedIn: true };
  data.user = userObject;
  data.loading = false;
  localStorage.setItem('auth_token', JSON.stringify(userObject));
  dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};

export const setLoading = (loading) => (dispatchEvent) => {
  const data = {};
  data.loading = loading;
  dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};

export const setPopupOpen = (popupOpen) => (dispatchEvent) => {
  const data = {};
  data.popupOpen = popupOpen;
  dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};
