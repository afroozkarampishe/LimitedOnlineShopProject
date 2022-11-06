import Axios from 'axios';

export const API = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
