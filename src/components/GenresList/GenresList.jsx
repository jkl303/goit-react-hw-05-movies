import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEndpoint, setTitle } from 'redux/slices';

export const GenresList = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const {
          data: { genres },
        } = await fetch(`/genre/${type}/list`);
        setGenres(genres);
      } catch (error) {
        alert(error.message);
      }
    };
    getGenres();
  }, [type]);

  const searchByGenre = (genreName, genreId) => {
    dispatch(
      setEndpoint(`/discover/${type}?language=en-US&with_genres=${genreId}`)
    );
    dispatch(
      setTitle(
        `Most popular ${genreName.toLowerCase()} ${
          type === 'tv' ? 'TV shows' : 'movies'
        }`
      )
    );
    navigate('/', { replace: true });
  };

  return (
    <ul>
      {genres &&
        genres.map(genre => {
          const { id, name } = genre;
          return (
            <li key={id}>
              <button type="button" onClick={() => searchByGenre(name, id)}>
                {name}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
