import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.themoviedb.org/3/api',
  params: {
    key: '0680db411350b9d223e12287a60e3b59',
    language: 'en-US',
  },
});
export const fetchTrendingMovie = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};
