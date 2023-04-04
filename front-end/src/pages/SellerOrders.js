import React, { useState, useCallback, useEffect } from 'react';
import CustomerProductsNavbar from '../components/CustomerProductsNavbar';
import OrderCard from '../components/OrderCard';
import { requestAllSales } from '../services/api';

export default function SellerOrders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const dataset = [
    {
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: '50.00',
      deliveryAddress: 'Rua teste',
      deliveryNumber: 10,
      saleDate: '2023-04-04T03:24:12.000Z',
      status: 'Pendente',
      seller: {
        name: 'Fulana Pereira',
      },
    },
    {
      id: 2,
      userId: 3,
      sellerId: 2,
      totalPrice: '50.00',
      deliveryAddress: 'Rua teste',
      deliveryNumber: 10,
      saleDate: '2023-04-04T03:25:08.000Z',
      status: 'Pendente',
      seller: {
        name: 'Fulana Pereira',
      },
    },
  ];

  const getUserData = () => {
    const userData = localStorage.getItem('user');
    return JSON.parse(userData);
  };

  const getSalesAndProducts = useCallback(async () => {
    try {
      const getUser = getUserData();
      const { email } = getUser;
      const data = await requestAllSales(email);
      const newObj = { dataset };
      setOrders(newObj);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [dataset]);

  useEffect(() => {
    getSalesAndProducts();
  }, [getSalesAndProducts]);

  return (
    <div>
      {isLoading ? (<p>Carregando...</p>) : (
        <>
          <CustomerProductsNavbar name={ dataset.at(0).seller.name } />
          {dataset.map(({ id,
            status,
            saleDate,
            totalPrice,
            deliveryAddress,
          }) => (
            <OrderCard
              key={ id }
              pedido={ id }
              status={ status }
              date={ saleDate }
              total={ totalPrice }
              address={ deliveryAddress }
            />
          ))}
        </>
      )}
    </div>
  );
}
