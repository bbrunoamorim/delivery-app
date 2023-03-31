import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import AppContext from '../context/Context';
import Input from './Input';

export default function ProductCard({ index, price, urlImage, title }) {
  const {
    products,
    setProducts,
    inputValue,
    setInputValue,
    setValorTotal,
    handleInputValue,
  } = useContext(AppContext);

  const idCustomerProd = 'customer_products__';

  const handleKeyPress = (event) => {
    const EIGHT = 8;
    const events = event.keyCode || event.which;
    const keyValue = String.fromCharCode(events);
    const regex = /^[a-zA-Z\W]+$/;
    if (events === EIGHT) {
      return;
    }
    if (regex.test(keyValue)) {
      event.preventDefault();
    }
  };
  const value = inputValue[index] || 0;

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart'));
    if (storedItems) {
      setProducts(storedItems);
    }
  }, [setProducts]);

  const updateItemQuantity = (itemid, newQuantity) => {
    const newProducts = products.map((item) => {
      if (item.id === itemid) {
        return {
          ...item,
          quantity: newQuantity,
          totalValue: (newQuantity * price).toFixed(2),
        };
      }
      return item;
    });
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(newProducts));
  };

  const updateCartValue = () => {
    const allProducts = JSON.parse(localStorage.getItem('cart'));
    const cartValue = allProducts.reduce(
      (acc, { totalValue }) => Number(totalValue) + acc,
      0,
    );
    setValorTotal(cartValue);
  };
  const updateAll = (position, newQuantity) => {
    if (newQuantity < 0) newQuantity = 0;
    updateItemQuantity(position, newQuantity);
    setInputValue((prevState) => ({
      ...prevState,
      [position]: +newQuantity,
    }));
    updateCartValue();
  };

  const onChangeInput = ({ target }) => {
    const num = Number(target.value);
    handleInputValue(index, num);
    updateAll(index, num);
  };

  const handleClickIncrement = (position) => {
    const quantityValue = products
      .find((item) => item.id === position).quantity;
    const newQuantity = quantityValue + 1;
    updateAll(position, newQuantity);
  };

  const handleClickDecrement = (position) => {
    const quantityValue = products.find(
      (item) => item.id === position,
    ).quantity;
    const newQuantity = quantityValue - 1;
    updateItemQuantity(position, newQuantity);
    updateAll(position, newQuantity);
  };
  return (
    <div>
      <h3 data-testid={ `${idCustomerProd}element-card-price-${index}` }>
        {price.replace('.', ',')}
      </h3>
      <img
        width="50px"
        data-testid={ `${idCustomerProd}img-card-bg-image-${index}` }
        src={ urlImage }
        alt={ title }
      />
      <h4 data-testid={ `${idCustomerProd}element-card-title-${index}` }>
        {title}
      </h4>
      <div>
        <Button
          testId={ `${idCustomerProd}button-card-rm-item-${index}` }
          nameBtn="-"
          onClick={ () => handleClickDecrement(index) }
        />
        <Input
          onChange={ onChangeInput }
          onKeyDown={ handleKeyPress }
          testId={ `${idCustomerProd}input-card-quantity-${index}` }
          value={ value }
        />
        <Button
          id={ index }
          testId={ `${idCustomerProd}button-card-add-item-${index}` }
          nameBtn="+"
          onClick={ () => handleClickIncrement(index) }
        />
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
