import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { DetailsGenresListStyled } from './DetailsGenresList.styled';

export const DetailsGenres = ({ genres }) => {
  const { type } = useParams();

  console.log(genres[0].name);

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

DetailsGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
