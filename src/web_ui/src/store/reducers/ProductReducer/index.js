import { PRODUCT_SEARCH, LOAD_PRODUCTS } from '../../../components/common/Globals';
import { products } from '../../../apis/products';

const initialState = products;

const ProductReducer = (state = initialState, action) => {
  const { text } = action;
  switch(action.type) {
    case LOAD_PRODUCTS:
      return state;
    case PRODUCT_SEARCH:
      return initialState.filter(item => item.name.toLowerCase().indexOf(text) > -1);
    default:
      return state;
  }
}

export default ProductReducer;
