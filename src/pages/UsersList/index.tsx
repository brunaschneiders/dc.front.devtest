import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';

import { Input, Header } from '../../components';
import { UsersTable } from './UsersTable';

import { useUsers } from '../../hooks';

export const UsersList = (): JSX.Element => {
  const { onChangeQueryUser } = useUsers();

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
            onChange={(event) => onChangeQueryUser(event.target.value)}
          />
        }
      />

      <UsersTable />
    </>
  );
};
