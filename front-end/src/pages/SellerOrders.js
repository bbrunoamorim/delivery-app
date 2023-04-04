import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/Context';
import CustomerProductsNavbar from '../components/CustomerProductsNavbar';
import OrderCard from '../components/OrderCard';
import { requestAllSales } from '../services/api';

export default function SellerOrders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const {
    emailLoggedIn,
    userLogged,
  } = useContext(AppContext);

  // const dataset = [
  //   {
  //     id: 1,
  //     userId: 3,
  //     sellerId: 2,
  //     totalPrice: '50.00',
  //     deliveryAddress: 'Rua teste',
  //     deliveryNumber: 10,
  //     saleDate: '2023-04-04T03:24:12.000Z',
  //     status: 'Pendente',
  //     seller: {
  //       name: 'Fulana Pereira',
  //     },
  //   },
  //   {
  //     id: 2,
  //     userId: 3,
  //     sellerId: 2,
  //     totalPrice: '50.00',
  //     deliveryAddress: 'Rua teste',
  //     deliveryNumber: 10,
  //     saleDate: '2023-04-04T03:25:08.000Z',
  //     status: 'Pendente',
  //     seller: {
  //       name: 'Fulana Pereira',
  //     },
  //   },
  // ];

  useEffect(() => {
    const getAllSalesBySeller = async () => {
      try {
        const data = await requestAllSales(emailLoggedIn);
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllSalesBySeller();
  }, [emailLoggedIn]);

  return (
    <div>
      {isLoading ? (<p>Carregando...</p>) : (
        <>
          <CustomerProductsNavbar name={ userLogged } />
          {orders.map(({ id,
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
