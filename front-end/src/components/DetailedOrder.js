import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function DetailedOrder({ id, orderStatus, orderDate, price }) {
  const history = useHistory();

  const getStatus = (status) => {
    switch (status) {
    case '1':
      return 'Pendente';
    case '2':
      return 'Preparando';
    case '3':
      return 'Em Trânsito';
    case '4':
      return 'Entregue';
    default:
      return 'Status não encontrado';
    }
  };

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
          { getStatus(orderStatus) }
        </h3>
        <div>
          <p
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            { orderDate }
          </p>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>{ price }</p>
        </div>
      </section>
    </button>
  );
}

DetailedOrder.propTypes = {
  id: PropTypes.number.isRequired,
  orderStatus: PropTypes.number.isRequired,
  orderDate: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.number.isRequired,
};
