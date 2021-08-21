import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Header, Button } from '../../components';
import { TitlebarPhotosList } from './TitlebarPhotosList';

import jsonPlaceholderService from '../../services/jsonPlaceholderService';

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
    <>
      <Header
        title='Fotos do Album'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

      <TitlebarPhotosList photos={photos} />
    </>
  );
};
