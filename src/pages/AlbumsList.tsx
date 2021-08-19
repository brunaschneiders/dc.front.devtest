import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import jsonPlaceholderService from '../services/jsonPlaceholderService';

export type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

export const AlbumsList = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const { push, location, goBack } = useHistory();

  const [albums, setAlbums] = useState([] as AlbumProps[]);

  useEffect(() => {
    const getAlbums = async (): Promise<void> => {
      if (!Number(userId)) return;

      try {
        const response = await jsonPlaceholderService.getAlbumsByUserId(
          Number(userId)
        );

        setAlbums(response);
      } catch (error) {
        console.error(error);
      }
    };

    getAlbums();
  }, [userId]);

  return (
    <main className='container'>
      <h4>Album - title</h4>
      <button type='button' className='button' onClick={() => goBack()}>
        Voltar
      </button>
      {albums.map((album) => (
        <div key={album.id} className='album-box'>
          <div>user: {album.userId}</div>
          <div>{album.title}</div>
          <button
            type='button'
            className='button'
            onClick={() => push(`${location.pathname}/${album.id}`)}
          >
            ver fotos
          </button>
          <div>...</div>
        </div>
      ))}
    </main>
  );
};
