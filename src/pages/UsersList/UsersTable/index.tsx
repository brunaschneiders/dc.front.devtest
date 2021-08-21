import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { SimpleTable, ColumnDefinitionType } from '../../../components';

import { theme } from '../../../styles/theme';
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

interface UsersTableProps {
  users: UserTableProps[];
}

export const UsersTable = ({ users }: UsersTableProps): JSX.Element => {
  const { push } = useHistory();
  const classes = useStyles();

  const tableColumns: ColumnDefinitionType<
    UserTableProps,
    keyof UserTableProps
  >[] = [
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
      header: 'Quantidade Álbuns'
    }
  ];

  return (
    <Box className={classes.tableBox} marginTop={theme.spacing(0.5)}>
      <SimpleTable
        data={users}
        columns={tableColumns}
        actionButton={{
          text: 'Detalhes',
          onActionButtonClicked: (rowData) => push(`usuarios/${rowData.id}`)
        }}
      />
    </Box>
  );
};
