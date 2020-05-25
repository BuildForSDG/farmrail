import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers';

const initialState = {};
const middleWare = [thunk, logger];

const store = createStore(RootReducer, initialState, applyMiddleware(...middleWare));

export default store;
