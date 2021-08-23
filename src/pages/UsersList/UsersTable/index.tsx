import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { SimpleTable, ColumnProps } from '../../../components';

import { useUsers } from '../../../hooks';

import { useStyles } from './styles';

export type UserTableProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  albumsQty: number;
};

export const UsersTable = (): JSX.Element => {
  const classes = useStyles();
  const { push } = useHistory();
  const { filteredUsers, requestUsersList } = useUsers();

  const tableColumns: ColumnProps<UserTableProps, keyof UserTableProps>[] = [
    {
      key: 'name',
      header: 'Nome'
    },
    {
      key: 'email',
      header: 'Email'
    },
    {
      key: 'phone',
      header: 'Telefone'
    },
    {
      key: 'website',
      header: 'WebSite'
    },
    {
      key: 'albumsQty',
      header: 'Qtde Álbuns'
    }
  ];

  useEffect(() => {
    requestUsersList();
  }, [requestUsersList]);

  return (
    <Box className={classes.tableBox} component='main'>
      <SimpleTable
        data={filteredUsers}
        columns={tableColumns}
        actionButton={{
          text: 'Detalhes',
          onActionButtonClicked: (rowData) => push(`usuarios/${rowData.id}`)
        }}
      />
    </Box>
  );
};
