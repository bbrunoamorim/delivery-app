import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Order({ id, orderDate, status, price }) {
  const history = useHistory();

  const data = new Date(orderDate);

  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <button
      type="button"
      onClick={ () => history.push(`/customer/orders/${id}`) }
    >
      <section>
        <div>
          <p>Pedido</p>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
        </div>
        <h3
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </h3>
        <div>
          <p
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            { formattedDate }
          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            { price.replace('.', ',') }
          </p>
        </div>
      </section>
    </button>
  );
}

Order.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.number.isRequired,
};
