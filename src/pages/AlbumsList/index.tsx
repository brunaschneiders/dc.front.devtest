import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { PhotoProps } from '..';

import { Header, Button } from '../../components';
import { TitlebarAlbumsList, AlbumListProps } from './TitlebarAlbumsList';

import jsonPlaceholderService from '../../services/jsonPlaceholderService';

export type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

export const AlbumsList = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const { location, goBack } = useHistory();

  const [albums, setAlbums] = useState([] as AlbumProps[]);
  const [photos, setPhotos] = useState([] as PhotoProps[]);
  const [parsedAlbums, setParsedAlbums] = useState([] as AlbumListProps[]);

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

  useEffect(() => {
    const getPhotos = async (): Promise<void> => {
      try {
        const response = await jsonPlaceholderService.getPhotos();

        setPhotos(response);
      } catch (error) {
        console.error(error);
      }
    };

    getPhotos();
  }, []);

  useEffect(() => {
    const handleParseAlbums = async (): Promise<void> => {
      if (albums.length === 0 || photos.length === 0) return;

      try {
        const tempParsedAlbums: AlbumListProps[] = [];

        albums.forEach((album) => {
          const albumPhotos = photos.filter(
            (photo) => photo.albumId === album.id
          );

          tempParsedAlbums.push({
            ...album,
            url: albumPhotos[0].url,
            href: `${location.pathname}/${album.id}`
          });
        });

        setParsedAlbums(tempParsedAlbums);
      } catch (error) {
        console.error(error);
      }
    };

    handleParseAlbums();
  }, [albums, photos, location.pathname]);

  return (
    <>
      <Header
        title='Álbuns do Usuário'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

      <TitlebarAlbumsList albums={parsedAlbums} />
    </>
  );
};
