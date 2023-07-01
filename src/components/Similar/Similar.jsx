import { ItemCard } from 'components/ItemCard/ItemCard';
import { SimilarListStyled } from './SimilarList.styled';
import { useEffect, useState } from 'react';
import { fetch } from 'API';
import useWindowWidth from 'hooks/useWindowWidth';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Similar = () => {
  const { id, type } = useParams();
  const width = useWindowWidth();

  const [similar, setSimilar] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSimilar = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await fetch(`/${type}/${id}/recommendations?language=en-US&page=1`);
        setSimilar(results.slice(0, width > 1279 ? 5 : 3));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getSimilar();
  }, [id, type, width]);

  if (useEffect && similar.length > 0) {
    return (
      <Container>
        <h2>More like this</h2>
        <SimilarListStyled>
          {similar.map(item => {
            return (
              <li key={item.id}>
                <ItemCard item={item} type={type} />
              </li>
            );
          })}
        </SimilarListStyled>
        {error && Notify.failure(error.message)}
        {loading && <Loader />}
      </Container>
    );
  }
};
