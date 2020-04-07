import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReduce from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
