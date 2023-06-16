import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 2;
  background-color: var(--bgSec);
  button {
    height: 40px;
    background: none;
    border: none;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  width: 100%;
  min-height: 60px;
  justify-content: space-between;
  align-items: center;
  ${mediaQueries('tablet')`
  min-height: 66px;`}
`;
