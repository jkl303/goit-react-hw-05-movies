import { Link, useParams } from 'react-router-dom';
import { DetailsGenresListStyled } from './DetailsGenresList.styled';

export const DetailsGenres = ({ genres }) => {
  const { type } = useParams();

  return (
    <>
      <h2>Genres</h2>
      <DetailsGenresListStyled>
        {genres &&
          genres.map(genre => {
            const { id, name } = genre;

            return (
              <li key={id}>
                <Link to={`/${type}/${id}/${name.toLowerCase()}`}>{name}</Link>
              </li>
            );
          })}
      </DetailsGenresListStyled>
    </>
  );
};
