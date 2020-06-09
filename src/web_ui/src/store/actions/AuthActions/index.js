import {
  UPDATE_AUTH,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../../../components/common/Globals';

export const setAuth = (auth0Client) => {
  const data = {};
  data.auth0Client = auth0Client;
  return updateAuth(data);
};

export const updateAuth = (data) => (dispatchEvent) => {
  return dispatchEvent({
    type: UPDATE_AUTH,
    data
  });
};

export const setIsAuthenticated = (isAthenticated) => {
  return updateAuth(isAthenticated);
};

export const setLoading = (loading) => {
  const data = {};
  data.loading = loading;
  return updateAuth(data);
};

export const setPopupOpen = (popupOpen) => {
  const data = {};
  data.popupOpen = popupOpen;
  return updateAuth(data);
};

// Login states for the application
// Auth Dispacth Functions
function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

function recieveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

// Log out states for the application
function requestLogout() {
  const data = { isAthenticated: true };
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    data
  };
}

function recieveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Auth function calls
export const loginClick = (loginFunc, params) => (dispatch) => {
  dispatch(requestLogin());
  return loginFunc(params);
};

export function loginUser(user) {
  return (dispatch) => {
    // dispatch login request
    if (!user) {
      return dispatch(loginError(user));
    }
    localStorage.setItem('id_token', user.id_token);
    return dispatch(recieveLogin(user));
  };
}

export function loginErrors(message) {
  return (dispatch) => dispatch(loginError(message));
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(recieveLogout());
  };
}
