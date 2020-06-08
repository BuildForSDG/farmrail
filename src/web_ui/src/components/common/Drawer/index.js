import { connect } from 'react-redux';
import MainDrawer from './Drawer';

const mapStateToProps = (state) => {
  const { drawers } = state;
  return {
    drawers
  };
};

export default connect(mapStateToProps)(MainDrawer);
