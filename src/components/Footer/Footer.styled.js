import styled from 'styled-components';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';
import { mediaQueries } from 'styles/mediaQueries';

export const FooterStyled = styled.footer`
  background-color: var(--bgSec);
  padding: 24px 0;
  a {
    color: var(--title);
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${mediaQueries('tablet')`flex-direction: row;
  align-items: baseline;
  justify-content: space-around;`}
`;

export const SocialListStyled = styled.ul`
  display: flex;
  margin-top: 16px;
  justify-content: space-around;

  a {
    svg {
      transition: transform 250ms ease;
    }

    :hover,
    :focus {
      svg {
        transform: translateY(-4px);
      }
    }
  }
`;

export const GitHubIcon = styled(BsGithub)`
  width: 28px;
  height: 28px;
`;

export const TelegramIcon = styled(BsTelegram)`
  width: 28px;
  height: 28px;
`;

export const LinkedInIcon = styled(BsLinkedin)`
  width: 28px;
  height: 28px;
`;
