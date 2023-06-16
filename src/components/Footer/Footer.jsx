import { Container } from 'components/Container/Container';
import {
  FooterContentWrapper,
  FooterStyled,
  GitHubIcon,
  LinkedInIcon,
  SocialListStyled,
  TelegramIcon,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContentWrapper>
          <p>
            All data received from{' '}
            <a href="https://www.themoviedb.org/">The Movie DB</a>
          </p>
          <div>
            <h3>Author's socials</h3>
            <SocialListStyled>
              <li>
                <a href="https://www.linkedin.com/in/vladyslav-zoz-15a8ba1a8/">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://t.me/jkl303">
                  <TelegramIcon />
                </a>
              </li>
              <li>
                <a href="https://github.com/jkl303">
                  <GitHubIcon />
                </a>
              </li>
            </SocialListStyled>
          </div>
        </FooterContentWrapper>
      </Container>
    </FooterStyled>
  );
};
