import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import jsonPlaceholderService from '../services/jsonPlaceholderService';

export type PhotoProps = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

export const PhotosList = (): JSX.Element => {
  const { albumId } = useParams<{ albumId: string }>();
  const { goBack } = useHistory();

  const [photos, setPhotos] = useState([] as PhotoProps[]);

  useEffect(() => {
    const getPhotos = async (): Promise<void> => {
      if (!Number(albumId)) return;

      try {
        const response = await jsonPlaceholderService.getPhotosByAlbumId(
          Number(albumId)
        );

        setPhotos(response);
      } catch (error) {
        console.error(error);
      }
    };

    getPhotos();
  }, [albumId]);

  return (
    <main className='container'>
      <h4>Lista de Fotos</h4>
      <button type='button' className='button' onClick={() => goBack()}>
        Voltar
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
