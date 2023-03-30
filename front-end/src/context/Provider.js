import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);
  const [disableQuantity, setDisableQuantity] = useState(true);

  const context = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      btnLogin,
      setBtnLogin,
      products,
      setProducts,
      quantityProducts,
      setQuantityProducts,
      disableQuantity,
      setDisableQuantity,
    }),
    [email, password, btnLogin, products, quantityProducts, disableQuantity],
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
