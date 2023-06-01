import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const GenresList = ({ type }) => {
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
    <ul>
      {genres &&
        genres.map(genre => {
          const { id, name } = genre;
          return (
            <li key={id}>
              <Link to={`${type}/${id}/${name.toLowerCase()}`}>{name}</Link>
            </li>
          );
        })}
    </ul>
  );
};
