import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mediaQueries('tablet')`
  flex-direction: row;
  gap: 30px;`}

  img {
    width: 100%;
    border-radius: 10px;
    ${mediaQueries('tablet')`
    width: 222px;
    height: 333px;`}
  }
`;

export const MainInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${mediaQueries('tablet')`gap: 20px;`}

  h1 {
    text-align: center;
    ${mediaQueries('tablet')`text-align: left;`}
  }

  span {
    font-weight: bold;
  }
`;
