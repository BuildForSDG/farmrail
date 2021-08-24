import { connect } from 'react-redux';
import HeaderAppBar from './HeaderBar';

const mapStateToProps = (state) => {
  const { userAuth, drawers } = state;
  return {
    userAuth,
    open: drawers[0].isOpen
  };
};

export default connect(mapStateToProps)(HeaderAppBar);
