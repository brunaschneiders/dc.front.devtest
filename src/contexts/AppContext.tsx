import React, { ReactNode, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import { toast } from 'react-toastify';

import jsonPlaceholderService from '../services/jsonPlaceholder/service';

import { delay } from '../utils/delay';

type AddressProps = {
  street: string;
  suite: string;
  city: string;
};

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: AddressProps;
};

type ParsedUserProps = { albumsQty: number } & UserProps;

type AlbumProps = {
  id: number;
  userId: number;
  title: string;
};

type ParsedAlbumProps = { url: string; href: string } & AlbumProps;

type PhotoProps = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

interface AppContextProps {
  isLoading: boolean;
  filteredUsers: ParsedUserProps[];
  activeUser: UserProps;
  parsedActiveUserAlbums: ParsedAlbumProps[];
  activeUserAlbumPhotos: PhotoProps[];
  requestUsersList: () => Promise<void>;
  onChangeQueryUser: (newQueryUser: string) => void;
  requestUserDetails: (userId: number) => Promise<void>;
  requestActiveUserAlbums: (userId: number, pathname: string) => Promise<void>;
  requestActiveUserAlbumPhotos: (albumId: number) => Promise<void>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [parsedUsers, setParsedUsers] = useState<ParsedUserProps[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<ParsedUserProps[]>([]);
  const [activeUser, setActiveUser] = useState<UserProps>({} as UserProps);
  const [queryUser, setQueryUser] = useState('');
  const [albums, setAlbums] = useState<AlbumProps[]>([]);
  const [parsedActiveUserAlbums, setParsedActiveUserAlbums] = useState<
    ParsedAlbumProps[]
  >([]);
  const [photos, setPhotos] = useState<PhotoProps[]>([]);
  const [activeUserAlbumPhotos, setActiveUserAlbumPhotos] = useState<
    PhotoProps[]
  >([]);

  const requestErrorMessage =
    'Ops... Algo deu errado ao buscar os dados, tente novamente!';

  const handleParseUsers = useCallback(
    (newUsers: UserProps[], newAlbums: AlbumProps[]) => {
      if (newUsers.length === 0) return;

      const newParsedUsers: ParsedUserProps[] = [];
      newUsers.forEach((user) => {
        newParsedUsers.push({
          ...user,
          albumsQty: newAlbums.filter((album) => album.userId === user.id)
            .length
        });
      });

      setParsedUsers(newParsedUsers);
    },
    []
  );

  const requestUsersList = useCallback(async () => {
    setIsLoading(true);

    try {
      const newUsers = await jsonPlaceholderService.getUsers();
      const newAlbums = await jsonPlaceholderService.getAlbums();

      if (!newUsers.length) throw new Error();

      handleParseUsers(newUsers, newAlbums);
      setAlbums(newAlbums);
    } catch (error) {
      toast.error(requestErrorMessage);
    }

    await delay(200);
    setIsLoading(false);
  }, [handleParseUsers]);

  const onChangeQueryUser = useCallback((newQueryUser: string) => {
    setQueryUser(newQueryUser);
  }, []);

  useEffect(() => {
    const handleFilterUsers = (): void => {
      const parsedQuery = queryUser.toLowerCase();
      const result = parsedUsers.filter(
        (item) =>
          item.name.toLowerCase().indexOf(parsedQuery) !== -1 ||
          item.email.toLowerCase().indexOf(parsedQuery) !== -1
      );

      setFilteredUsers(result);
    };

    handleFilterUsers();
  }, [parsedUsers, queryUser]);

  const requestUserDetails = useCallback(
    async (userId: number) => {
      setIsLoading(true);

      try {
        let newActiveUser;

        if (parsedUsers.length) {
          newActiveUser =
            parsedUsers.find((user) => user.id === userId) ?? ({} as UserProps);
        } else {
          newActiveUser = await jsonPlaceholderService.getUserById(userId);
        }

        if (!newActiveUser) throw new Error();

        setActiveUser(newActiveUser);
      } catch (error) {
        toast.error(requestErrorMessage);
      }

      await delay(200);
      setIsLoading(false);
    },
    [parsedUsers]
  );

  const handleParseActiveUserAlbums = useCallback(
    (
      newAlbumsActiveUser: AlbumProps[],
      newPhotos: PhotoProps[],
      pathname: string
    ) => {
      if (newAlbumsActiveUser.length === 0 || newPhotos.length === 0) return;

      const newParsedActiveUserAlbums: ParsedAlbumProps[] = [];

      newAlbumsActiveUser.forEach((album) => {
        const albumPhotos = newPhotos.filter(
          (photo) => photo.albumId === album.id
        );

        newParsedActiveUserAlbums.push({
          ...album,
          url: albumPhotos[0].url,
          href: `${pathname}/${album.id}`
        });
      });
      setParsedActiveUserAlbums(newParsedActiveUserAlbums);
    },
    []
  );

  const requestActiveUserAlbums = useCallback(
    async (userId: number, pathname: string) => {
      setIsLoading(true);

      try {
        let newActiveUserAlbums: AlbumProps[] = [];

        if (albums.length) {
          newActiveUserAlbums = albums.filter(
            (album) => album.userId === userId
          );
        } else {
          newActiveUserAlbums = await jsonPlaceholderService.getAlbumsByUserId(
            userId
          );
        }

        if (!newActiveUserAlbums.length) throw new Error();

        const newPhotos = await jsonPlaceholderService.getPhotos();

        handleParseActiveUserAlbums(newActiveUserAlbums, newPhotos, pathname);
        setPhotos(newPhotos);
      } catch (error) {
        toast.error(requestErrorMessage);
      }

      await delay(200);
      setIsLoading(false);
    },
    [albums, handleParseActiveUserAlbums]
  );

  const requestActiveUserAlbumPhotos = useCallback(
    async (albumId: number) => {
      setIsLoading(true);

      try {
        let newActiveUserAlbumPhotos;

        if (photos.length) {
          newActiveUserAlbumPhotos = photos.filter(
            (photo) => photo.albumId === albumId
          );
        } else {
          newActiveUserAlbumPhotos =
            await jsonPlaceholderService.getPhotosByAlbumId(albumId);
        }

        if (!newActiveUserAlbumPhotos.length) throw new Error();

        setActiveUserAlbumPhotos(newActiveUserAlbumPhotos);
      } catch (error) {
        toast.error(requestErrorMessage);
      }

      await delay(200);
      setIsLoading(false);
    },
    [photos]
  );

  return (
    <AppContext.Provider
      value={{
        isLoading,
        filteredUsers,
        activeUser,
        parsedActiveUserAlbums,
        activeUserAlbumPhotos,
        requestUsersList,
        onChangeQueryUser,
        requestUserDetails,
        requestActiveUserAlbums,
        requestActiveUserAlbumPhotos
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
