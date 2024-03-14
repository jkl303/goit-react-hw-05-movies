import { FiArrowLeft } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BGImgDesk from '../../images/BGImgDesk.jpg';

export const DetailsSectionStyled = styled.section`
  padding: 20px 0 30px;
  @media screen and (min-width: 1280px) {
    background-image: url(${BGImgDesk});
    background-size: auto;
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
  transition: border-color 250ms ease;

  :hover {
    border-color: var(--title);
    svg {
      color: var(--title);
    }
  }
`;

export const AdditionalLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px 0;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--title);
  transition: background-color 400ms ease, border-radius 400ms ease;

  :hover {
    background-color: var(--bgSec);
  }

  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: var(--bgSec);
  }
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 20px;
  height: 20px;
  color: var(--text);
  transition: color 250ms ease;
`;
