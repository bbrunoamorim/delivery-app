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
  } = useContext(AppContext);

  const handleClickIncrement = () => {
    setQuantityProducts(quantityProducts + 1);
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
  };
  return (
    <div>
      <h3 data-testid={ `customer_products_element-card-price-${index}` }>
        {`R$ ${price}`}
      </h3>
      <img
        data-testid={ `customer_products_img-card-bg-image-${index}` }
        src={ urlImage }
        alt={ title }
      />
      <h4 data-testid={ `customer_products_element-card-title-${index}` }>
        {title}
      </h4>
      <div>
        <Button
          type="button"
          data-testid={ `customer_products_button-card-rm-item-${index}` }
          nameBtn="-"
          onClick={ handleClickDecrement }
          disabled={ disableQuantity }
        />
        <Input
          testId={ `customer_products_input-card-quantity-${index}` }
          value={ quantityProducts }
        />
        <Button
          testId={ `customer_products_button-card-add-item-${index}` }
          nameBtn="+"
          onClick={ handleClickIncrement }
        />
      </div>
      <div data-testid="customer_products_button-cart">
        total:
        {price * quantityProducts}
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
