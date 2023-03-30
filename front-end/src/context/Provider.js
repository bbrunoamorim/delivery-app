import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [btnRegister, setBtnRegister] = useState(true);
  const [error, setError] = useState(false);
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
      error,
      setError,
      products,
      setProducts,
      quantityProducts,
      setQuantityProducts,
      disableQuantity,
      setDisableQuantity,
      valorTotal,
      setValorTotal,
      name,
      setName,
      btnRegister,
      setBtnRegister,
    }),
main-group-14-Register-Requisito-07
    [
      email,
      password,
      btnLogin,
      error,
      products,
      quantityProducts,
      disableQuantity,
      valorTotal,
      name,
      btnRegister,
    ],
    [email, password, btnLogin, error, products,
      quantityProducts, disableQuantity, valorTotal], main-group-14
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
