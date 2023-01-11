import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const cast = await fetchMovies(`/movie/${movieId}/credits`);
        setMovieCast(cast.data.cast);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {useEffect &&
          movieCast.slice(0, 5).map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};
