import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SearchFormStyled, SearchIcon } from './SearchForm.styled';

export const SearchForm = () => {
  const navigate = useNavigate();

  const onSearch = e => {
    e.preventDefault();
    const { value } = e.target.elements.input;
    if (value.trim() === '') {
      Notify.failure('Type something!');
    } else {
      navigate(`/search?query=${value}`, { replace: true });
    }
    e.target.elements.input.value = '';
  };

  return (
    <SearchFormStyled onSubmit={onSearch}>
      <input name="input" type="text" autoComplete="off" />
      <button type="submit">
        <SearchIcon />
      </button>
    </SearchFormStyled>
  );
};
