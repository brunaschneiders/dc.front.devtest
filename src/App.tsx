import React from 'react';
import { Container } from '@material-ui/core';

import { Routes } from './routes';

import { useStyles } from './styles/main';
import './styles/mainStyles.css';

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.container} component='main'>
      <Routes />
    </Container>
  );
};

export default App;
