import { useState, useEffect } from 'react';
import { fetch } from 'redux/operations';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/selector';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, isLoading, error } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetch('/trending/movie/day'));
  }, [dispatch]);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {items.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
