import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({
  index,
  price,
  urlImage,
  title,
  cartPrice,
}) {
  return (
    <div>
      <h3
        data-testid={ `customer_products_element-card-price-${index}` }
      >
        { `R$ ${price}` }
      </h3>
      <img
        data-testid={ `customer_products_img-card-bg-image-${index}` }
        src={ urlImage }
        alt={ title }
      />
      <h4
        data-testid={ `customer_products_element-card-title-${index}` }
      >
        { title }
      </h4>
      <div>
        <button
          type="button"
          data-testid={ `customer_products_button-card-rm-item-${index}` }
        >
          -
        </button>
        <input
          data-testid={ `customer_products_input-card-quantity-${index}` }
          type="number"
        />
        <button
          type="button"
          data-testid={ `customer_products_button-card-add-item-${index}` }
        >
          +
        </button>
      </div>
      <button
        type="button"
        data-testid="customer_products_button-cart"
      >
        { `Ver Carrinho: R$ ${cartPrice}` }
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartPrice: PropTypes.number.isRequired,
};
