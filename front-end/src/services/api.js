import axios from 'axios';

const applicationJson = 'application/json';
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

export const requestCreateAdm = async (createAdm, token) => {
  const config = {

    headers: {
      authorization: token,
    },
  };
  const { data } = await api.post('/admin/manage', createAdm, config);
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

export const requestCheckout = async (dataset, token) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: token,
    },
  };
  const { data } = await api.post('/checkout', dataset, config);
  return data.id;
};

export const requestAllSales = async (email) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': applicationJson,
    },
  };
  const dataset = { email };
  const { data } = await api.post('/orders', dataset, config);

  return data;
};

export const requestSales = async (orderId) => {
  const { data } = await api.get(`/orders/${orderId}`);
  return data;
};

export const requestUserOrders = async (email) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': applicationJson,
    },
  };
  const dataset = { email };
  const { data } = await api.post('/orders/user', dataset, config);

  return data;
};

export const requestSalesProducts = async (orderId) => {
  const { data } = await api.get(`orders/products/${orderId}`);
  return data;
};

export const requestSaleProduct = async (orderId) => {
  const { data } = await api.get(`costumer/${orderId}`);
  return data;
};

export const updateSaleStatus = async (id, status) => {
  const config = {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': applicationJson,
    },
  };
  const dataset = { id, status };
  const { data } = await api.patch('orders/update', dataset, config);
  return data;
};

export const requestSellers = async () => {
  const { data } = await api.get('/users/sellers');
  return data;
};

export const requestCheckoutSellers = async () => {
  const { data } = await api.get('/checkout/sellers');
  return data;
};
