import React, { useCallback, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AppContext from '../context/Context';
import { requestUserOrders } from '../services/api';
import Order from '../components/Order';

export default function CustomerOrders() {
  const { sales, setSales, email } = useContext(AppContext);

  const getSales = useCallback(async () => {
    const data = await requestUserOrders(email);

    setSales(data);
  }, [setSales, email]);

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <>
      <Navbar />
      {
        sales.map(({ id, status, saleDate, totalPrice }) => (
          <Order
            key={ id }
            id={ id }
            status={ status }
            orderDate={ saleDate }
            price={ totalPrice }
          />
        ))
      }
    </>
  );
}
