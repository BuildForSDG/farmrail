import {
  USER_LOGIN,
} from '../../../components/common/Globals';

const LoginAction = (userData) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
    data: userData
  })
};
export default LoginAction;
