import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../../../components/common/Globals';

// Login states for the application
// Auth Dispatch Functions
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
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  };
}

function recieveLogout(message) {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    message
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
    return dispatch(recieveLogin(user));
  };
}

export function loginErrors(message) {
  return (dispatch) => dispatch(loginError(message));
}

// Logs the user out
export function logoutUser(logoutFunc) {
  return async (dispatch) => {
    await dispatch(requestLogout());
    localStorage.removeItem('id_token');
    await logoutFunc();
    return dispatch(recieveLogout('Logged Out Successfully'));
  };
}
