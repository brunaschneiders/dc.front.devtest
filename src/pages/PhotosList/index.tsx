import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header, Button } from '../../components';
import { TitlebarPhotosList } from './TitlebarPhotosList';

export type PhotoProps = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

export const PhotosList = (): JSX.Element => {
  const { goBack } = useHistory();

  return (
    <>
      <Header
        title='Fotos do Album'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

      <TitlebarPhotosList />
    </>
  );
};
