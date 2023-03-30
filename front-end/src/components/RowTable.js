import PropTypes from 'prop-types';

function RowTable({ name, quantity, price, index }) {
  const testidName = 'customer_products__element-order-table';
  return (
    <tr>
      <td data-testid={ `${testidName}-item-number-${index}` }>{ index + 1 }</td>
      <td data-testid={ `${testidName}-name-${index}` }>{ name }</td>
      <td data-testid={ `${testidName}-quantity-${index}` }>{ quantity }</td>
      <td data-testid={ `${testidName}-unit-price-${index}` }>{ price }</td>
      <td data-testid={ `${testidName}-sub-total-${index}` }>{ quantity * price }</td>
      <td
        data-testid={ `${testidName}-remove-${index}` }
      >
        <input type="button" value="Remover" />
      </td>
    </tr>
  );
}

RowTable.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default RowTable;
