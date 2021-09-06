import Homepage from './Homepage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products
  }
}

export default connect(mapStateToProps)(Homepage);