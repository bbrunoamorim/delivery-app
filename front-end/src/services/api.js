import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestProducts = async () => {
  const { data } = await api.get('/products');

  return data;
};

export const requestUsers = async () => {
  const { data } = await api.get('/register');

  return data;
};

export const requestLogin = async (email, password) => {
  const { data } = await api.post('/login', { email, password });

  return data;
};
