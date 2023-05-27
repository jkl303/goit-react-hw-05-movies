import { GenresList } from 'components/GenresList/GenresList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEndpoint, setTitle } from 'redux/slices';

export const Filter = () => {
  const [isShowMovieGenres, setIsShowMovieGenres] = useState(false);
  const [isShowTVGenres, setIsShowTVGenres] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeType = type => {
    let title = ' ';

    switch (type) {
      case 'tv':
        title = ' TV shows ';
        break;
      case 'movie':
        title = ' movies ';
        break;
      default:
        title = ' ';
    }

    dispatch(setEndpoint(`/trending/${type}/day?language=en-US`));
    dispatch(setTitle(`Trending${title}today`));
    navigate('/', { replace: true });
  };

  return (
    <ul>
      <li>
        <button type="button" onClick={() => changeType('all')}>
          All
        </button>
      </li>
      <li
        onMouseOver={() => setIsShowMovieGenres(true)}
        onMouseOut={() => setIsShowMovieGenres(false)}
      >
        <button type="button" onClick={() => changeType('movie')}>
          Movies
        </button>
        {isShowMovieGenres && <GenresList type={'movie'} />}
      </li>
      <li
        onMouseOver={() => setIsShowTVGenres(true)}
        onMouseOut={() => setIsShowTVGenres(false)}
      >
        <button type="button" onClick={() => changeType('tv')}>
          TV Shows
        </button>
        {isShowTVGenres && <GenresList type={'tv'} />}
      </li>
    </ul>
  );
};
