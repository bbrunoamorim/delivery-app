import PropTypes from 'prop-types';

export default function ItemOrderDetails({ name, quantity, price, index }) {
  const ROUTE = 'seller_order_details';
  const ITEM_NUMBER = 'element-order-table-item-number';
  const NAME = 'element-order-table-name';
  const QUANTITY = 'element-order-table-quantity';
  const UNIT_PRICE = 'element-order-table-unit-price';
  const SUB_TOTAL = 'element-order-table-sub-total';
  return (
    <tbody>
      <tr>
        <td data-testid={ `${ROUTE}__${ITEM_NUMBER}-${index}` }>{ index + 1 }</td>
        <td data-testid={ `${ROUTE}__${NAME}-${index}` }>{ name }</td>
        <td data-testid={ `${ROUTE}__${QUANTITY}-${index}` }>{ quantity }</td>
        <td data-testid={ `${ROUTE}__${UNIT_PRICE}-${index}` }>
          {(price)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

        </td>
        <td data-testid={ `${ROUTE}__${SUB_TOTAL}-${index}` }>
          { (quantity * price)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }

        </td>
      </tr>
    </tbody>
  );
}

ItemOrderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
