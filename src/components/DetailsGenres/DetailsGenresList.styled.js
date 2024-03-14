import styled from 'styled-components';

export const DetailsGenresListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li:not(:last-child)::after {
    content: ',\xa0';
  }
  transition: color 250ms ease;

  a {
    padding: 10px 0;
    :hover,
    :focus {
      color: var(--title);
    }
  }
`;
