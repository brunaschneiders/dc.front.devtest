import React from 'react';
import { Container } from '@material-ui/core';

import { Routes } from './routes';
import { AppProvider } from './contexts/AppContext';

import { useStyles } from './styles/main';
import './styles/styles.css';

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Container>
  );
};

export default App;
