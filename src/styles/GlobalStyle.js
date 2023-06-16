import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { variables } from './variables';
import { animations } from './animations';

export const GlobalStyle = createGlobalStyle`

${variables}
${animations}

body {color: var(--text);
  background-color: var(--bg);
  font-family: 'Rubik', sans-serif;
  line-height: 1.5;
}

h1,
h2,
h3,
p {
  margin: 0;
  
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{text-decoration:none;
color: var(--text);}
`;
