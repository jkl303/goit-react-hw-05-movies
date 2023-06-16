import styled from 'styled-components';
import { FiList, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { mediaQueries } from 'styles/mediaQueries';

export const FilterStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterLink = styled(NavLink)`
  padding: 12px 6px;
  vertical-align: top;
  border-radius: 6px;
  transition: background-color 250ms ease;
  ${mediaQueries('desktop')`padding: 23px 12px;`}
  &.active {
    color: var(--title);
  }
  :hover,
  :focus {
    background-color: var(--hover);
  }
`;

export const ListIcon = styled(FiList)`
  width: 22px;
  height: 22px;
  color: var(--text);
`;

export const XIcon = styled(FiX)`
  width: 22px;
  height: 22px;
  color: var(--text);
`;
