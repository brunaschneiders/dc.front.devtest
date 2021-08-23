import React, { ReactNode, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

import jsonPlaceholderService from '../services/jsonPlaceholder/service';

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
  filteredUsers: ParsedUserProps[];
  activeUser: UserProps;
  parsedActiveUserAlbums: ParsedAlbumProps[];
  activeUserAlbumPhotos: PhotoProps[];
  requestUsersList: () => void;
  onChangeQueryUser: (newQueryUser: string) => void;
  requestUserDetails: (userId: number) => void;
  requestActiveUserAlbums: (userId: number, pathname: string) => void;
  requestActiveUserAlbumPhotos: (albumId: number) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
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

  const handleParseUsers = useCallback(
    (newUsers: UserProps[], newAlbums: AlbumProps[]) => {
      if (newUsers.length === 0 || newAlbums.length === 0) return;

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
    const newUsers = await jsonPlaceholderService.getUsers();
    const newAlbums = await jsonPlaceholderService.getAlbums();

    handleParseUsers(newUsers, newAlbums);
    setAlbums(newAlbums);
  }, [handleParseUsers]);

  const onChangeQueryUser = useCallback(async (newQueryUser: string) => {
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
      if (parsedUsers.length) {
        const newActiveUser =
          parsedUsers.find((user) => user.id === userId) ?? ({} as UserProps);
        setActiveUser(newActiveUser);
      } else {
        const newActiveUser = await jsonPlaceholderService.getUserById(userId);
        setActiveUser(newActiveUser);
      }
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
      let newActiveUserAlbums: AlbumProps[] = [];
      if (albums.length) {
        newActiveUserAlbums = albums.filter((album) => album.userId === userId);
      } else {
        newActiveUserAlbums = await jsonPlaceholderService.getAlbumsByUserId(
          userId
        );
      }
      const newPhotos = (await jsonPlaceholderService.getPhotos()) ?? [];

      handleParseActiveUserAlbums(newActiveUserAlbums, newPhotos, pathname);
      setPhotos(newPhotos);
    },
    [albums, handleParseActiveUserAlbums]
  );

  const requestActiveUserAlbumPhotos = useCallback(
    async (albumId: number) => {
      if (photos.length) {
        const newActiveUserAlbumPhotos = photos.filter(
          (photo) => photo.albumId === albumId
        );
        setActiveUserAlbumPhotos(newActiveUserAlbumPhotos);
      } else {
        const newActiveUserAlbumPhotos =
          await jsonPlaceholderService.getPhotosByAlbumId(albumId);
        setActiveUserAlbumPhotos(newActiveUserAlbumPhotos);
      }
    },
    [photos]
  );

  return (
    <AppContext.Provider
      value={{
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
