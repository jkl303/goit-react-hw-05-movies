import PropTypes from 'prop-types';
import { DetailsStyled, MainInfoStyled } from './Details.styled';
import { randomStubImg } from 'images/images';

export const Details = ({ details }) => {
  const { poster_path, tagline, vote_average, vote_count } = details;

  return (
    <DetailsStyled>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : randomStubImg()
        }
        alt={details.title || details.name}
        loading="lazy"
      />
      <MainInfoStyled>
        <h1>{details.title || details.name}</h1>
        <p>
          <span>User score: </span>
          {`${vote_average && vote_average.toFixed(2)} (${vote_count})`}
        </p>
        {tagline && (
          <p>
            <span>Tagline: </span>
            {`"${tagline}"`}
          </p>
        )}
        {details.runtime ? (
          <>
            <p>
              <span>Release date: </span>
              {details.release_date}
            </p>
            <p>
              <span>Runtime: </span>
              {`${details.runtime} min`}
            </p>
          </>
        ) : (
          <>
            <p>
              <span>First air date: </span>
              {details.first_air_date}
            </p>
            <p>
              <span>Number of seasons: </span>
              {details.number_of_seasons}
            </p>
            <p>
              <span>Number of episodes: </span>
              {details.number_of_episodes}
            </p>
            <p>
              <span>Episode runtime: </span>
              {`${details.episode_run_time} min`}
            </p>
          </>
        )}
      </MainInfoStyled>
    </DetailsStyled>
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    number_of_seasons: PropTypes.number,
    number_of_episodes: PropTypes.number,
    episode_run_time: PropTypes.arrayOf(PropTypes.number),
  }),
};
