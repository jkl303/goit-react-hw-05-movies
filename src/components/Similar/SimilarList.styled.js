import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const SimilarListStyled = styled.ul`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  ${mediaQueries('tablet')`
  flex-direction: row;
  flex-wrap: wrap;`}
  ${mediaQueries('desktop')`
  gap: 30px 26px;`}
`;
