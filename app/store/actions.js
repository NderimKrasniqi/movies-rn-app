import fetchApi from '../api/data';
import {
  TOGGLE_FAVORITE,
  GET_TRENDING_FAIL,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_REQUEST,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  CLEAR_CURRENT,
} from './actionTypes';

export const getTrending = () => async (dispatch) => {
  dispatch({ type: GET_TRENDING_REQUEST });
  try {
    const { data } = await fetchApi.fetchTrendingList();
    const filtered = data.results.filter(
      (item) => item.media_type !== 'person'
    );
    dispatch({ type: GET_TRENDING_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({
      type: GET_TRENDING_FAIL,
      payload: error.message,
    });
  }
};

export const getMovie = (item) => async (dispatch, getState) => {
  const { listOfFavorites } = getState().favoriteMovies;
  dispatch({ type: CLEAR_CURRENT });
  dispatch({ type: GET_MOVIE_REQUEST });

  try {
    const { data } = await fetchApi.fetchMovie(item);
    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: data,
      sharedState: listOfFavorites,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_FAIL,
      payload: error.message,
    });
  }
};

export const addToFavorite = () => (dispatch, getState) => {
  const { movie } = getState().movie;
  dispatch({ type: TOGGLE_FAVORITE, payload: movie });
};
