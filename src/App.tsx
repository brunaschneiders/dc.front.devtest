import React from 'react';
import { Container } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';
import { AppProvider } from './contexts/AppContext';

import { useStyles } from './styles/main';
import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <AppProvider>
        <Routes />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </Container>
  );
};

export default App;
