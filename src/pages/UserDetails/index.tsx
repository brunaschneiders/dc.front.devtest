import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { UserCard, Header, Button } from '../../components';
import { UserVerticalTable } from './UserVerticalTable';

import { useUsers } from '../../hooks';

import { useStyles } from './styles';

export const UserDetails = (): JSX.Element => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();
  const { push, goBack } = useHistory();
  const { pathname } = useLocation();
  const { activeUser, requestUserDetails } = useUsers();

  useEffect(() => {
    requestUserDetails(Number(userId));
  }, [userId, requestUserDetails]);

  return (
    <>
      <Header
        title='Detalhes do usuário'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

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
    </>
  );
};
