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
    <main className='container'>
      <h4>Album - title</h4>
      <button
        type='button'
        className='button'
        onClick={() => onCloseButtonClicked(false)}
      >
        Fechar
      </button>
      {albums.map((album) => (
        <div className='album-box'>
          <div>user: {album.userId}</div>
          <div>{album.title}</div>
          <button
            type='button'
            className='button'
            onClick={() => onShowPhotosButtonClicked(true, album.id)}
          >
            ver fotos
          </button>
          <div>...</div>
        </div>
      ))}
    </main>
  );
};
