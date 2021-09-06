import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #FFCA2E;
    --black: #111111;
    --white: #fefefe;
    --regular: 400;
    --medium: 500;
    --bold: 700;
    --extraBold: 900;
    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  html {
    font-family: sans-serif;
    font-family: 'Montserrat', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default GlobalStyle;
