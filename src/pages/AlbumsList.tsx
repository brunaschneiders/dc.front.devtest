import React from 'react';

export type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

interface AlbumsListProps {
  albums: AlbumProps[];
  onShowPhotosButtonClicked: (modalPhotosActive: boolean, id: number) => void;
  onCloseButtonClicked: (show: boolean) => void;
}

export const AlbumsList = ({
  albums,
  onShowPhotosButtonClicked,
  onCloseButtonClicked
}: AlbumsListProps): JSX.Element => {
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
      <strong>Album - title</strong>
      <button
        type='button'
        style={{
          color: 'blue',
          textDecoration: 'underline',
          marginRight: 10,
          cursor: 'pointer'
        }}
        onClick={() => onCloseButtonClicked(false)}
      >
        Fechar
      </button>
      <div>
        {albums.map((album) => (
          <div
            style={{
              background: '#ccc',
              margin: 5
            }}
          >
            <div>user: {album.userId}</div>
            <div>{album.title}</div>
            <button
              type='button'
              style={{
                color: 'blue',
                textDecoration: 'underline',
                marginRight: 10,
                cursor: 'pointer'
              }}
              onClick={() => onShowPhotosButtonClicked(true, album.id)}
            >
              ver fotos
            </button>
            <div>...</div>
          </div>
        ))}
      </div>
    </div>
  );
};
