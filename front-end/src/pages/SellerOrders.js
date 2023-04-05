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
