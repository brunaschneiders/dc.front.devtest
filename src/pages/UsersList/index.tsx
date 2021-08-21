import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search as SearchIcon } from '@material-ui/icons';
import { Box } from '@material-ui/core';

import {
  Input,
  Header,
  SimpleTable,
  ColumnDefinitionType
} from '../../components';

import jsonPlaceholderService from '../../services/jsonPlaceholderService';

import { useStyles } from './styles';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  qtyAlbums: number;
};

const tableColumns: ColumnDefinitionType<UserProps, keyof UserProps>[] = [
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
    key: 'qtyAlbums',
    header: 'Quantidade Álbuns'
  }
];

export const UsersList = (): JSX.Element => {
  const { push } = useHistory();
  const { tableBox } = useStyles();

  const [users, setUsers] = useState([] as UserProps[]);
  const [filteredUsers, setFilteredUsers] = useState([] as UserProps[]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const response = await jsonPlaceholderService.getUsers();
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const handleFilterUsers = (): void => {
      const parsedQuery = query.toLowerCase();
      const result = users.filter(
        (item) =>
          item.name.toLowerCase().indexOf(parsedQuery) !== -1 ||
          item.email.toLowerCase().indexOf(parsedQuery) !== -1
      );

      setFilteredUsers(result);
    };

    handleFilterUsers();
  }, [users, query]);

  return (
    <>
      <Header
        title='Lista de usuários'
        rightContent={
          <Input
            type='text'
            name='search'
            ariaLabel='Buscar usuários'
            placeholder='Buscar usuários'
            icon={<SearchIcon color='primary' />}
            onChange={(event) => setQuery(event.target.value)}
          />
        }
      />

      <Box className={tableBox}>
        <SimpleTable
          data={filteredUsers}
          columns={tableColumns}
          actionButton={{
            text: 'Detalhes',
            onActionButtonClicked: (rowData) => push(`usuarios/${rowData.id}`)
          }}
        />
      </Box>
    </>
  );
};
