import React from 'react';
import GlobalStyle from 'styles/global';
import Header from 'components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
