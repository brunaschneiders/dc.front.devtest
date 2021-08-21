import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { Avatar, Button } from '..';

import { useStyles } from './styles';

interface UserCardProps {
  name: string;
  company: string;
  onShowAlbunsButtonClicked: () => void;
}

export const UserCard = ({
  name,
  company,
  ...props
}: UserCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.box} {...props}>
      <Avatar size='xlarge' />
      <Box className={classes.userData} my={2.5}>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography>{company}</Typography>
      </Box>
      <Button name='showAlbums' type='button' text='Ver Álbuns' />
    </Box>
  );
};

UserCard.defaultProps = {};
