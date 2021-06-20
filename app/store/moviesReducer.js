import {
  GET_TRENDING_REQUEST,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_CLEAR,
} from './actionTypes';

const moviesReducer = (state = {}, action) => {
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
    case SEARCH_REQUEST:
      return {
        loading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searched: action.payload,
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
        searched: null,
      };
    default:
      return state;
  }
};

export default moviesReducer;
