import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { toast } from 'react-toastify';

import { UserCard, Header, Button, Spinner } from '../../components';
import { UserVerticalTable } from './UserVerticalTable';

import { useUsers, useLoading } from '../../hooks';

import { useStyles } from './styles';

export const UserDetails = (): JSX.Element => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();
  const { push, goBack } = useHistory();
  const { pathname } = useLocation();
  const { activeUser, requestUserDetails } = useUsers();
  const { isLoading } = useLoading();

  useEffect(() => {
    const getUsersDetails = async () => {
      try {
        await requestUserDetails(Number(userId));
      } catch (error) {
        toast.error(
          'Ops... Algo deu errado ao buscar os dados, tente novamente!'
        );
      }
    };

    getUsersDetails();
  }, [userId, requestUserDetails]);

  return (
    <>
      {isLoading && <Spinner />}
      <Header
        title='Detalhes do usuário'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />
      {!isLoading && (
        <Box className={classes.box} component='main'>
          <Box className={classes.userCardBox}>
            <UserCard
              name={activeUser.name}
              company={activeUser.company?.name}
              onShowAlbunsButtonClicked={() => push(`${pathname}/albums`)}
            />
          </Box>

          <Box className={classes.tableBox}>
            <UserVerticalTable />
          </Box>
        </Box>
      )}
    </>
  );
};
