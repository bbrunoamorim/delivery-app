import React, { useCallback, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AppContext from '../context/Context';
import { requestLogin, requestSales } from '../services/api';
import DetailedOrder from '../components/DetailedOrder';

export default function OrderDetails() {
  const { sales, setSales, email, password } = useContext(AppContext);

  const findUser = useCallback(async () => {
    const { data: { message: { id } } } = await requestLogin({ email, password });

    return id;
  }, [email, password]);

  const getSales = useCallback(async () => {
    const data = await requestSales();
    const id = await findUser();

    const userSales = data.filter(({ userId }) => userId === id);

    setSales(userSales);
  }, [setSales, findUser]);

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <>
      <Navbar />
      {
        sales.map(({ id, status, saleDate, totalPrice }) => (
          <DetailedOrder
            key={ id }
            id={ id }
            orderStatus={ status }
            orderDate={ saleDate }
            price={ totalPrice }
          />
        ))
      }
    </>
  );
}
