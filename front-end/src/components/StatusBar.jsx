import PropTypes from 'prop-types';

export default function StatusBar({ order, date, status, updateStatus }) {
  const ROUTE = 'seller_order_details';
  const LABEL_ORDER = 'element-order-details-label-order-id';
  const ORDER_DATE = 'element-order-details-label-order-date';
  const DELIVERY_STATUS = 'element-order-details-label-delivery-status';
  const DISPATCH_CHECK = 'button-dispatch-check';
  const PREPARING_CHECK = 'button-preparing-check';
  const PREPARING = 2;
  const IN_TRANSIT = 3;
  const FOUR = 4;

  const data = new Date(date);

  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <thead>
      <tr>
        <th data-testid={ `${ROUTE}__${LABEL_ORDER}` }>
          PEDIDO
          {String(order).padStart(FOUR, '0')}
        </th>
        <th data-testid={ `${ROUTE}__${ORDER_DATE}` }>
          {formattedDate}

        </th>
        <th data-testid={ `${ROUTE}__${DELIVERY_STATUS}` }>{status}</th>
        <th>
          <button
            disabled={ status !== 'Pendente' }
            data-testid={ `${ROUTE}__${PREPARING_CHECK}` }
            type="button"
            onClick={ () => updateStatus(PREPARING) }
          >
            PREPARAR PEDIDO
          </button>

        </th>
        <th>
          <button
            disabled={ status !== 'Preparando' }
            data-testid={ `${ROUTE}__${DISPATCH_CHECK}` }
            type="button"
            onClick={ () => updateStatus(IN_TRANSIT) }
          >
            SAIU PARA ENTREGA
          </button>

        </th>
      </tr>
    </thead>
  );
}

StatusBar.propTypes = {
  order: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
