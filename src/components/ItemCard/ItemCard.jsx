import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import useWindowWidth from 'hooks/useWindowWidth';
import { HoverInfo } from 'components/HoverInfo/HoverInfo';
import { InfoButtonStyled, InfoIcon, ItemCardStyled } from './ItemCard.styled';
import { randomStubImg } from 'images/images';
import { useState } from 'react';

export const ItemCard = ({ item, type }) => {
  const location = useLocation();
  const width = useWindowWidth();

  const [isShowDetails, setIsShowDetails] = useState(false);

  return (
    <>
      <ItemCardStyled>
        <Link to={`/details/${type}/${item.id}`} state={{ from: location }}>
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : randomStubImg()
            }
            alt={item.title || item.name}
          />
          <h2>{item.title || item.name}</h2>
        </Link>
        {width > 1280 && item.vote_count > 0 && (
          <InfoButtonStyled
            onMouseOver={() => setIsShowDetails(true)}
            onMouseOut={() => setIsShowDetails(false)}
          >
            <InfoIcon />
          </InfoButtonStyled>
        )}
        {isShowDetails && (
          <HoverInfo item={item} setIsShowDetails={setIsShowDetails} />
        )}
      </ItemCardStyled>
    </>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_count: PropTypes.number,
  }),
  type: PropTypes.string,
};
