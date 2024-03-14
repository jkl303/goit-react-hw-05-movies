import PropTypes from 'prop-types';
import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Pages } from 'components/Pages/Pages';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { ItemListStyled, MainSectionStyled } from './MainSection.styled';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const MainSection = ({
  endpoint = '/trending/all/day?language=en-US&page=1',
  title = 'Trending today',
}) => {
  const params = useParams();

  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${endpoint}&page=${params.page || 1}`);
        response.data.total_results > 0 ? setData(response.data) : setData([]);
        window.scrollTo({ top: 0 });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, [endpoint, params.page]);

  return (
    <MainSectionStyled>
      <Container>
        <h1>{title}</h1>
        <ItemListStyled>
          {useEffect &&
            data.results.length > 0 &&
            data.results.map(item => {
              return (
                <li key={item.id}>
                  <ItemCard item={item} type={item.media_type || params.type} />
                </li>
              );
            })}
          {useEffect && data.results.length < 1 && !loading && (
            <p>We can't find anything for this query:(</p>
          )}
        </ItemListStyled>
        {error && Notify.failure(error.message)}
        {loading && <Loader />}
        {useEffect && data.results.length > 0 && (
          <Pages totalPages={data.total_pages} />
        )}
      </Container>
    </MainSectionStyled>
  );
};

MainSection.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string,
};
