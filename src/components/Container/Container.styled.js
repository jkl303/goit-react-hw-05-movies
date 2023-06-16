import { mediaQueries } from 'styles/mediaQueries';

const { default: styled } = require('styled-components');

export const ContainerStyled = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 375px;
  overflow: hidden;

  ${mediaQueries('tablet')`max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;`}

  ${mediaQueries('tablet')`max-width: 1280px;`}
`;
