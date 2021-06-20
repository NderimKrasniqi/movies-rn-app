import axios from 'axios';
import { API_KEY } from '@env';

const fetchTrendingList = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

const fetchMovie = (item) =>
  axios.get(
    `https://api.themoviedb.org/3/${item.media_type}/${item.id}?api_key=${API_KEY}&language=en-US`
  );

const fetchSearch = (query) =>
  axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

export default {
  fetchTrendingList,
  fetchMovie,
  fetchSearch,
};
