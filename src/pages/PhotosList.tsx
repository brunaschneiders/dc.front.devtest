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
      <strong>Lista de Fotos</strong>
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
        {photos.map((photo) => (
          <div
            style={{
              background: '#ff9800',
              margin: 5
            }}
          >
            <div>album id: {photo.albumId}</div>
            <div>{photo.title}</div>
            <div>
              <img alt={photo.title} src={photo.url} />
            </div>
          </div>
        ))}
        <span
          style={{
            position: 'fixed',
            bottom: 0,
            padding: 10,
            background: '#FFF',
            width: '100%',
            display: 'flex'
          }}
        >
          <strong>Paginação</strong>
          <div style={{ display: 'flex' }}>
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
