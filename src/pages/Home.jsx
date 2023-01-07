import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingMovies = await fetchMovies('/trending/movie/day');
        setTrending(trendingMovies.data.results);
      } catch {
        setError('Something went wrong. Please try again.');
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to="/movies/:movieId">{title}</NavLink>
            </li>
          );
        })}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};
