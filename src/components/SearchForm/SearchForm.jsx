import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getItems } from 'redux/selectors';
import { setEndpoint, setTitle } from 'redux/slices';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { items } = useSelector(getItems);

  useEffect(() => {
    if (query !== null) {
      navigate('/', { replace: true });
      dispatch(setEndpoint(`/search/multi?language=en-US&query=${query}`));
      dispatch(
        setTitle(
          `${
            items.length < 1 ? 'Nothing found' : `Search results for "${query}"`
          }`
        )
      );
    }
  }, [dispatch, navigate, query, items]);

  const onSearch = e => {
    e.preventDefault();
    let { value } = e.target.elements.input;
    if (value.trim() === '') {
      alert('Type something!');
    } else {
      setSearchParams({ query: value });
    }
    value = '';
  };

  return (
    <form onSubmit={onSearch}>
      <input
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
