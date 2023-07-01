import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { HoverInfoStyled } from './HoverInfo.styled';

export const HoverInfo = ({ item, setIsShowDetails }) => {
  const location = useLocation();

  return (
    <HoverInfoStyled
      onMouseOver={() => {
        setIsShowDetails(true);
      }}
      onMouseOut={() => setIsShowDetails(false)}
    >
      <Link
        to={`/details/${item.media_type ? item.media_type : 'movie'}/${
          item.id
        }`}
        state={{ from: location }}
      >
        {item.title || item.name}
      </Link>
      <p>
        <span>User score:</span> {item.vote_average.toFixed(2)}
      </p>
      <p>
        <span>Overview:</span> {item.overview.slice(0, 200) + '...'}
      </p>
    </HoverInfoStyled>
  );
};

HoverInfo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    media_type: PropTypes.string,
  }),
};
