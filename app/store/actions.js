import axios from 'axios';
import fetchApi from '../api/data';
import {
  TOGGLE_FAVORITE,
  GET_TRENDING_FAIL,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_REQUEST,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  CLEAR_CURRENT,
  SEARCH_CLEAR,
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

export const getSearch = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  try {
    const { data } = await fetchApi.fetchSearch(query);
    const filtered = data.results.filter(
      (item) => item.media_type !== 'person'
    );
    dispatch({ type: SEARCH_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.message,
    });
  }
};

export const addToFavorite = (item) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE, payload: item });
};

export const clearCurrent = () => (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};
export const clearSearch = () => (dispatch) => {
  dispatch({ type: SEARCH_CLEAR });
};
