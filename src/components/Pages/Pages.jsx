import PropTypes from 'prop-types';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom';
import { NextIcon, PageListStyled, PrevIcon } from './PagesList.styled';

export const Pages = ({ totalPages }) => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const current = Number(params.page) || 1;
  const total = totalPages <= 500 ? totalPages : 500;

  let pages = [];

  const getLink = page => {
    if (params.type === 'search') {
      const query = searchParams.get('query');
      return `page/${page}?query=${query}`;
    } else {
      return `page/${page}`;
    }
  };

  if (total < 10) {
    for (let i = 2; i < total; i += 1) {
      pages.push(i);
    }
  } else {
    let middlePage = 6;

    if (current > total - 5) {
      middlePage = total - 5;
    }

    if (current > 5 && current < total - 4) {
      middlePage = current;
    }

    for (let i = middlePage - 4; i < middlePage + 5; i += 1) {
      pages.push(i);
    }
  }

  if (total > 1)
    return (
      <PageListStyled>
        {current !== 1 && (
          <li>
            <Link to={getLink(current - 1)}>
              <PrevIcon />
            </Link>
          </li>
        )}
        <li>
          <NavLink to={getLink(1)}>1</NavLink>
        </li>
        {current > 6 && <span>...</span>}
        {pages
          .filter(page => page !== 1 && page !== total)
          .map(page => (
            <li key={page}>
              <NavLink to={getLink(page)}>{page}</NavLink>
            </li>
          ))}
        {current < total - 5 && <span>...</span>}
        <li>
          <NavLink to={getLink(total)}>{total}</NavLink>
        </li>
        {current !== total && (
          <li>
            <Link to={getLink(current + 1)}>
              <NextIcon />
            </Link>
          </li>
        )}
      </PageListStyled>
    );
};

Pages.propTypes = { totalPages: PropTypes.number.isRequired };
