import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './home/Coin';
import detailReducer from './home/Detail';

const reducer = combineReducers({
  coinReducer,
  detailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
