import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGIN_FAILURE
} from '../../../components/common/Globals';

const initialState = {
  isAuthenticated: true,
  user: null,
  isFetching: false,
  loading: true,
  message: null
};

const AuthReducer = (state = initialState, action) => {
  const { isFetching, isAuthenticated, user, message } = action;

  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isFetching, isAuthenticated, user };
    case LOGIN_FAILURE:
      return { ...state, isFetching, isAuthenticated, message };
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case LOGOUT_SUCCESS:
      return { ...state, isFetching, isAuthenticated };
    default:
      return state;
  }
};

export default AuthReducer;
