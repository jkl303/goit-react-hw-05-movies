import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'API';
import { ReviewsStyled, UserIcon } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NoDataStyled } from 'styles/NoDataMessage.styled';

const Reviews = () => {
  const { id, type } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const reviews = await fetch(
          `/${type === 'search' ? 'movie' : type}/${id}/reviews`
        );
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
        <NoDataStyled>We don't have any reviews for this movie.</NoDataStyled>
      )}
      {error && Notify.failure(error.message)}
      {loading && <Loader />}
    </>
  );
};

export default Reviews;
