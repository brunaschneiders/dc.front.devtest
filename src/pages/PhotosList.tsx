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
    <div className='container'>
      <strong>Lista de Fotos</strong>
      <button
        type='button'
        className='button'
        onClick={() => onCloseButtonClicked(false)}
      >
        Fechar
      </button>
      <div>
        {photos.map((photo) => (
          <div className='album-box'>
            <div>album id: {photo.albumId}</div>
            <div>{photo.title}</div>
            <div>
              <img alt={photo.title} src={photo.url} />
            </div>
          </div>
        ))}
        <span className='footer'>
          <strong>Paginação</strong>
          <div className='pagination'>
            <div>
              <strong>1</strong>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </span>
      </div>
    </div>
  );
};
