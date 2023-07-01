import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetch } from 'API';
import { Container } from 'components/Container/Container';
import {
  AdditionalLink,
  BackIcon,
  BackLink,
  DetailsSectionStyled,
} from './DetailsPage.styled';
import { DetailsGenres } from 'components/DetailsGenres/DetailsGenres';
import { Similar } from 'components/Similar/Similar';
import { Details } from 'components/Details/Details';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetch(`/movie/${id}`);
        setDetails(data);
        window.scrollTo({ top: 0 });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  return (
    <DetailsSectionStyled>
      <Container>
        <BackLink to={backLinkHref}>
          <BackIcon />
        </BackLink>
        <Details details={details} />
        <h2>Overview</h2>
        {details.overview && <p>{details.overview}</p>}{' '}
        {details.genres && <DetailsGenres genres={details.genres} />}
        <h2>Additional information</h2>
        <AdditionalLink to="cast">Cast</AdditionalLink>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
        {error && Notify.failure(error.message)}
        {loading && <Loader />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      {details.overview && <Similar />}
    </DetailsSectionStyled>
  );
};

export default DetailsPage;
