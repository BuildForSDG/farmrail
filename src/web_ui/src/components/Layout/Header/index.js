import { connect } from 'react-redux';
import HeaderAppBar from './HeaderBar';

const mapStateToProps = (state) => {
  const { userAuth, drawers, products } = state;
  return {
    products,
    userAuth,
    open: drawers[0].isOpen
  };
};

export default connect(mapStateToProps)(HeaderAppBar);
