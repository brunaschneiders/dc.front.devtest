import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import jsonPlaceholderService from '../services/jsonPlaceholderService';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export const UsersList = (): JSX.Element => {
  const { push } = useHistory();

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
    if (query) {
      handleFilterUsers();
    }
  }, [users, query]);

  return (
    <>
      <header>
        <h1 className='title'>Lista de usuários</h1>
        <input
          type='text'
          placeholder='Buscar usuarios'
          onChange={(event) => setQuery(event.target.value)}
        />
      </header>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Telefone</td>
            <td>Website</td>
            <td>Quantidade Albums</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {(filteredUsers.length ? filteredUsers : users)?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>0</td>
              <td>
                <button
                  type='button'
                  className='button'
                  onClick={() => push(`usuarios/${item.id}`)}
                >
                  ver detalhe do usuário
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
