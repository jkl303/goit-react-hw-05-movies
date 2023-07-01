import PropTypes from 'prop-types';
import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { GenreLinkStyled, GenresListStyled } from './GenresList.styled';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const GenresList = ({ type, closeFn }) => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      try {
        setLoading(true);
        const {
          data: { genres },
        } = await fetch(`/genre/${type}/list`);
        setGenres(genres);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getGenres();
  }, [type]);

  return (
    <GenresListStyled onMouseOver={() => closeFn(type)} onMouseOut={closeFn}>
      <Container>
        <ul>
          {genres &&
            genres.map(genre => {
              const { id, name } = genre;
              return (
                <li key={id}>
                  <GenreLinkStyled
                    to={`${type}/${id}/${name.toLowerCase()}`}
                    onClick={closeFn}
                  >
                    {name}
                  </GenreLinkStyled>
                </li>
              );
            })}
        </ul>
        {error && Notify.failure(error.message)}
        {loading && <Loader />}
      </Container>
    </GenresListStyled>
  );
};

GenresList.propTypes = { type: PropTypes.string.isRequired };
