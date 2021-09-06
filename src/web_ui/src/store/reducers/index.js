import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DrawerReducer from './DrawerReducer';
import ProductReducer from './ProductReducer';

const combinedReducers = combineReducers({
  userAuth: AuthReducer,
  drawers: DrawerReducer,
  products: ProductReducer
});

export default combinedReducers;
