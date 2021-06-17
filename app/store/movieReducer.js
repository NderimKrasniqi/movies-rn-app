import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  TOGGLE_FAVORITE,
  CLEAR_CURRENT,
} from './actionTypes';

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_SUCCESS:
      const item = action.payload;
      const list = action.sharedState;
      const exists = list?.find((m) => m === item.id);

      return {
        ...state,
        loading: false,
        movie: { ...action.payload, favorite: exists },
      };

    case GET_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        movie: {},
      };
    case TOGGLE_FAVORITE:
      const temp = action.payload;
      return {
        ...state,
        movie: { ...action.payload, favorite: !temp.favorite },
      };

    default:
      return state;
  }
};

export default movieReducer;
