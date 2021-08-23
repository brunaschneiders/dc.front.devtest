import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { toast } from 'react-toastify';

import { SimpleTable, ColumnProps, Spinner } from '../../../components';

import { useUsers, useLoading } from '../../../hooks';

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
  const { isLoading } = useLoading();

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
    const getUsersList = async () => {
      try {
        await requestUsersList();
      } catch (error) {
        toast.error(
          'Ops... Algo deu errado ao buscar os dados, tente novamente!'
        );
      }
    };

    getUsersList();
  }, [requestUsersList]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
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
      )}
    </>
  );
};
