import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body, button, input, label, textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default GlobalStyles;
