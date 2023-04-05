import React from 'react';

export default function CustomerOrdersTitle({ seller, date, id }) {
  const ORDER_ID = 'customer_order_details__element-order';
  const dataHour = new Date(date);
  const correctDate = dataHour.toLocaleString();

  return (
    <tr>
      DETALHES DO PEDIDO
      <th data-testid={ `${ORDER_ID}-details-label-order-id` }>
        Pedido
        {id}
      </th>
      <th data-testid={ `${ORDER_ID}-details-label-seller-name` }>
        Vendedor:
        {seller}
      </th>
      <th data-testid={ `${ORDER_ID}-details-label-order-date` }>
        Data:
        {correctDate}
      </th>
    </tr>
  );
}
