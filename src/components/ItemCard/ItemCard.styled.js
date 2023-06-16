import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';
import { FiInfo } from 'react-icons/fi';

export const ItemCardStyled = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 250ms ease;
  ${mediaQueries('desktop')`:hover {
    transform: translateY(-5px);}`}

  img {
    width: 100%;
    border-radius: 12px;
    ${mediaQueries('tablet')`
    width: 222px;
    height: 333px;`}
  }

  h2 {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    ${mediaQueries('tablet')`
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;`}
  }
`;

export const InfoButtonStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
`;

export const InfoIcon = styled(FiInfo)`
  width: 22px;
  height: 22px;
  color: var(--text);
`;
