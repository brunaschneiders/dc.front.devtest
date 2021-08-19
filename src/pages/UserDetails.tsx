import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import jsonPlaceholderService from '../services/jsonPlaceholderService';

export type UserProps = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
};

export const UserDetails = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const { push, location, goBack } = useHistory();

  const [user, setUser] = useState({} as UserProps);
  const { name, username, email, phone } = user;

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      if (!Number(userId)) return;

      try {
        const response = await jsonPlaceholderService.getUserById(
          Number(userId)
        );
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [userId]);

  return (
    <main className='container'>
      <h4>Usuário - {name}</h4>
      <button type='button' className='button' onClick={() => goBack()}>
        Voltar
      </button>
      <div>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <button
          type='button'
          className='button'
          onClick={() => push(`${location.pathname}/albums`)}
        >
          ver álbum
        </button>
      </div>
    </main>
  );
};
