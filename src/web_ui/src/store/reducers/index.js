import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DrawerReducer from './DrawerReducer';

const combinedReducers = combineReducers({
  userAuth: AuthReducer,
  drawers: DrawerReducer
});

export default combinedReducers;
