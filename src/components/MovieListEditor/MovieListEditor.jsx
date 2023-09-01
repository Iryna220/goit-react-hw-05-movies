import { useLocation, Link } from 'react-router-dom';
import styles from './MovieListEditor.module.css';

const MovieListEditor = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id} className={styles.linkmovies}>
          <Link
            to={`movies/${id}`}
            state={{ from: location }}
            className={styles.link}
          ></Link>
          {title}
        </li>
      ))}
    </ul>
  );
};

export default MovieListEditor;
