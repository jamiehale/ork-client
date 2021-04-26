import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/GlobalStyle';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];