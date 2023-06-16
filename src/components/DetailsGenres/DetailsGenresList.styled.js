import styled from 'styled-components';

export const DetailsGenresListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li:not(:last-child)::after {
    content: ',\f100';
  }
  a {
    padding: 10px 0;
  }
`;
