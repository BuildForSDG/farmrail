import {
  LOGIN_REQUEST,
  UPDATE_AUTH,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGIN_FAILURE
} from '../../../components/common/Globals';

const initialState = {
  isAuthenticated: false,
  user: {},
  isFetching: false,
  loading: true,
  popupOpen: false
};

const AuthReducer = (state = initialState, action) => {
  const { isFetching, isAuthenticated, user, message } = action;

  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching, isAuthenticated };
    case LOGIN_SUCCESS:
      return { ...state, isFetching, isAuthenticated, user };
    case LOGIN_FAILURE:
      return { ...state, isFetching, isAuthenticated, message };
    case LOGOUT_REQUEST:
      return { ...state, isFetching, isAuthenticated };
    case LOGOUT_SUCCESS:
      return { ...state, isFetching, isAuthenticated };
    case UPDATE_AUTH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default AuthReducer;
