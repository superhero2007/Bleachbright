import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  
  * {
    box-sizing: border-box;
    -webkit-transition-timing-function: ease-out;
    -webkit-font-smoothing: antialiased
  }

  html,
  button,
  input,
  select,
  textarea {
    color: #5f5f5f;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.4;
  }

  #app {
    background-color: #f8f8ff;
    min-height: 100%;
    min-width: 100%;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  :focus {
    outline: 0;
  }

  textarea {
    resize: vertical;
  }
`;

export default GlobalStyle;
