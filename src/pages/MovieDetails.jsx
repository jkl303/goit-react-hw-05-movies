import { NavLink, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const MovieDetails = await fetchMovies(`/movie/${movieId}`);
        setMovieDetails(MovieDetails.data);
      } catch {
        setError('Something went wrong. Please try again.');
      }
    };
    getMovieDetails();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <div>
      <NavLink to="/">Go back</NavLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres !== undefined
            ? genres
                .map(({ name }) => {
                  return name;
                })
                .join(', ')
            : null}
        </p>
      </div>
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      {error && <p>{error}</p>}
      <Outlet />
    </div>
  );
};
