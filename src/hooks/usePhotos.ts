import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../contexts/AppContext';

export const usePhotos = () => {
  const activeUserAlbumPhotos = useContextSelector(
    AppContext,
    (app) => app.activeUserAlbumPhotos
  );
  const requestActiveUserAlbumPhotos = useContextSelector(
    AppContext,
    (app) => app.requestActiveUserAlbumPhotos
  );

  return { activeUserAlbumPhotos, requestActiveUserAlbumPhotos };
};
