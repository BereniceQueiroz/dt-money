import React from 'react';
import GlobalStyle from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { TransactionsProvider } from 'hooks/useTransactions';
import Router from './router';

function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  );
}

export default App;
