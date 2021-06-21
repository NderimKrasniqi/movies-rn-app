import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moviesReducer from './moviesReducer';
import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';

// Middleware: Redux Persist Config

const rootReducer = combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteReducer,
  movie: movieReducer,
  search: searchReducer,
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['favoriteMovies'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['movies', 'movie', 'search'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(persistedReducer, enhancer);

let persistor = persistStore(store);

export { store, persistor };
