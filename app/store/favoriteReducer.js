import { TOGGLE_FAVORITE, GET_FROM_LOCAL } from './actionTypes';

const favoriteReducer = (
  state = { favoriteMovies: [], listOfFavorites: [] },
  action
) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const item = action.payload;
      const exists = state.favoriteMovies.find((m) => m.id === item.id);
      const favMovies = state.favoriteMovies.filter((m) => m.id !== item.id);
      const favIds = state.listOfFavorites.filter((id) => id !== item.id);
      return {
        ...state,
        favoriteMovies: exists
          ? [...favMovies]
          : [...state.favoriteMovies, item],
        listOfFavorites: exists
          ? [...favIds]
          : [...state.listOfFavorites, item.id],
      };

    case GET_FROM_LOCAL:
      const { fav, ids } = action.payload;
      return {
        ...state,
        favoriteMovies: fav,
        listOfFavorites: ids,
      };

    default:
      return state;
  }
};

export default favoriteReducer;
