import { MainSection } from 'components/MainSection/MainSection';
import { useParams, useSearchParams } from 'react-router-dom';

const Home = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  let endpoint = '/trending/all/day?language=en-US&page=1';
  let title = 'Trending today';

  if (params.type && !params.id) {
    if (params.type === 'search') {
      const query = searchParams.get('query');
      endpoint = `/search/movie?language=en-US&query=${query}`;
      title = `Search results for "${query}"`;
    } else {
      endpoint = `/trending/${params.type}/day?language=en-US`;
      title = `Trending ${params.type === 'tv' ? 'TV shows' : 'movies'}`;
    }
  }

  if (params.type && params.id) {
    endpoint = `/discover/${params.type}?language=en-US&with_genres=${params.id}`;
    title = `Trending ${params.name} ${
      params.type === 'tv' ? 'TV shows' : 'movies'
    }`;
  }

  return <MainSection endpoint={`${endpoint}`} title={title} />;
};

export default Home;
