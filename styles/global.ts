import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundPage};
  }

  html, body, #__next {
    min-height: 100%;
  }
`;
