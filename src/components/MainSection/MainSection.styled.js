import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';
import BGImgDesk from '../../images/BGImgDesk.jpg';

export const MainSectionStyled = styled.section`
  padding: 20px 0 30px;
  @media screen and (min-width: 1280px) {
    background-image: url(${BGImgDesk});
    background-size: cover;
  }

  h1 {
    margin-bottom: 20px;
    color: var(--title);
    ${mediaQueries('tablet')`
  font-size: 26px;`}
    ${mediaQueries('desktop')`
  font-size: 30px;`};
  }
`;

export const ItemListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  ${mediaQueries('tablet')`
  flex-direction: row;
  flex-wrap: wrap;`}
  ${mediaQueries('desktop')`
  gap: 30px 26px;`}
`;
