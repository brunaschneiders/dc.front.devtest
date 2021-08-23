import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header, Button } from '../../components';
import { AlbumsTitlebarImagesList } from './AlbumsTitlebarImagesList';

export type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

export const AlbumsList = (): JSX.Element => {
  const { goBack } = useHistory();

  return (
    <>
      <Header
        title='Álbuns do Usuário'
        rightContent={
          <Button name='voltar' text='Voltar' onClick={() => goBack()} />
        }
      />

      <AlbumsTitlebarImagesList />
    </>
  );
};
