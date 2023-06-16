import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';
import { FiSearch } from 'react-icons/fi';

export const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  min-width: 85%;
  gap: 10px;
  border-radius: 4px;
  background-color: #2d2a79;
  ${mediaQueries('tablet')`
  min-width: 200px;
  width: 400px;`}
  input {
    height: 40px;
    flex-grow: 1;
    border: none;
    border-radius: 4px;
    padding: 6px;
    color: var(--text);
    background-color: #2d2a79;
    @media screen and (max-width: 768px) {
      animation: toRight 250ms linear;
    }
    :focus {
      outline: none;
    }
  }

  button {
    padding: 10px;
    @media screen and (max-width: 768px) {
      animation: toLeft 250ms linear;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 22px;
  height: 22px;
  color: var(--text);
  transition: color 250ms ease;
  :hover,
  :focus {
    color: var(--title);
  }
`;
