import client from './client';
import { API_KEY } from '@env';

const getTrending = () => client.get(`trending/all/day?api_key=${API_KEY}`);

export default {
  getTrending,
};
