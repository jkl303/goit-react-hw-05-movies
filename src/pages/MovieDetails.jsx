import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <Link to="/">Go back</Link>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
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
      <Outlet />
    </div>
  );
};
