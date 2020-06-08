import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers';

const middleWare = [thunk, logger];

const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 });
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(...middleWare)));

export default store;
