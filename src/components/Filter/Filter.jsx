import { GenresList } from 'components/GenresList/GenresList';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Filter = () => {
  const [isShowMovieGenres, setIsShowMovieGenres] = useState(false);
  const [isShowTVGenres, setIsShowTVGenres] = useState(false);

  return (
    <ul>
      <li>
        <Link to={'/'}>All</Link>
      </li>
      <li
        onMouseOver={() => setIsShowMovieGenres(true)}
        onMouseOut={() => setIsShowMovieGenres(false)}
      >
        <Link to={'movie/'}>Movies</Link>
        {isShowMovieGenres && <GenresList type={'movie'} />}
      </li>
      <li
        onMouseOver={() => setIsShowTVGenres(true)}
        onMouseOut={() => setIsShowTVGenres(false)}
      >
        <Link to={'tv/'}>TV Shows</Link>
        {isShowTVGenres && <GenresList type={'tv'} />}
      </li>
    </ul>
  );
};
