import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const navigate = useNavigate();

  const onSearch = e => {
    e.preventDefault();
    const { value } = e.target.elements.input;
    if (value.trim() === '') {
      alert('Type something!');
    } else {
      navigate(`/search?query=${value}`, { replace: true });
    }
    e.target.elements.input.value = '';
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
