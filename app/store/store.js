import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moviesReducer from './moviesReducer';
import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteReducer,
  movie: movieReducer,
});

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

export default store;
