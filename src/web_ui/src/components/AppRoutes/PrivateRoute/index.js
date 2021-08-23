import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ userAuth, ...rest }) => {
  const { isAuthenticated } = userAuth;
  return {
    isAuthenticated,
    ...rest
  }
}

export default connect(mapStateToProps)(PrivateRoute);