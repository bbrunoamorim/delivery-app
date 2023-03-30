import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import AppContext from '../context/Context';
import Input from './Input';

export default function ProductCard({ index, price, urlImage, title }) {
  const {
    quantityProducts,
    setQuantityProducts,
    disableQuantity,
    setDisableQuantity,
    valorTotal,
    setValorTotal,
  } = useContext(AppContext);

  const idCustomerProd = 'customer_products_';

  const handleClickIncrement = () => {
    setQuantityProducts(quantityProducts + 1);
    setValorTotal(valorTotal + price * 1);
  };

  useEffect(() => {
    if (quantityProducts > 0) {
      setDisableQuantity(false);
    } else {
      setDisableQuantity(true);
    }
  });
  const handleClickDecrement = () => {
    setQuantityProducts(quantityProducts - 1);
    setValorTotal(valorTotal - price * 1);
  };
  return (
    <div>
      <div>
        Valor Total:
        { valorTotal.toLocaleString('pt-Br', {
          minimumFractionDigits: 2,
          currency: 'BRL',
          style: 'currency',
        })}
      </div>
      <h3 data-testid={ `${idCustomerProd}element-card-price-${index}` }>
        {`R$ ${price}`}
      </h3>
      <img
        data-testid={ `${idCustomerProd}img-card-bg-image-${index}` }
        src={ urlImage }
        alt={ title }
      />
      <h4 data-testid={ `${idCustomerProd}element-card-title-${index}` }>
        {title}
      </h4>
      <div>
        <Button
          type="button"
          data-testid={ `${idCustomerProd}button-card-rm-item-${index}` }
          nameBtn="-"
          onClick={ handleClickDecrement }
          disabled={ disableQuantity }
        />
        <Input
          testId={ `${idCustomerProd}input-card-quantity-${index}` }
          value={ quantityProducts }
        />
        <Button
          testId={ `${idCustomerProd}button-card-add-item-${index}` }
          nameBtn="+"
          onClick={ handleClickIncrement }
        />
      </div>
      <div data-testid={ `${idCustomerProd}button-cart` }>
        {(price * quantityProducts).toLocaleString('pt-Br', {
          minimumFractionDigits: 2,
          currency: 'BRL',
          style: 'currency',
        })}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
