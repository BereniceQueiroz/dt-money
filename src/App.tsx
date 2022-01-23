import React from 'react';
import GlobalStyle from 'styles/global';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import Dashboard from 'components/Dashboard';
import theme from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
