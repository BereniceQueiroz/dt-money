import React from 'react';
import GlobalStyle from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
