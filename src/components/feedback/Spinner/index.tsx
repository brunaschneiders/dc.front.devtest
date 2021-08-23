import React from 'react';
import {
  Container,
  CircularProgress,
  CircularProgressProps
} from '@material-ui/core';

import { useStyles } from './styles';

export const Spinner = ({ ...props }: CircularProgressProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Container data-testid='spinner-element' className={classes.container}>
      <CircularProgress color='secondary' {...props} />
    </Container>
  );
};
