import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import AppContext from '../context/Context';
import Button from './Button';

function RowTable({ name, quantity, price, index, id }) {
  const testidName = 'customer_checkout__element-order-table';

  const { setValorTotal } = useContext(AppContext);

  const updateCheckoutValue = useCallback(
    (updateItemsOrder) => {
      const total = updateItemsOrder.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      );
      setValorTotal(total);
    },
    [setValorTotal],
  );

  const handleClickRemoveProduct = (itemId) => {
    const selectedProducts = JSON.parse(localStorage.getItem('cart'));
    const updateItemsCheckout = selectedProducts.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updateItemsCheckout));
    updateCheckoutValue(updateItemsCheckout);
  };

  return (
    <tr>
      <td data-testid={ `${testidName}-item-number-${index}` }>{index + 1}</td>
      <td data-testid={ `${testidName}-name-${index}` }>{name}</td>
      <td data-testid={ `${testidName}-quantity-${index}` }>{quantity}</td>
      <td data-testid={ `${testidName}-unit-price-${index}` }>
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `${testidName}-sub-total-${index}` }>
        {(Math.round(quantity * price * 100) / 100)
          .toFixed(2)
          .replace('.', ',')}
      </td>
      <td data-testid={ `${testidName}-remove-${index}` }>
        <Button
          type="button"
          nameBtn="X"
          onClick={ () => handleClickRemoveProduct(id) }
        />
      </td>
    </tr>
  );
}

RowTable.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default RowTable;
