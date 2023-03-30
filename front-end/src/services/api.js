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

export const requestCreateUsers = async (createUser) => {
  const { data } = await api.post('/register', createUser);
  return data;
};

export const requestLogin = async (dataset) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await api.post('/login', dataset, config);
  return response;
};
