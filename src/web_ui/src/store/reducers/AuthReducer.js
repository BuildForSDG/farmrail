import {
  USER_LOGIN
} from '../../components/common/Globals';

const auth_token = localStorage.getItem("auth_token")

const initialState = {
    userAuth: auth_token === null
                ? null : JSON.parse(auth_token),
    isLoggedIn: auth_token === null
  ? false : true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const data = {
        userAuth: action.data,
        isLoggedIn: true
      }
      return Object.assign(initialState, data)
    default:
      return state;
  }
};

export default userReducer;
