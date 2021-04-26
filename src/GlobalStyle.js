import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
