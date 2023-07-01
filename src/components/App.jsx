import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = lazy(() => import('pages/Home/Home'));
const DetailsPage = lazy(() => import('pages/DetailsPage/DetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

Notify.init({
  width: '220px',
  position: 'right-top',
  distance: '80px',
  borderRadius: '10px',
  timeout: 2000,
  showOnlyTheLastOne: true,
  fontSize: '18px',
  failure: {
    background: '#ffb914',
    textColor: '#212250',
  },
});

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/:type?/:id?/:name?" element={<Home />}>
            <Route path="page/:page" element={<Home />} />
          </Route>
          <Route path="details/:type/:id" element={<DetailsPage />}>
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
