import {
  USER_LOGIN
} from '../../components/common/Globals';

const initialState = {
  data: {
    userAuth: localStorage.getItem("auth_token") === null
                ? null : JSON.parse(localStorage.getItem("auth_token")),
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
