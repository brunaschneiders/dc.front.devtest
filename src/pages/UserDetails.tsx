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
    <div
      style={{
        border: '1px solid #ccc',
        marginTop: 10,
        padding: 10,
        position: 'absolute',
        top: 0,
        background: '#fff'
      }}
    >
      <strong>Usuário - {name}</strong>
      <button
        type='button'
        style={{
          color: 'blue',
          textDecoration: 'underline',
          marginRight: 10,
          cursor: 'pointer'
        }}
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
          style={{
            color: 'blue',
            textDecoration: 'underline',
            marginRight: 10,
            cursor: 'pointer'
          }}
          onClick={() => onShowAlbumButtonClicked(true, id)}
        >
          ver álbum
        </button>
      </div>
    </div>
  );
};
