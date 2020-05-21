import {
  USER_LOGIN, GOOGLE_LOGIN, TWITTER_LOGIN, FACEBOOK_LOGIN,
  LOGIN_API
} from '../../constants/authConstants';

const LoginAction = (userData) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
    data: userData
  })
};
export default LoginAction;
