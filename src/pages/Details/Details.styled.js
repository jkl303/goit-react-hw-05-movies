import { FiArrowLeft } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';
import BGImgDesk from '../../images/BGImgDesk.jpg';

export const DetailsSectionStyled = styled.section`
  padding: 20px 0 30px;
  @media screen and (min-width: 1280px) {
    background-image: url(${BGImgDesk});
    background-size: cover;
  }

  h2 {
    margin: 20px 0 6px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-bottom: 14px;
  border: 2px solid var(--text);
  border-radius: 50%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mediaQueries('tablet')`
  flex-direction: row;
  gap: 30px;`}

  img {
    width: 100%;
    border-radius: 10px;
    ${mediaQueries('tablet')`
    width: 222px;
    height: 333px;`}
  }
`;

export const MainInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${mediaQueries('tablet')`gap: 20px;`}

  h1 {
    text-align: center;
    ${mediaQueries('tablet')`text-align: left;`}
  }

  span {
    font-weight: bold;
  }
`;

export const AdditionalLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--title);
  &.active {
    background-color: var(--bgSec);
  }
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 20px;
  height: 20px;
  color: var(--text);
`;
