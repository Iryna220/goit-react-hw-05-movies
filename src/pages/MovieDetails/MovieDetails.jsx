import { fetchMovieDetails, IMAGE_URL } from 'service/api';
import styles from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { IconContext } from 'react-icons';
import { BiCaretLeftCircle } from 'react-icons/bi';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || 'movies';

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const onGoBack = () => {
    navigate(from);
  };

  return (
    <>
      {error && <p>Something goes wrong</p>}
      {loading && <Loader />}
      {!movie ? (
        <div className={styles.notFound}>This movie is not found</div>
      ) : (
        <>
          <button type="button" onClick={onGoBack} className={styles.button}>
            <IconContext.Provider
              value={{
                color: 'blue',
                className: 'global-class-name',
                size: 22,
              }}
            >
              <div>
                <BiCaretLeftCircle />
              </div>
            </IconContext.Provider>
            <span>Go back</span>
          </button>
          <div className={styles.container}>
            <img
              src={
                movie.poster_path
                  ? IMAGE_URL + movie.poster_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={movie.original_title}
              widht="250"
              className={styles.moviePicture}
            />
          </div>
          <div>
            <h2 className={styles.title}>{movie.title}</h2>
            <p>User Score: {`${movie.vote_average.toFixed(1)}`}</p>
            <h3>Overview</h3>
            <p>{`${movie.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movie.genres.map(genre => genre.name).join('/')}`}</p>
          </div>
          <hr />
          <div>
            <h3>Additional information</h3>
            <ul className={styles.list}>
              <li>
                <Link className={styles.listItem} to="cast" state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className={styles.listItem} to="reviews" state={{ from }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
