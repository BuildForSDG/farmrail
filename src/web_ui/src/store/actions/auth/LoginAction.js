import {
  USER_LOGIN,
} from '../../../components/common/Globals';

// handle user login click

// check if the user is logged in

// login user to app

// logout user



const LoginAction = (userData) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
    data: userData
  })
};
export default LoginAction;
