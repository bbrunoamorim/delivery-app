import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerOrdersTitle({ seller, date, id }) {
  const ORDER_ID = 'customer_order_details__element-order';
  const dataHour = new Date(date);

  const day = dataHour.getDate().toString().padStart(2, '0');
  const month = (dataHour.getMonth() + 1).toString().padStart(2, '0');
  const year = dataHour.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;

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
        {formattedDate}
      </th>
    </tr>
  );
}

CustomerOrdersTitle.propTypes = {
  seller: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
