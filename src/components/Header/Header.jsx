import { SearchForm } from 'components/SearchForm/SearchForm';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Movies</button>
        </li>
        <li>
          <button>TV Shows</button>
        </li>
      </ul>
      <SearchForm />
    </header>
  );
};
