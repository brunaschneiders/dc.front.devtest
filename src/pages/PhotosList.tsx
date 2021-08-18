import React from 'react';

export type PhotoProps = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

interface PhotosListProps {
  photos: PhotoProps[];
  onCloseButtonClicked: (show: boolean) => void;
}

export const PhotosList = ({
  photos,
  onCloseButtonClicked
}: PhotosListProps): JSX.Element => {
  return (
    <main className='container'>
      <h4>Lista de Fotos</h4>
      <button
        type='button'
        className='button'
        onClick={() => onCloseButtonClicked(false)}
      >
        Fechar
      </button>
      {photos.map((photo) => (
        <div className='album-box'>
          <div>album id: {photo.albumId}</div>
          <div>{photo.title}</div>
          <div>
            <img alt={photo.title} src={photo.url} />
          </div>
        </div>
      ))}
      <footer>
        <strong>Paginação</strong>
        <div className='pagination'>
          <div>
            <strong>1</strong>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </footer>
    </main>
  );
};
