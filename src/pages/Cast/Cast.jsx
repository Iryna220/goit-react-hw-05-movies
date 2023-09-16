import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCasts, IMAGE_URL } from 'service/api';
import Loader from 'components/Loader/Loader';
import styles from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMovieCasts(movieId);
        setActors(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something goes wrong</p>}
      <ul className={styles.list}>
        {actors.map(actor => (
          <li className={styles.listItem} key={actor.id}>
            <img
              className={styles.listImg}
              width="200px"
              src={
                actor.profile_path
                  ? IMAGE_URL + actor.profile_path
                  : `https://fakeimg.pl/200x200/8c7d7d/de1414?text=No+image&font=lobster`
              }
              alt={actor.original_name}
            />
            <div className={styles.extraInfo}>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
