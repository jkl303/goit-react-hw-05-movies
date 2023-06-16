import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const PageListStyled = styled.ul`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  ${mediaQueries('tablet')`
  margin: 40px auto 0 auto;
  width: 500px;`}
  ${mediaQueries('desktop')`
  margin-top: 50px;
  width: 500px;`}

  a {
    padding: 6px 2px;
    &.active {
      color: var(--title);
    }
  }
`;

export const PrevIcon = styled(FiArrowLeftCircle)`
  width: 24px;
  height: 24px;
`;

export const NextIcon = styled(FiArrowRightCircle)`
  width: 24px;
  height: 24px;
`;
