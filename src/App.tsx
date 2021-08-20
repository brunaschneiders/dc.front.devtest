import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { Routes } from './routes';

import { theme } from './styles/theme';
import { GlobalCss } from './styles/global';
import './styles/mainStyles.css';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
