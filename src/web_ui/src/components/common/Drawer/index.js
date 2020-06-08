import MainDrawer from './Drawer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { drawers } = state;
  return {
    drawers
  }
}

export default connect(mapStateToProps)(MainDrawer);
