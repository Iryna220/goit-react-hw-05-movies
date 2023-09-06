import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCasts, IMAGE_URL } from 'service/api';
import Loader from 'components/Loader/Loader';

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
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? IMAGE_URL + actor.profile_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={actor.original_name}
            />
            <div>
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
