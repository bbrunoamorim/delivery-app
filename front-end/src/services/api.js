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

export const requestLogin = async (dataset) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': applicationJson,
    },
  };
  const response = await api.post('/login', dataset, config);
  return response;
};

export const requestCheckout = async (dataset) => {
  const { data } = await api.post('/checkout', dataset);
  return data.id;
};

// export const requestAllSales = async (email) => {
//   const config = {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       'Content-Type': applicationJson,
//     },
//   };
//   const dataset = { email };
//   console.log(dataset);
//   const { data } = await api.get('/orders', dataset, config);
//   return data;
// };

export const requestAllSales = async (email) => {
  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': applicationJson,
    },
  };
  const dataset = { email };
  const { data } = await api.get('orders', dataset, config);
  return data;
};

export const requestSales = async (orderId) => {
  const { data } = await api.get(`/orders/${orderId}`);
  return data;
};

export const requestSalesProducts = async (orderId) => {
  const { data } = await api.get(`orders/products/${orderId}`);
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
