import {
  USER_LOGIN, GOOGLE_LOGIN, TWITTER_LOGIN, FACEBOOK_LOGIN
} from '../constants/authConstants';

const initialState = {
  data: {
    userAuth: localStorage.getItem("farmRaiAuth") === null
                ? null : JSON.parse(localStorage.getItem("farmRaiAuth")),
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { data: action.data }
    default:
      return state;
  }
};

export default userReducer;
