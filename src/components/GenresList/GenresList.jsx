import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { GenreLinkStyled, GenresListStyled } from './GenresList.styled';
import { Container } from 'components/Container/Container';

export const GenresList = ({ type, closeFn }) => {
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
      </Container>
    </GenresListStyled>
  );
};
