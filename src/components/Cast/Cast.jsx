import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'API';

const Cast = () => {
  const { id, type } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const cast = await fetch(`/${type}/${id}/credits`);
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
    <div>
      <ul>
        {useEffect &&
          cast.slice(0, 5).map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Cast;
