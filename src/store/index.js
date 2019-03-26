import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;