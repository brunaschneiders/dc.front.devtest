import React from 'react';
import {
  Container,
  Box,
  CircularProgress,
  CircularProgressProps
} from '@material-ui/core';

import { useStyles } from './styles';

export const Spinner = ({ ...props }: CircularProgressProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Container data-testid='spinner-element' className={classes.container}>
      <Box className={classes.box}>
        <CircularProgress color='secondary' {...props} />
      </Box>
    </Container>
  );
};
