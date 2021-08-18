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
    <div className='container'>
      <strong>Album - title</strong>
      <button
        type='button'
        className='button'
        onClick={() => onCloseButtonClicked(false)}
      >
        Fechar
      </button>
      <div>
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
      </div>
    </div>
  );
};
