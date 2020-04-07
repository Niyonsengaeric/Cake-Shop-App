import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducers';
import iceCreamReducer from './iceCream/iceCreamReducers';
import userReducer from './user/userReducers';

const rootReduce = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReduce;
