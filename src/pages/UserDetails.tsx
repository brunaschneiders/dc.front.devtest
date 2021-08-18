import React from 'react';

export type UserProps = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
};

interface UserDetailsProps {
  user: UserProps;
  onShowAlbumButtonClicked: (modalAlbumsActive: boolean, id: number) => void;
  onCloseButtonClicked: (activeUser: UserProps) => void;
}

export const UserDetails = ({
  user,
  onShowAlbumButtonClicked,
  onCloseButtonClicked
}: UserDetailsProps): JSX.Element => {
  const { id, name, username, email, phone } = user;
  return (
    <main className='container'>
      <h4>Usuário - {name}</h4>
      <button
        type='button'
        className='button'
        onClick={() => onCloseButtonClicked({} as UserProps)}
      >
        Fechar
      </button>
      <div>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <button
          type='button'
          className='button'
          onClick={() => onShowAlbumButtonClicked(true, id)}
        >
          ver álbum
        </button>
      </div>
    </main>
  );
};
