import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetch } from 'API';

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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id, type]);

  const { poster_path, tagline, vote_average, overview, genres } = details;

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={details.title || details.name}
          width={200}
        />
        <h2>{details.title || details.name}</h2>
        <p>User score: {vote_average}</p>
        {tagline && <p>Tagline: {`"${tagline}"`}</p>}
        {details.runtime ? (
          <div>
            <p>Release date: {details.release_date}</p>
            <p>Runtime: {`${details.runtime} min`}</p>
          </div>
        ) : (
          <div>
            <p>First air date: {details.first_air_date}</p>
            <p>Number of seasons: {details.number_of_seasons}</p>
            <p>Number of episodes: {details.number_of_episodes}</p>
            <p>Episode runtime: {`${details.episode_run_time} min`}</p>
          </div>
        )}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres &&
            genres
              .map(({ name }) => {
                return name;
              })
              .join(', ')}
        </p>
      </div>
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Details;
