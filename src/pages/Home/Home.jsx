import { fetchTrendingMovie } from 'service/api';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';

import MovieListEditor from 'components/MovieListEditor/MovieListEditor';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendingMovie();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);
  return (
    <main>
      {loading && <Loader />}
      <h1 className={styles.title}>Tranding today</h1>
      {movies && <MovieListEditor movies={movies} />}
      {error && <p className={styles.error}>Something goes wrong</p>}
    </main>
  );
};

export default Home;
