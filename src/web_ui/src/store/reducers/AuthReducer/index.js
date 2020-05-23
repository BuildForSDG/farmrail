import { USER_LOGIN, USER_LOGOUT } from '../../../components/common/Globals';

const authToken = localStorage.getItem('auth_token');

const initialState = {
  isAuthenticated: false,
  user: {
    data: authToken === null ? null : JSON.parse(authToken),
    isLoggedIn: authToken !== null
  },
  auth0Client: '',
  loading: true,
  popupOpen: false
};

const AuthReducer = (state = initialState, action) => {
  const { isAuthenticated, message, userData, auth0Client, loading, popupOpen } = action;
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem(
        'auth_token',
        JSON.stringify({
          userData
        })
      );
      return Object.assign(state, {
        isAuthenticated,
        user: {
          data: userData,
          isLoggedIn: true,
          message
        },
        auth0Client,
        loading,
        popupOpen
      });

    case USER_LOGOUT:
      localStorage.removeItem('auth_token');
      return Object.assign(state, initialState);
    default:
      return state;
  }
};

export default AuthReducer;
