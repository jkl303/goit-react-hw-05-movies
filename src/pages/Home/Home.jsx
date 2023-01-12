import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const trendingMovies = await fetchMovies('/trending/movie/day');
        setTrending(trendingMovies.data.results);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
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
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
