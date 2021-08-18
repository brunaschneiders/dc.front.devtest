import React, { useState, useEffect } from 'react';

import {
  AlbumsList,
  PhotosList,
  UserDetails,
  UsersList,
  PhotoProps,
  AlbumProps,
  UserProps
} from './pages';

import jsonPlaceholderService from './services/jsonPlaceholderService';

import './styles/mainStyles.css';

const App = (): JSX.Element => {
  const [modalAlbumsActive, setModalAlbumsActive] = useState(false);
  const [modalUserActive, setModalUserActive] = useState({} as UserProps);
  const [modalPhotosActive, setModalPhotosActive] = useState(false);
  const [idAlbumPhotos, setIdAlbumPhotos] = useState(0);
  const [idAlbum, setIdAlbum] = useState(0);
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([] as AlbumProps[]);
  const [albumsPhotos, setAlbumsPhotos] = useState([] as PhotoProps[]);

  const handleAlbumClick = (showAlbums: boolean, id: number): void => {
    setModalAlbumsActive(showAlbums);
    setIdAlbum(id);
  };

  const handleUserClick = (index: number): void => {
    setModalUserActive(users[index]);
  };

  const handlePhotosClick = (showPhotos: boolean, id: number): void => {
    setModalPhotosActive(showPhotos);
    setIdAlbumPhotos(id);
  };

  const getUsers = async (): Promise<void> => {
    try {
      const response = await jsonPlaceholderService.getUsers();
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getAlbums = async (): Promise<void> => {
    try {
      const response = await jsonPlaceholderService.getAlbums();
      setAlbums(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getPhotos = async (): Promise<void> => {
    try {
      const response = await jsonPlaceholderService.getPhotos();
      setAlbumsPhotos(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    getAlbums();
    getPhotos();
  }, []);

  const photosFiltered = albumsPhotos.length
    ? albumsPhotos.filter((item) => item.albumId === idAlbumPhotos)
    : [];
  const albumFiltered = albums.length
    ? albums.filter((item) => item.userId === idAlbum)
    : [];

  return (
    <>
      <UsersList users={users} onUserClicked={handleUserClick} />

      {modalAlbumsActive && (
        <AlbumsList
          albums={albumFiltered}
          onCloseButtonClicked={setModalAlbumsActive}
          onShowPhotosButtonClicked={handlePhotosClick}
        />
      )}

      {Object.keys(modalUserActive).length > 0 && (
        <UserDetails
          user={{
            id: modalUserActive.id,
            name: modalUserActive.name,
            username: modalUserActive.username,
            email: modalUserActive.email,
            phone: modalUserActive.phone
          }}
          onShowAlbumButtonClicked={handleAlbumClick}
          onCloseButtonClicked={setModalUserActive}
        />
      )}

      {modalPhotosActive && (
        <PhotosList
          photos={photosFiltered}
          onCloseButtonClicked={setModalPhotosActive}
        />
      )}
    </>
  );
};

export default App;
