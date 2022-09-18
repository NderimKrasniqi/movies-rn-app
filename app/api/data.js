import axios from 'axios';
import { API_KEY } from '@env';

const fetchTrendingList = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=d790343796517b0f23e1880e5eb061e5`
  );

const fetchMovie = (item) =>
  axios.get(
    `https://api.themoviedb.org/3/${item.media_type}/${item.id}?api_key=d790343796517b0f23e1880e5eb061e5&language=en-US`
  );

const fetchSearch = (query) =>
  axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=d790343796517b0f23e1880e5eb061e5&language=en-US&query=${query}&page=1&include_adult=false`
  );

export default {
  fetchTrendingList,
  fetchMovie,
  fetchSearch,
};
