import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  return <div>Cast</div>;
};
