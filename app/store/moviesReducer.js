import {
  GET_TRENDING_REQUEST,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
} from './actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_REQUEST:
      return {
        loading: true,
      };

    case GET_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case GET_TRENDING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
