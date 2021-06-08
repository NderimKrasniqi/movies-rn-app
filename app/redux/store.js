import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { dataReducer } from './reducers/data.Reducer';

const reducer = combineReducers({
  data: dataReducer,
});

const initialState = {};

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducer, initialState, enhancer);

export default store;
