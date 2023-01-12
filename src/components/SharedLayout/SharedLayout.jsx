import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledLink } from './Header.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
