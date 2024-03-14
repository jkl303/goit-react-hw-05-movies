import { FiUser } from 'react-icons/fi';
import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const ReviewsWrapper = styled.div`
  padding: 26px 20px;
  border-radius: 16px;
  background-color: var(--bgSec);
  ${mediaQueries('tablet')`
  padding: 30px;`}
`;

export const ReviewsStyled = styled.ul`
  li:not(:last-child) {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 10px;
    color: var(--title);
  }
`;

export const UserIcon = styled(FiUser)`
  width: 20px;
  height: 20px;
  color: var(--title);
`;
