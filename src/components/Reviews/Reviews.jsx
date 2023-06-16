import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'API';
import { ReviewsStyled, UserIcon } from './Reviews.styled';

const Reviews = () => {
  const { id, type } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const reviews = await fetch(`/${type}/${id}/reviews`);
        setReviews(reviews.data.results);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [id, type]);

  return (
    <>
      {useEffect && reviews.length > 0 ? (
        <ReviewsStyled>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>
                  <UserIcon /> {author}
                </h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsStyled>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Reviews;
