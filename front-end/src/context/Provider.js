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
  const [valorTotal, setValorTotal] = useState(0);

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
      valorTotal,
      setValorTotal,
    }),
    [email, password, btnLogin, products, quantityProducts, disableQuantity, valorTotal],
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
