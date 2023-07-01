import styled from 'styled-components';
import { mediaQueries } from './mediaQueries';

export const NoDataStyled = styled.p`
  padding: 26px 20px;
  border-radius: 16px;
  border-top-left-radius: ${props => props.cast && '0px'};
  background-color: var(--bgSec);
  color: var(--text);
  ${mediaQueries('tablet')`
  padding: 30px;`}
`;
