import { useEffect } from 'react';
import { fetchItems } from 'redux/operations';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getEndpoint, getPage, getTitle } from 'redux/selectors';

export const MainSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, isLoading, error } = useSelector(getItems);
  const endpoint = useSelector(getEndpoint);
  const title = useSelector(getTitle);
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(fetchItems(`${endpoint}&page=${page}`));
  }, [dispatch, endpoint, page]);

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                {item.title || item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </section>
  );
};
