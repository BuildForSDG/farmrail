import { PRODUCT_SEARCH, LOAD_PRODUCTS } from '../../../components/common/Globals';
import { products } from '../../../apis/products';

const initialState = [];

const ProductReducer = (state = initialState, action) => {
  const { text } = action;
  switch(action.type) {
    case LOAD_PRODUCTS:
      return [
        ...state,
        ...products
      ];
    case PRODUCT_SEARCH:
      return state.filter(item => item.name.includes(text));
    default:
      return state;
  }
}

export default ProductReducer;
