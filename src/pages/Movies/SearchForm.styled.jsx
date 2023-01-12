import styled from 'styled-components';

export const SearchForm = styled.form`
  padding: 20px;
  input {
    border-radius: 4px;
    :focus {
      border: 2px solid #a11e1e;
      outline: none;
    }
  }
  button {
    height: 24px;
    margin-left: 20px;
    color: #fff;
    background-color: #a11e1e;
    border-radius: 4px;
    border: none;
    :hover {
      cursor: pointer;
      color: #a11e1e;
      background-color: #fff;
      border: 2px solid #a11e1e;
    }
  }
`;
