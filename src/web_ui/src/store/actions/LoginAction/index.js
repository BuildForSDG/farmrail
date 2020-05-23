import { USER_LOGIN, USER_LOGOUT } from '../../../components/common/Globals';

export const setAuth0 = (auth0Client) => (dispatchEvent) => {
  return dispatchEvent({
    type: USER_LOGIN,
    auth0Client
  });
};

const setUser = (user) => (dispatchEvent) => {
  return dispatchEvent({
    type: USER_LOGIN,
    userData: user,
    loading: false
  });
};

export const checkIfNoError = (user) => (dispatchEvent) => {
  if (!user) {
    return dispatchEvent({
      type: USER_LOGIN,
      message: user.message
    });
  }
  return setUser(user);
};

export const setIsAuthenticated = (isAuthenticated) => (dispatchEvent) => {
  return dispatchEvent({
    type: USER_LOGIN,
    isAuthenticated
  });
};

export const setPopupOpen = (loginFunction) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
    popupOpen: true
  });
  try {
    return loginFunction;
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch({
      type: USER_LOGIN,
      popupOpen: true
    });
  }
};

export const setLoading = (loading) => (dispatchEvent) => {
  dispatchEvent({
    type: USER_LOGIN,
    loading
  });
};
