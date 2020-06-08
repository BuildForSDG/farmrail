import { connect } from 'react-redux';
import MainDrawer from './Drawer';

const mapStateToProps = (state) => {
  const { drawers } = state;
  const open = drawers[0].isOpen;
  return {
    open
  }
};

export default connect(mapStateToProps)(MainDrawer);
