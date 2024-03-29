import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'API';
import { CastStyled, CastWrapper } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NoDataStyled } from 'styles/NoDataMessage.styled';

const Cast = () => {
  const { id, type } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const cast = await fetch(
          `/${type === 'search' ? 'movie' : type}/${id}/credits`
        );
        setCast(cast.data.cast);
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [id, type]);

  return (
    <>
      {useEffect && (
        <CastWrapper>
          {cast.length > 0 && (
            <CastStyled>
              {cast.slice(0, 6).map(({ id, profile_path, name, character }) => {
                return (
                  <li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                      loading="lazy"
                    ></img>
                    <div>
                      <h3>{name}</h3>
                      <p>{character}</p>
                    </div>
                  </li>
                );
              })}
            </CastStyled>
          )}
          {useEffect && cast.length < 1 && !loading && (
            <NoDataStyled cast={true}>Cast unavailable</NoDataStyled>
          )}
          {error && Notify.failure(error.message)}
          {loading && <Loader white />}
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;
