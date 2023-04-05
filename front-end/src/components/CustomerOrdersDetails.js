import React from 'react';
import PropTypes from 'prop-types';

function CustomerOrdersDetails({ name, price, quantity, index }) {
  const ORDER_ID = 'customer_order_details__element-order';
  return (
    <tr>
      <td data-testid={ `${ORDER_ID}-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `${ORDER_ID}-table-name-${index}` }>{name}</td>
      <td data-testid={ `${ORDER_ID}-table-quantity-${index}` }>{quantity}</td>
      <td data-testid={ `${ORDER_ID}-table-unit-price-${index}` }>
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `${ORDER_ID}-sub-total-${index}` }>
        {(Math.round(Number(quantity) * price * 100) / 100)
          .toFixed(2)
          .replace('.', ',')}
      </td>
    </tr>
  );
}

CustomerOrdersDetails.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default CustomerOrdersDetails;
