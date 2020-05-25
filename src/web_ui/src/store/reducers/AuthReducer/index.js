import { USER_LOGIN, USER_LOGOUT, UPDATE_AUTH } from '../../../components/common/Globals';

const authToken = JSON.parse(localStorage.getItem('auth_token'));

const initialState = {
  isAuthenticated: authToken !== null,
  user: { data: authToken === null ? null : authToken.data, isLoggedIn: authToken !== null },
  auth0Client: null,
  loading: true,
  popupOpen: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign(state, action.data);
    case USER_LOGOUT:
      return Object.assign(state, action.data);
    case UPDATE_AUTH:
      return Object.assign(state, action.data);
    default:
      return state;
  }
};

export default AuthReducer;
