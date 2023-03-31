import React, { useContext, useCallback, useEffect } from 'react';
import SubtitleBar from '../components/SubtitleBar';
import ItemOrderDetails from '../components/ItemOrderDetails';
import { requestSales } from '../services/api';
import AppContext from '../context/Context';

export default function SellerOrdersDetails() {
  // const data = JSON.parse(localStorage.getItem('cartItens'));
  /* // variável temporária apenas para testar */
  const data = [
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
  ];

  const { sales, setSales } = useContext(AppContext);

  const getSales = useCallback(async () => {
    const dataset = await requestSales();
    setSales(dataset);
  }, [setSales]);

  useEffect(() => {
    getSales();
  }, [getSales]);
  return (

    <div>
      <h1>Detalhe do Pedido</h1>
      <table>
        <SubtitleBar />
        {
          data.map(({ name, quantity, price }, index) => (
            <ItemOrderDetails
              key={ index }
              name={ name }
              quantity={ quantity }
              price={ price }
              index={ index }
            />
          ))
        }
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        <text>
          Total:
          {
            data.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </text>
      </div>
    </div>
  );
}
