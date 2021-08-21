import React, { useEffect, useState } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';

import { Input, Header } from '../../components';
import { UsersTable, UserTableProps } from './UsersTable';

import jsonPlaceholderService from '../../services/jsonPlaceholderService';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState([] as UserProps[]);
  const [parsedUsers, setParsedUsers] = useState([] as UserTableProps[]);
  const [filteredUsers, setFilteredUsers] = useState([] as UserTableProps[]);
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
    const handleParseUsers = async (): Promise<void> => {
      try {
        const tempParsedUsers: UserTableProps[] = [];

        const albums: AlbumProps[] = await jsonPlaceholderService.getAlbums();
        users.forEach((user) => {
          tempParsedUsers.push({
            ...user,
            albumsQty: albums.filter((album) => album.userId === user.id).length
          });
        });

        setParsedUsers(tempParsedUsers);
      } catch (error) {
        console.error(error);
      }
    };

    handleParseUsers();
  }, [users]);

  useEffect(() => {
    const handleFilterUsers = (): void => {
      const parsedQuery = query.toLowerCase();
      const result = parsedUsers.filter(
        (item) =>
          item.name.toLowerCase().indexOf(parsedQuery) !== -1 ||
          item.email.toLowerCase().indexOf(parsedQuery) !== -1
      );

      setFilteredUsers(result);
    };

    handleFilterUsers();
  }, [parsedUsers, query]);

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

      <UsersTable users={filteredUsers} />
    </>
  );
};
