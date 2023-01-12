import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchForm } from './SearchForm.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchMovie = async () => {
      try {
        setLoading(true);
        const searchedMovies = await fetchMovies(
          `/search/movie?query=${query}`
        );
        if (searchedMovies.data.results.length < 1) {
          setResults([]);
          alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        } else {
          setResults(searchedMovies.data.results);
        }
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    query !== null && searchMovie();
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    const val = e.target.elements.input.value;
    val === '' ? alert('Type something!') : setSearchParams({ query: val });
    e.target.elements.input.value = '';
  };

  return (
    <div>
      <SearchForm onSubmit={onSearch}>
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
      </SearchForm>
      <ul>
        {query &&
          results.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
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

export default Movies;
