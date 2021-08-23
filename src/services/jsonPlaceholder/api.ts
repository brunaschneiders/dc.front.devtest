import axios from 'axios';
import URLs from './URLs';

const jsonPlaceholderApi = axios.create({
  baseURL: URLs.jsonPlaceholder
});

export default jsonPlaceholderApi;
