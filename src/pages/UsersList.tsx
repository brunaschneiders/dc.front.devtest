import React, { useState } from 'react';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

interface UsersListProps {
  users: UserProps[];
  onUserClicked: (id: number) => void;
}

export const UsersList = ({
  users,
  onUserClicked
}: UsersListProps): JSX.Element => {
  const [query, setQuery] = useState('');

  let result = users;
  if (query) {
    const parsedQuery = query.toLowerCase();
    result = users.filter(
      (item) =>
        item.name.toLowerCase().indexOf(parsedQuery) !== -1 ||
        item.email.toLowerCase().indexOf(parsedQuery) !== -1
    );
  }

  return (
    <>
      <div style={{ textAlign: 'center', margin: 50 }}>
        <strong style={{ width: '100%', display: 'inline-block' }}>
          Lista de usuários
        </strong>
        <input
          type='text'
          placeholder='Buscar usuarios'
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
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
          {result.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>0</td>
              <td>
                <button
                  type='button'
                  style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    marginRight: 10,
                    cursor: 'pointer'
                  }}
                  onClick={() => onUserClicked(item.id)}
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
