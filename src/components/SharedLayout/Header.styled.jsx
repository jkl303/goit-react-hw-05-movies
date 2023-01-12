import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: 4px solid #a11e1e;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &.active {
    color: #a11e1e;
  }
`;
