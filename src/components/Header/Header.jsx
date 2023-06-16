import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { SearchForm } from 'components/SearchForm/SearchForm';
import useWindowWidth from 'hooks/useWindowWidth';
import { useEffect, useState } from 'react';
import { HeaderStyled, NavStyled } from './Header.styled';
import { GenresList } from 'components/GenresList/GenresList';
import { SearchIcon } from 'components/SearchForm/SearchForm.styled';
import { XIcon } from 'components/Filter/Filter.styled';

export const Header = () => {
  const width = useWindowWidth();

  const [isShowMovieGenres, setIsShowMovieGenres] = useState(false);
  const [isShowTVGenres, setIsShowTVGenres] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(width > 767);

  const isShowFilter = width > 767 || !isShowSearch;

  const closeFn = opened => {
    switch (opened) {
      case 'search':
        setIsShowSearch(prevState => !prevState);
        setIsShowMovieGenres(false);
        setIsShowTVGenres(false);
        break;
      case 'movie':
        width < 768 && setIsShowSearch(false);
        setIsShowMovieGenres(prevState => !prevState);
        setIsShowTVGenres(false);
        break;
      case 'tv':
        width < 768 && setIsShowSearch(false);
        setIsShowMovieGenres(false);
        setIsShowTVGenres(prevState => !prevState);
        break;
      default:
        width < 768 && setIsShowSearch(false);
        setIsShowMovieGenres(false);
        setIsShowTVGenres(false);
    }
  };

  useEffect(() => {
    setIsShowSearch(width > 767);
  }, [width]);

  return (
    <>
      <HeaderStyled>
        <Container>
          <NavStyled>
            {isShowFilter && (
              <Filter
                closeFn={closeFn}
                isShowMovieGenres={isShowMovieGenres}
                isShowTVGenres={isShowTVGenres}
              />
            )}
            {isShowSearch && <SearchForm />}
            {width < 768 && (
              <button
                type="button"
                onClick={() => {
                  closeFn('search');
                }}
              >
                {!isShowSearch ? <SearchIcon /> : <XIcon />}
              </button>
            )}
          </NavStyled>
        </Container>
      </HeaderStyled>
      {isShowMovieGenres && <GenresList type={'movie'} closeFn={closeFn} />}
      {isShowTVGenres && <GenresList type={'tv'} closeFn={closeFn} />}
    </>
  );
};
