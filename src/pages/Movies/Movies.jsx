import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import MovieListEditor from 'components/MovieListEditor/MovieListEditor';

import { searchMovies } from 'service/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchSearchMovies = async () => {
      setLoading(true);
      try {
        const { results } = await searchMovies(query);
        if (results.length === 0) {
          toast.error('There are no movies matching your request.');
        }
        setMovies(results);
      } catch {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [query]);
  const searchMoviesByQuery = newSearch => {
    if (newSearch.trim() === '') {
      toast.error('Enter a search trim.');
    }
    setMovies([]);
    setSearchParams({ query: newSearch });
  };
  return (
    <>
      <Searchbar onSubmit={searchMoviesByQuery} />
      <ToastContainer position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {movies && <MovieListEditor movies={movies} />}
      {error && <p>Something goes wrong</p>}
    </>
  );
};

export default Movies;
