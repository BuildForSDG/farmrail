import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const combinedReducers = combineReducers({
  userAuth: AuthReducer
});

export default combinedReducers;
