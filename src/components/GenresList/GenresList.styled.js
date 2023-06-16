import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const GenresListStyled = styled.div`
  position: absolute;
  z-index: 1;
  background-color: var(--bgSec);
  animation: toBottom 300ms linear;
  ${mediaQueries('tablet')`width: 40%;
  border-bottom-right-radius: 16px;`}
  ul {
    display: flex;
    padding: 10px 0 20px;
    flex-wrap: wrap;
    gap: 10px 16px;
    justify-content: center;
  }
`;

export const GenreLinkStyled = styled(NavLink)`
  padding: 6px 10px;
  border-radius: 6px;
  transition: background-color 250ms ease;
  &.active {
    color: var(--title);
  }
  :hover,
  :focus {
    background-color: var(--hover);
  }
`;
