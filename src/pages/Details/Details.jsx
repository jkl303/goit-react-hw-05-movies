import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetch } from 'API';
import { Container } from 'components/Container/Container';
import { randomStubImg } from 'images/images';
import {
  AdditionalLink,
  BackIcon,
  BackLink,
  DetailsSectionStyled,
  DetailsWrapper,
  MainInfoStyled,
} from './Details.styled';
import { DetailsGenres } from 'components/DetailsGenres/DetailsGenres';
import { Similar } from 'components/Similar/Similar';

const Details = () => {
  const { id, type } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetch(`/${type}/${id}`);
        setDetails(data);
        window.scrollTo({ top: 0 });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id, type]);

  const { poster_path, tagline, vote_average, vote_count, overview, genres } =
    details;

  return (
    <DetailsSectionStyled>
      <Container>
        <BackLink to={backLinkHref}>
          <BackIcon />
        </BackLink>
        <DetailsWrapper>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : randomStubImg()
            }
            alt={details.title || details.name}
          />
          <MainInfoStyled>
            <h1>{details.title || details.name}</h1>
            <p>
              <span>User score: </span>
              {`${vote_average && vote_average.toFixed(2)} (${vote_count})`}
            </p>
            {tagline && (
              <p>
                <span>Tagline: </span>
                {`"${tagline}"`}
              </p>
            )}
            {details.runtime ? (
              <>
                <p>
                  <span>Release date: </span>
                  {details.release_date}
                </p>
                <p>
                  <span>Runtime: </span>
                  {`${details.runtime} min`}
                </p>
              </>
            ) : (
              <>
                <p>
                  <span>First air date: </span>
                  {details.first_air_date}
                </p>
                <p>
                  <span>Number of seasons: </span>
                  {details.number_of_seasons}
                </p>
                <p>
                  <span>Number of episodes: </span>
                  {details.number_of_episodes}
                </p>
                <p>
                  <span>Episode runtime: </span>
                  {`${details.episode_run_time} min`}
                </p>
              </>
            )}
          </MainInfoStyled>
        </DetailsWrapper>
        <h2>Overview</h2>
        <p>{overview}</p>
        <DetailsGenres genres={genres} />
        <h2>Additional information</h2>
        <AdditionalLink to="cast">Cast</AdditionalLink>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Similar />
    </DetailsSectionStyled>
  );
};

export default Details;
