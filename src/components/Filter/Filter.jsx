import useWindowWidth from 'hooks/useWindowWidth';
import { FilterStyled, ListIcon, XIcon } from './Filter.styled';
import { FilterLink } from './Filter.styled';

export const Filter = ({ closeFn, isShowMovieGenres, isShowTVGenres }) => {
  const width = useWindowWidth();

  return (
    <FilterStyled>
      <FilterLink to={'/'} onClick={closeFn}>
        All
      </FilterLink>
      <FilterLink
        to={'movie/'}
        onMouseOver={() => width > 1279 && closeFn('movie')}
        onMouseOut={closeFn}
        onFocus={() => width > 1279 && closeFn('movie')}
        onBlur={closeFn}
        onClick={closeFn}
      >
        Movies
      </FilterLink>
      {width < 1280 && (
        <button
          type="button"
          onClick={() => {
            closeFn('movie');
          }}
        >
          {isShowMovieGenres ? <XIcon /> : <ListIcon />}
        </button>
      )}
      <FilterLink
        to={'tv/'}
        onMouseOver={() => width > 1279 && closeFn('tv')}
        onMouseOut={closeFn}
        onFocus={() => width > 1279 && closeFn('tv')}
        onBlur={closeFn}
        onClick={closeFn}
      >
        TV Shows
      </FilterLink>
      {width < 1280 && (
        <button
          type="button"
          onClick={() => {
            closeFn('tv');
          }}
        >
          {isShowTVGenres ? <XIcon /> : <ListIcon />}
        </button>
      )}
    </FilterStyled>
  );
};
