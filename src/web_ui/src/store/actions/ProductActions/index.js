import { LOAD_PRODUCTS, PRODUCT_SEARCH } from '../../../components/common/Globals';

function filterProducts(text) {
  return {
    type: PRODUCT_SEARCH,
    text
  }
}

function loadProducts() {
  return {
    type: LOAD_PRODUCTS
  }
}

export function productHandler(text) {
  return (dispatch) => {
    dispatch(filterProducts(text));
  }
}

export function fetchProducts(text) {
  return (dispatch) => {
    dispatch(loadProducts(text));
  }
}