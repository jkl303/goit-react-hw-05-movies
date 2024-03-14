import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const CastWrapper = styled.div`
  padding: 26px 20px;
  border-radius: 16px;
  border-top-left-radius: 0;
  background-color: var(--bgSec);
  ${mediaQueries('tablet')`
  padding: 30px;`}
`;

export const CastStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mediaQueries('tablet')`
  flex-direction: row;
  flex-wrap: wrap;`}

  li {
    display: flex;
    gap: 20px;
    align-items: center;
    ${mediaQueries('tablet')`
  width: 300px;`}
    ${mediaQueries('desktop')`
  width: 350px;`}

    img {
      width: 150px;
      height: 225px;
      border-radius: 8px;
    }

    h3 {
      margin-bottom: 10px;
    }
  }
`;
