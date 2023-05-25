import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('pages/Home/Home'));
const Details = lazy(() => import('pages/Details/Details'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
