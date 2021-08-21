import api from './jsonPlaceholderApi';

const endpoints = {
  users: '/users',
  albums: '/albums',
  photos: '/photos'
};

export default {
  async getUserById(id: number) {
    const response = await api.get(`${endpoints.users}/${id}`);
    return response.data;
  },

  async getUsers() {
    const response = await api.get(endpoints.users);
    return response.data;
  },

  async getAlbums() {
    const response = await api.get(`${endpoints.albums}`);
    return response.data;
  },

  async getAlbumsByUserId(userId: number) {
    const response = await api.get(`${endpoints.albums}?userId=${userId}`);
    return response.data;
  },

  async getPhotosByAlbumId(albumId: number) {
    const response = await api.get(`${endpoints.photos}?albumId=${albumId}`);
    return response.data;
  }
};
