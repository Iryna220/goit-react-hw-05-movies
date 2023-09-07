import { fetchMovieReviews } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      setLoading(true);
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something goes wrong</p>}
      {reviews.length !== 0 && (
        <div>
          <ul className={styles.list}>
            {reviews.map(review => (
              <li key={review.id} className={styles.listItem}>
                <h2>Author: {review.author}</h2>
                <p className={styles.listDescribe}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
