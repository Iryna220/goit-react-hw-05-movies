import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '0680db411350b9d223e12287a60e3b59',
    language: 'en-US',
  },
});
export const fetchTrendingMovie = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      page: 1,
      include_adult: false,
      query,
    },
  });
  return data;
};
