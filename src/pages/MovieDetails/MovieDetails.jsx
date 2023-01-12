import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovies } from 'API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const details = await fetchMovies(`/movie/${movieId}`);
        setMovieDetails(details.data);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={200}
        />
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
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

export default MovieDetails;
