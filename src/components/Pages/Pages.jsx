import { Link, NavLink, useParams } from 'react-router-dom';

export const Pages = ({ totalPages }) => {
  const params = useParams();
  const current = Number(params.page) || 1;
  const total = totalPages <= 500 ? totalPages : 500;

  let pages = [];
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

  return (
    <ul>
      {current !== 1 && (
        <li>
          <Link to={`page/${current - 1}`}>prev</Link>
        </li>
      )}
      <li>
        <NavLink to={`page/1`}>1</NavLink>
      </li>
      {current > 6 && <span>...</span>}
      {pages
        .filter(page => page !== 1 && page !== total)
        .map(page => (
          <li key={page}>
            <NavLink to={`page/${page}`}>{page}</NavLink>
          </li>
        ))}
      {current < total - 5 && <span>...</span>}
      <li>
        <NavLink to={`page/${total}`}>{total}</NavLink>
      </li>
      {current !== total && (
        <li>
          <Link to={`page/${current + 1}`}>next</Link>
        </li>
      )}
    </ul>
  );
};
