import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../contexts/AppContext';

export const useAlbums = () => {
  const parsedActiveUserAlbums = useContextSelector(
    AppContext,
    (app) => app.parsedActiveUserAlbums
  );
  const requestActiveUserAlbums = useContextSelector(
    AppContext,
    (app) => app.requestActiveUserAlbums
  );

  return {
    parsedActiveUserAlbums,
    requestActiveUserAlbums
  };
};
