import api from './jsonPlaceholderApi';

const endpoints = {
  users: '/users',
  albums: '/albums',
  photos: '/photos'
};

export default {
  async getUsers() {
    const response = await api.get(endpoints.users);
    return response.data;
  },

  async getAlbums() {
    const response = await api.get(endpoints.albums);
    return response.data;
  },

  async getPhotos() {
    const response = await api.get(endpoints.photos);
    return response.data;
  }
};
