import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(query);

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
            'Sorry, there are no movies matching your search queryuery. Please try again.'
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
    if (query !== null) searchMovie();
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    const val = e.target.elements.input.value;
    val === '' ? alert('Type something!') : setSearchParams({ query: val });
    e.target.elements.input.value = '';
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={onSearch}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          name="input"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <ul>
        {query &&
          results.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
