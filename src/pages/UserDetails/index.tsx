import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { UserCard, Header, Button } from '../../components';
import { UserVerticalTable } from './UserVerticalTable';

import jsonPlaceholderService from '../../services/jsonPlaceholderService';

import { theme } from '../../styles/theme';
import { useStyles } from './styles';

export type AddressProps = {
  street: string;
  suite: string;
  city: string;
};

export type UserProps = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: { name: string };
  address: AddressProps;
};

export const UserDetails = (): JSX.Element => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();
  const { push, location, goBack } = useHistory();

  const [user, setUser] = useState({} as UserProps);

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      if (!Number(userId)) return;

      try {
        const response = await jsonPlaceholderService.getUserById(
          Number(userId)
        );
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [userId]);

  return (
    <>
      <Header
        title='Detalhes do usuário'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

      <Box className={classes.box} marginTop={theme.spacing(0.5)}>
        <Box className={classes.userCardBox}>
          <UserCard
            name={user.name}
            company={user.company?.name}
            onShowAlbunsButtonClicked={() =>
              push(`${location.pathname}/albums`)
            }
          />
        </Box>

        <Box className={classes.tableBox}>
          <UserVerticalTable data={user} />
        </Box>
      </Box>
    </>
  );
};
