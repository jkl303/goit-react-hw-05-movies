import { fetch } from 'API';
import { Pages } from 'components/Pages/Pages';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const MainSection = ({ endpoint, title }) => {
  const location = useLocation();
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowDetails, setIsShowDetails] = useState(false);

  console.log(data.results);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${endpoint}&page=${params.page || 1}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, [endpoint, params.page]);

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {data.results &&
          data.results.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={`/details/${
                    item.media_type ? item.media_type : params.type
                  }/${item.id}`}
                  state={{ from: location }}
                >
                  <img
                    src={
                      item.poster_path &&
                      `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    }
                    alt={item.title || item.name}
                    width={100}
                  />
                  {item.title || item.name}
                  <div
                    onMouseOver={() => setIsShowDetails(true)}
                    onMouseOut={() => setIsShowDetails(false)}
                  >
                    Show details
                  </div>
                </Link>
                {isShowDetails && (
                  <div
                    onMouseOver={() => setIsShowDetails(true)}
                    onMouseOut={() => setIsShowDetails(false)}
                  >
                    <Link
                      to={`/details/${
                        item.media_type ? item.media_type : params.type
                      }/${item.id}`}
                      state={{ from: location }}
                    >
                      {item.title || item.name}
                    </Link>
                    <p>User score: {item.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{item.overview}</p>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
      <Pages totalPages={data.total_pages} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </section>
  );
};
