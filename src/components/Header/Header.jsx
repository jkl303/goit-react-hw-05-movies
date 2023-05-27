import { Filter } from 'components/Filter/Filter';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Header = () => {
  return (
    <header>
      <Filter />
      <SearchForm />
    </header>
  );
};
