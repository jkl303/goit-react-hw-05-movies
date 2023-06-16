import { fetch } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Pages } from 'components/Pages/Pages';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { ItemListStyled, MainSectionStyled } from './MainSection.styled';

export const MainSection = ({ endpoint, title }) => {
  const params = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${endpoint}&page=${params.page || 1}`);
        response.data.total_results > 0 ? setData(response.data) : setData([]);
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
          {data.results && data.results !== [] ? (
            data.results.map(item => {
              return (
                <li key={item.id}>
                  <ItemCard item={item} />
                </li>
              );
            })
          ) : (
            <p>We can't find anything for this query:(</p>
          )}
        </ItemListStyled>
        {data.results && <Pages totalPages={data.total_pages} />}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </Container>
    </MainSectionStyled>
  );
};
