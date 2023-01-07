import { NavLink } from 'react-router-dom';

export const MovieDetails = id => {
  return (
    <div>
      <NavLink to="/">Go back</NavLink>
      <h2>Movie</h2>
    </div>
  );
};
