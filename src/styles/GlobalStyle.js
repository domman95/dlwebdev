import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --yellow: #FFCA2E;
    --regular: 400;
    --medium: 500;
    --bold: 700;
    --extraBold: 900;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default GlobalStyle;
