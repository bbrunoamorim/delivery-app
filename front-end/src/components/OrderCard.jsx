import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderCard({ pedido, status, date, total, address }) {
  const history = useHistory();
  const ROUTE = 'seller_orders';
  const ITEM_NUMBER = 'element-order-id-';
  const STATUS = 'element-delivery-status-';
  const DATE = 'element-order-date-';
  const CARD_PRICE = 'element-card-price-';
  const CARD_ADDRESS = 'element-card-address-';
  const FOUR = 4;
  const data = new Date(date);

  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;
  return (
    <section>
      <div
        onClick={ () => { history.push(`/seller/orders/${pedido}`); } }
        onKeyPress=""
        role="button"
        tabIndex="0"
      >
        <div data-testid={ `${ROUTE}__${ITEM_NUMBER}-${pedido}` }>
          Pedido
          <br />
          {String(pedido).padStart(FOUR, '0')}
        </div>
        <div data-testid={ `${ROUTE}__${STATUS}-${pedido}` }>
          {status}
        </div>
        <div data-testid={ `${ROUTE}__${DATE}-${pedido}` }>
          {formattedDate}
        </div>
        <div data-testid={ `${ROUTE}__${CARD_PRICE}-${pedido}` }>
          {Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
        <div data-testid={ `${ROUTE}__${CARD_ADDRESS}-${pedido}` }>
          {address}
        </div>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  pedido: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  total: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};
